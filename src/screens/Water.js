import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Functional component named 'Water Screen'
const Water = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Water Drop</Text>
    </View>
  )
}

export default Water

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