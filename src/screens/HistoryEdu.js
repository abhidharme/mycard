import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

// Functional component named 'HistoryEdu'
const HistoryEdu = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>History Education</Text>
    </View>
  )
}

export default HistoryEdu

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