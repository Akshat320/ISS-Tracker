import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import HomeScreen from './screens/HomeScreen'
import IssLocationScreen from './screens/IssLocationScreen'
import MeteoroidsScreen from './screens/MeteoroidsScreen'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator()

export default function App()
{

    return(
      <NavigationContainer>      
      <Stack.Navigator initialRouteName = 'HomeScreen' screenOptions = {{headerShown: false}}>
      <Stack.Screen name = 'HomeScreen' component = {HomeScreen}/>
      <Stack.Screen name = 'IssLocationScreen' component = {IssLocationScreen}/>
      <Stack.Screen name = 'MeteoroidsScreen' component = {MeteoroidsScreen}/>
      </Stack.Navigator>
      </NavigationContainer>
    )
  
}

