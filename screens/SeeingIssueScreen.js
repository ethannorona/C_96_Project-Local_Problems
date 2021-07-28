import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Linking } from 'react-native';

import * as Speech from 'expo-speech';

import { Header } from 'react-native-elements';

import { Audio } from 'expo-av';

export default class SeeingIssueScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      introductionText: "Welcome to Local Problems, here you will learn how to deal with seeing issues and how to use this app to help you. Below to the left is a button to play an audio book and to the right of it is a button to stop the audio. Below the buttons will be a link to send you to a page full of audio books."
    }
  }
  
  introduction = () =>{
    //Speech.speak(this.state.introductionText);
  }

  async playSound() {
    try{
      await Audio.setIsEnabledAsync(true); 
      var playBackObj = await Audio.Sound.createAsync(
        {uri: 'https://ia800901.us.archive.org/30/items/leaves_of_grass_librivox/leaves_01_whitman_64kb.mp3'},
        {shouldPlay: true}
        );
    }
    catch(error){
      console.log();
    }
  } 

  componentDidMount(){
    this.introduction();
  }

  // Add Picture

  render(){
    return(
      <View style = {styles.container}>
        <Image source = {require("../assets/SISI.png")} style = {{width: 150, height: 120, backgroundColor: 'white'}}/>
        <View style = {{marginBottom: 20}}>
          <Header
            backgroundColor = "#0f0f0f"
            centerComponent = {{
              text: 'Seeing Issues',
              style: { 
                color: "white",
                textAlign: 'center', 
                justifyContent: "center", 
                alignItems: "center",
                width: 280,
                fontSize: 24
              }
            }}
          >
          </Header>
        </View>
        <Text style = {styles.introductionText}> {this.state.introductionText} </Text>

        <View style = {styles.inputView}>
          <TouchableOpacity onPress = {() => this.playSound()} style = {styles.audioButton}>
            <Text style = {styles.audioButtonText}> Play Audio Here </Text>
          </TouchableOpacity>
          
          <TouchableOpacity  onPress={() => { Audio.setIsEnabledAsync(false); }} style = {styles.audioButtonStop}>
            <Text style = {styles.audioButtonTextStop}> Stop Audio </Text>
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity onPress = {() => Linking.openURL("https://www.learnoutloud.com/").catch(err => console.error("Couldn't load page", err))} style = {styles.linkButton}>
          <Text style = {styles.linkText}> Click Here To Visit Audio Books Page </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#0f0f0f"
  },
  introductionText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 0,
  },
  audioButtonText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 75,
    fontWeight: 'bold'
  },
  audioButton: {
    backgroundColor: '0f0f0f',
    marginTop: 0,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 1.2,
    width: 180,
    height: 180
  },
  audioButtonTextStop: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 50,
    fontWeight: 'bold'
  },
  audioButtonStop: {
    backgroundColor: '0f0f0f',
    marginTop: 10,
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 1.2,
    width: 100,
    height: 160
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
  linkButton: {
    backgroundColor: '0f0f0f',
    borderColor: 'white',
    borderRadius: 20,
    borderWidth: 1.2,
    width: 300,
    height: 55,
    marginBottom: 50
  },
  linkText: {
    color: "white",
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
})