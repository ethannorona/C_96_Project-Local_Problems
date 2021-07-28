import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import SignLanguageScreen from '../screens/SignLanguageScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const StackNavigator = () => {
  return(
    <Stack.Navigator
      initalRouteName = "Home"
      screenOptions = {{
        headerShown: false
      }}
    >
      <Stack.Screen name = "Home" component = {TabNavigator}/>
      <Stack.Screen name = "SignLanguageScreen" component = {SignLanguageScreen}/>
    </Stack.Navigator>
    
  );
}

export default StackNavigator;