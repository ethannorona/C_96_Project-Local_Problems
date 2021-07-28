import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TextInput, TouchableOpacity, Linking } from 'react-native';

import { Header } from 'react-native-elements';

export default class SignLanguageScreen extends Component{
  constructor(props){
    super(props);

    this.state = {
      search: ''
    }
  }

  render(){
    // Add more sign languages between class
    let singLanguage_images = {
      a: require("../assets/signLanguageAa.png"),
      b: require("../assets/slB.png"),
      c: require("../assets/slC.png"),
      d: require("../assets/slD.png"),
      e: require("../assets/slE.png"),
      f: require("../assets/slF.png"),
      g: require("../assets/slG.png"),
      h: require("../assets/slH.png"),
      i: require("../assets/slI.png"),
      j: require("../assets/slJ.png"),
      k: require("../assets/slK.png"),
      l: require("../assets/slL.png"),
      m: require("../assets/slM.png"),
      n: require("../assets/slN.png"),
      o: require("../assets/slO.png"),
      p: require("../assets/slP.png"),
      q: require("../assets/slQ.png"),
      r: require("../assets/slR.png"),
      s: require("../assets/slS.png"),
      t: require("../assets/slT.png"),
      u: require("../assets/slU.png"),
      v: require("../assets/slV.png"),
      w: require("../assets/slW.png"),
      x: require("../assets/slX.png"),
      y: require("../assets/slY.png"),
      z: require("../assets/slZ.png"),
    }

    return(
      <View style = {styles.container}>
        <View style = {{marginBottom: 20}}>
          <Header
            backgroundColor = "#0f0f0f"
            centerComponent = {{
              text: 'Sign Language',
              style: { 
                color: "white",
                textAlign: 'center', 
                justifyContent: "center", 
                alignItems: "center",
                width: 280,
                fontSize: 30
              }
            }}
          >
          </Header>
        </View>

        <Text style = {styles.introductionText}>
          Type any letter in the text box to show that letter in sign language. Some words in sign languages many not show up for it not being in the local database, but there will be a link below to bring you to a site with words in sign language.
        </Text>

        <View style = {styles.inputView}>
         <TextInput 
          style={styles.inputBox}
          onChangeText={(search) => {
            this.setState({
                search: search.toLowerCase()
              })
            }}
            value={this.state.search}>
        </TextInput>
        </View>
        <Image source = {singLanguage_images[this.state.search]} style = {{width: 100, height: 150}}/>     
        <TouchableOpacity onPress = {() => Linking.openURL("https://www.signasl.org/").catch(err => console.error("Couldn't load page", err))} style = {{marginTop: 50}}>
          <Text style = {styles.linkText}>Click Here To Visit Sign Language Page</Text>
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
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
  },
  linkText: {
    color: "white",
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: "bold",
  },  
  inputBox: { 
    marginBottom: 20, 
    width: '80%', 
    alignSelf: 'left', 
    height: 40, 
    textAlign: 'center', 
    borderWidth: 4, 
    outline: 'none', 
    color: 'white',
    borderColor: 'white',
    borderRadius: 0
  },
  inputView:{
    flexDirection: 'row',
    margin: 20
  },
})