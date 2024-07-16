import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

// Functional component named 'CardMemborship'
const CardMemborship = () => {
  // Returns a View component with a Text component inside, both styled accordingly
  return (
    <View style={styles.container}>
      <Text style={styles.text}>CardMemborship</Text>
    </View>
  );
}

export default CardMemborship;

// Stylesheet for styling the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
