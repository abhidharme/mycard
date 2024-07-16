import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Functional component named 'HealthSafety'
const HealthSafety = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Heath</Text>
    </View>
  )
}

export default HealthSafety

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