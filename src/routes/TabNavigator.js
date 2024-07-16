import { StyleSheet, Text, View, } from 'react-native'
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Header from '../components/Header';
import FingerPrint from '../screens/FingerPrint';
import Water from '../screens/Water';
import Flight from '../screens/Flight';
import HealthSafety from '../screens/HealthSafety';
import HistoryEdu from '../screens/HistoryEdu';
import CardMemborship from '../screens/CardMemborship';
import AnimatedIcon from '../components/AnimatedIcon';

const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Tab.Navigator
        initialRouteName="FingerPrint"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'FingerPrint') {
              iconName = 'fingerprint';
            } else if (route.name === 'Flight') {
              iconName = 'flight-takeoff';
            } else if (route.name === 'Water') {
              iconName = 'water-drop';
            } else if (route.name === 'HealthSafety') {
              iconName = 'health-and-safety';
            } else if (route.name === 'HistoryEdu') {
              iconName = 'history-edu';
            } else if (route.name === 'CardMemborship') {
              iconName = 'card-membership';
            }

            return <AnimatedIcon name={iconName} focused={focused} color={color} size={28} />;
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: '#000', paddingVertical: 20 },
          tabBarIndicatorStyle: { backgroundColor: 'transparent', },  // Hide the indicator line
        })}
      >
        <Tab.Screen name="FingerPrint" component={FingerPrint} />
        <Tab.Screen name="Flight" component={Flight} />
        <Tab.Screen name="Water" component={Water} />
        <Tab.Screen name="HealthSafety" component={HealthSafety} />
        <Tab.Screen name="HistoryEdu" component={HistoryEdu} />
        <Tab.Screen name="CardMemborship" component={CardMemborship} />
      </Tab.Navigator>
    </View>
  )
}

export default TabNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
})