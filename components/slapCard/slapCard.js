import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { Audio, Font } from 'expo';

export default class SlapCard extends Component {

    state = {
        fontLoaded: false,
        slapped: false,
        clapped: false
    }

	async componentDidMount() {

        // Insertion des nouvelles polices (fonts-family)
        await Font.loadAsync({
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
        });
        this.setState({ fontLoaded: true });
        
        // Load sounds for slap and clap buttons
        this.slapSound = new Audio.Sound();
        this.clapSound = new Audio.Sound();

        this.slapSound.loadAsync(require('../../assets/sounds/slap_sound.mp3'), initialStatus = {}, downloadFirst = true)

        this.clapSound.loadAsync(require('../../assets/sounds/wow_sound.mp3'), initialStatus = {}, downloadFirst = true)
    }
    
    // Slap function
    onSlap = () => {
        // Turns slap state to true
        this.setState({
            slapped: !this.state.slapped
          })
        // Calls slap sound
        this.slapSound.playAsync()
        // Changes the openSlapCard state of the parent component
        this.props.slapped(false);
    }

    // Clap function
    onClap = async () => {
        // Turns clap state to true
        this.setState({
            clapped: !this.state.clapped
          })
        // Calls clap sound
        this.clapSound.playAsync();
        // Changes the openSlapCard state of the parent component
        this.props.slapped(false);
    }
    
  render() {

    var playerStatus;

        if (this.props.playerClap === this.props.playerSlap){
          playerStatus='#EFEAEA'
            } else if (this.props.playerClap > this.props.playerSlap) {
              playerStatus='#00FF6A'
            } else if (this.props.playerClap < this.props.playerSlap && this.props.playerSlap < this.props.playerClap*3) {
              playerStatus='#FFF200'
            } else if (this.props.playerClap *3 < this.props.playerSlap && this.props.playerSlap < this.props.playerClap*6) {
              playerStatus='#FF6C00'
            } else {
              playerStatus='#FF0027'
            }

    return ( 
        <View style={styles.root}>
        <View style={styles.opacity}/>
        <View style={styles.slapShadow}>
        <Image
          style={styles.slapBg}
          source={require("../../assets/backgrounds/SlapCard_Bg.jpg")}
        />
        
        <Center horizontal>
          <Image
            style={{
              width: 243,
              height: 243,
              position: "absolute",
              borderWidth: 6,
              borderColor: playerStatus,
              borderRadius: 120,
              top: "7%"
            }}
            source={this.props.playerImg}
          />
        </Center>
        <TouchableOpacity 
            onPress={this.onSlap}
            style={styles.slap}>
            <Image
            source={require("../../assets/buttons/slap_Button.png")}
            style={styles.slap}
            />
        </TouchableOpacity>
        
        <TouchableOpacity 
            onPress={this.onClap}
            style={styles.wow}>
            <Image
            source={require("../../assets/buttons/Wow_Button.png")}
            style={styles.wow}
            />
        </TouchableOpacity>
       
            {this.state.fontLoaded ? (
                <Text style={styles.withFontClap}>{this.props.playerClap}</Text>
            ) : (
                <Text style={styles.withoutFontClap}>{this.props.playerClap}</Text>
            )}

            {this.state.fontLoaded ? (
                <Text style={styles.withFontSlap}>{this.props.playerSlap}</Text>
            ) : (
                <Text style={styles.withoutFontSlap}>{this.props.playerSlap}</Text>
            )}
        
        </View>
        </View>
        
    )}
}

const styles = StyleSheet.create({
  root: {
    zIndex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
  slap: {
    height: 180,
    width: 180,
    position: "absolute",
    right: "1%",
    top: "35%"
  },
  wow: {
    height: 180,
    width: 200,
    position: "absolute",
    top: "35%",
  },
  // player: {
  //   width: 243,
  //   height: 243,
  //   position: "absolute",
  //   borderWidth: 6,
  //   borderColor: playerStatus,
  //   borderRadius: 120,
  //   top: "7%"
  // },
  slapShadow: {
    top: 180,
    width: 339,
    height: 339,
    position: "absolute",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 7,
    shadowOpacity: 0.7
  },
  slapBg: {
    width: 339,
    height: 339,
    borderRadius: 60,
  },
  withFontClap: {
    top: '2%',
    left: '8%',
    position: "absolute",
    backgroundColor: "transparent",
    color: "#00FF6A",
    fontSize: 25,
    fontFamily: "Sriracha-Regular",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  withoutFontClap: {
    top: '2%',
    left: '10%',
    position: "absolute",
    backgroundColor: "transparent",
    color: "rgba(255,255,255,1)",
    fontSize: 22,
  },
  withFontSlap: {
    top: '2%',
    right: "8%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 25,
    fontFamily: "Sriracha-Regular",
    color: "#FF0027",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  withoutFontSlap: {
    top: '2%',
    right: "10%",
    position: "absolute",
    backgroundColor: "transparent",
    fontSize: 22,
    color: "rgba(255,255,255,1)",
  },
  opacity: {
    width: 1080,
    height: 1920,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,0.7)",
  },
});
