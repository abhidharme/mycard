import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Functional component named 'Flight'
const Flight = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Fligh Up</Text>
    </View>
  )
}

export default Flight;

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