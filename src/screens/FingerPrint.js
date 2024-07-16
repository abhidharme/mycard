import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, TouchableOpacity, Modal, TextInput, Button, Alert } from 'react-native';
import SwipeableViewStack from 'react-native-swipeable-view-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as images from '../constants/ImageConstant';

// Functional component named 'FingerPrint'
const FingerPrint = () => {
  // Initial card data array
  const initialDataArray = [
    { number: '1234 5678 9012 3456', name: 'John Doe', expiry: '12/24', image: images.CARD1 },
    { number: '9876 5432 1098 7654', name: 'Jane Smith', expiry: '11/23', image: images.CARD2 },
    { number: '1111 2222 3333 4444', name: 'Alice Johnson', expiry: '10/25', image: images.CARD3 },
  ];

  const [dataArray, setDataArray] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const [form, setForm] = useState({ number: '', name: '', expiry: '', image: images.CARD2 });

  // Load cards from AsyncStorage when component mounts
  useEffect(() => {
    loadCards();
  }, []);

  // Load cards from AsyncStorage
  const loadCards = async () => {
    try {
      console.log('2345678923456792345678976445678');
      const cards = await AsyncStorage.getItem('cards');
      const parsedCards = JSON.parse(cards);
      setDataArray(parsedCards?.length > 0 ? parsedCards : initialDataArray);
      console.log({ cards, dataArray, parsedCards });
    } catch (error) {
      console.error(error);
    }
  };


  const saveCard = async (newCard) => {
    try {
      const updatedCards = [...dataArray, newCard];
      setDataArray(updatedCards);
      await AsyncStorage.setItem('cards', JSON.stringify(updatedCards));
    } catch (error) {
      console.error(error);
    }
  };

  const onCardSwipe = (swipedIndex) => {
    console.log('Card swiped:', swipedIndex);
  };

  const renderViewItem = (element) => {
    return (
      <View style={{ width: '100%' }}>
        <ImageBackground source={element.image} style={styles.card}>
          <Text style={styles.cardBank}>HDFC Bank</Text>
          <View style={styles.chipBox}>
            <Image source={images.CHIP} style={styles.chip} />
            <Image source={images.CONTACTLESS} style={styles.chip} />
          </View>
          <Text style={styles.cardNumber}>{element.number}</Text>

          <View style={styles.cardDetails}>
            <View style={styles.cardDetails1}>
              <Text style={styles.cardLabels}>Card Holder name</Text>
              <Text style={styles.cardName}>{element.name}</Text>
            </View>
            <View style={styles.cardDetails1}>
              <Text style={styles.cardLabels}>Expiry Date</Text>
              <Text style={styles.cardName}>{element.expiry}</Text>
            </View>
            <View>
              <Image source={images.SYMBOL} style={styles.chip} />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  };

  const onClick = (element) => {
    console.log('Card clicked:', element);
  };

  const formatCardNumber = (number) => {
    return number.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
  };

  const formatExpiryDate = (expiry) => {
    return expiry.replace(/^(\d{2})(\d{2})$/, '$1/$2');
  };

  const handleFormSubmit = async () => {
    const { number, name, expiry } = form;

    if (!number || !name || !expiry) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (number.replace(/\s/g, '').length !== 16) {
      Alert.alert('Error', 'Card number must be 16 digits.');
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiry)) {
      Alert.alert('Error', 'Expiry date must be in MM/YY format.');
      return;
    }

    const randomIndex = Math.floor(Math.random() * 8) + 1;
    console.log({ randomIndex })
    const newCard = { ...form, image: images[`CARD${randomIndex}`] }; // Cycle through CARD1, CARD2, CARD3
    await saveCard(newCard);
    setModalVisible(false);
    setForm({ number: '', name: '', expiry: '', image: images.CARD3 });
  };

  return (
    <View style={styles.container}>
      {console.log(dataArray?.length)}
      {dataArray?.length > 0 ? (
        <SwipeableViewStack
          key={dataArray.length} // Add key to force re-render
          onSwipe={onCardSwipe}
          initialSelectedIndex={1}
          data={dataArray}
          renderItem={renderViewItem}
          onItemClicked={onClick}
          stackSpacing={20}
        />
      ) : (
        <Text style={{ color: '#fff' }}>No Data</Text>
      )}
      <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
        <Text style={styles.addBtnText}>+</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Card Number"
            value={form.number}
            onChangeText={(text) => setForm({ ...form, number: formatCardNumber(text) })}
            keyboardType="numeric"
            maxLength={19} // 16 digits + 3 spaces
          />
          <TextInput
            style={styles.input}
            placeholder="Card Holder Name"
            value={form.name}
            onChangeText={(text) => setForm({ ...form, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Expiry Date (MMYY)"
            value={form.expiry}
            onChangeText={(text) => setForm({ ...form, expiry: formatExpiryDate(text) })}
            keyboardType="numeric"
            maxLength={5} // 4 digits + 1 slash
          />
          <Button title="Save Card" onPress={handleFormSubmit} />
        </View>
      </Modal>
    </View>
  );
};

export default FingerPrint;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    borderWidth: 1,
    width: '100%',
  },
  card: {
    width: 320,
    height: 220,
    padding: 20,
    resizeMode: 'contain',
  },
  cardBank: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 25,
  },
  cardDetails1: {
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 4,
  },
  cardName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  cardExpiry: {
    fontSize: 18,
    color: '#fff',
  },
  chipBox: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  chip: {
    width: 46,
    height: 35.5,
    resizeMode: 'contain',
  },
  cardNumber: {
    fontSize: 26,
    marginTop: 6,
    color: '#fff',
    fontWeight: '700',
  },
  cardLabels: {
    fontSize: 9,
    marginTop: 6,
    color: '#fff',
  },
  addBtn: {
    position: 'absolute',
    bottom: 35,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnText: {
    color: '#868A99',
    fontSize: 30,
    fontWeight: '700',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    width: 250,
    paddingLeft: 10,
  },
});
