import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';

import 'react-native-gesture-handler';

import { createAppContainer } from 'react-navigation';

import HearingIssueScreen from './screens/HearingIssueScreen';
import SeeingIssueScreen from './screens/SeeingIssueScreen';
import SignLanguageScreen from './screens/SignLanguageScreen';

import TabNavigator from './navigation/TabNavigator'
import StackNavigator from './navigation/StackNavigator'

const Stack = createStackNavigator();

export default function App() {
    return (
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    )
}
