import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text, ImageBackground, TouchableOpacity } from "react-native";
import { Font } from 'expo';

export default class LoginScreen extends Component {

    state = {
        fontLoaded: false,
    }

    async componentDidMount() {

        // Insertion des nouvelles polices (fonts-family)
        await Font.loadAsync({
            'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
            'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
        });
        this.setState({ fontLoaded: true });    
    }

  render() {
    return (
        <ImageBackground
          source={require("../../assets/backgrounds/FootSlap_Bg.png")}
          style={styles.root}
        >
        <Center horizontal>
          <Image
            source={require("../../assets/logos/FSlogo.png")}
            style={styles.slapLogo}
          />
        </Center>
        <Center horizontal>
          <TouchableOpacity 
            style={styles.fbButton} 
            onPress={ () => this.props.navigation.navigate('Account')}/>
        </Center>
        <Center horizontal>
        {this.state.fontLoaded ? (
                <Text style={styles.facebook}>Facebook</Text>
          ) : (
                <Text style={styles.facebook}>Facebook</Text>
            )}
        </Center>
        <Center horizontal>
          <TouchableOpacity 
            style={styles.googleButton}
            onPress={ () => this.props.navigation.navigate('Account')} />
        </Center>
        <Center horizontal>
          <TouchableOpacity 
            style={styles.emailButton}
            onPress={ () => this.props.navigation.navigate('Account')} />
        </Center>
        <Center horizontal>
            {this.state.fontLoaded ? (
                <Text style={styles.google}>Google</Text>
            ) : (
                <Text style={styles.google}>Google</Text>
            )}        
        </Center>
        <Center horizontal>
            {this.state.fontLoaded ? (
                <Text style={styles.email}>Email</Text>
            ) : (
                <Text style={styles.email}>Email</Text>
            )}         
        </Center>
            {this.state.fontLoaded ? (
                <Text style={styles.title}>Welcome to FootSlap</Text>
            ) : (
                <Text style={styles.title}>Welcome to FootSlap</Text>
            )} 
        <Center horizontal>
            {this.state.fontLoaded ? (
                <Text style={styles.signIn}>Sign in</Text>
            ) : (
                <Text style={styles.signIn}>Sign in</Text>
            )} 
        </Center>
        <Center horizontal>
            {this.state.fontLoaded ? (
                <Text style={styles.createAccount}>Create an account</Text>
            ) : (
                <Text style={styles.createAccount}>Create an account</Text>
            )} 
        </Center>
        </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  root: {
    flex: 1
  },
//   slapBg: {
//    flex: 1,
//   },
  slapLogo: {
    height: 171,
    width: 200,
    position: "absolute",
    // top: "1%"
  },
  fbButton: {
    height: 48,
    width: 285,
    top: '60%',
    position: "absolute",
    backgroundColor: "rgba(56,42,232,1)",
    borderRadius: 50,
    opacity: 1
  },
  facebook: {
    top: '62%',
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "McLaren-Regular",
    fontSize: 21,
    color: "rgba(255,255,255,1)"
  },
  googleButton: {
    top: '70%',
    width: 285,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(244,9,9,1)",
    opacity: 1,
    borderRadius: 50
  },
  emailButton: {
    top: '80%',
    width: 285,
    height: 48,
    position: "absolute",
    backgroundColor: "rgba(239,234,234,1)",
    opacity: 1,
    borderRadius: 50
  },
  google: {
    top: '72%',
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 21,
    fontFamily: "McLaren-Regular",
    color: "rgba(255,255,255,1)"
  },
  email: {
    top: '82%',
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 21,
    fontFamily: "McLaren-Regular",
    color: "rgba(84,84,84,1)"
  },
  title: {
    top: '35%',
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "McLaren-Regular",
    fontSize: 47,
    color: "rgba(255,255,255,1)",
    left: "0.13%",
    right: -0.5,
    textAlign: "center"
  },
  signIn: {
    top: '53%',
    position: "absolute",
    backgroundColor: "transparent",
    fontFamily: "Sriracha-Regular",
    fontSize: 27,
    color: "rgba(255,255,255,1)"
  },
  createAccount: {
    top: '90%',
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 21,
    color: "rgba(255,255,255,1)",
    fontFamily: "Sriracha-Regular"
  }
});
