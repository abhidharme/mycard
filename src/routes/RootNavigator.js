import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SplashScreen from '../screens/SplashScreen';
import TabNavigator from './TabNavigator';

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, }}>
      <Stack.Screen name='SplashScreen' component={SplashScreen} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />
    </Stack.Navigator>
  )
}

export default RootNavigator

