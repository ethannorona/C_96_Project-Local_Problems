import React from 'react';
import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SeeingIssueScreen from "../screens/SeeingIssueScreen";
import HearingIssueScreen from "../screens/HearingIssueScreen";
import SignLanguageScreen from "../screens/SignLanguageScreen";

const Tab = createMaterialBottomTabNavigator();

const BottomTabNavigator = () =>{
  return(
    <Tab.Navigator
      labeled = {false}
      barStyle = {styles.bottomTabStyle}
      screenOptions = {({route}) => ({
        tabBarIcon: ({ focused, color, size}) => {
          let iconName;
          if(route.name === "HearingIssueScreen"){
            iconName = focused ? 'ear' : 'ear-outline';
          }
          else if(route.name === "SeeingIssueScreen"){
            iconName = focused ? 'eye-off' : 'eye-off-outline'
          }
          return(
            <Ionicons name = {iconName} size = {RFValue(25)} color = {color} style = {styles.icons}/>
          );
        } 
        })}
        activeColor = {'#ee8249'}
        inactiveColor = {'grey'}
    >
      <Tab.Screen name = "SeeingIssueScreen" component = {SeeingIssueScreen}/>
      <Tab.Screen name = "HearingIssueScreen" component = {HearingIssueScreen}/>
  </Tab.Navigator>
  );
}

const styles = StyleSheet.create({ 
  bottomTabStyle: { 
    backgroundColor: "#383838", 
    height: "8%", 
    borderTopLeftRadius: 30, 
    borderTopRightRadius: 30, 
    overflow: "hidden", 
    position: "absolute" 
  }, 
  icons: { 
    width: RFValue(30), 
    height: RFValue(30) 
  } 
});

export default BottomTabNavigator;