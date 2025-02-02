import { LogBox, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/routes/RootNavigator';

const App = () => {

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App
