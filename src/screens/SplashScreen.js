import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('TabNavigator'); // Navigate to CardsScreen after 2 seconds
    }, 2500);

    return () => clearTimeout(timer); // Clear timeout if component unmounts
  }, [navigation]);

  return (
    <View style={styles.container}>
      <LottieView style={styles.lottieStyle}
        source={require("../assets/icons/AnimationCard.json")}
        autoPlay
        loop={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lottieStyle: {
    width: '60%',
    height: 200
  }
});

export default SplashScreen;
