import React, { Component } from "react";
import { Center } from "@builderx/utils";
import { View, StyleSheet, Image, Text, TouchableOpacity, ImageBackground } from "react-native";
import { Audio, Font } from 'expo';

export default class SlapCard extends Component {

    state = {
        fontLoaded: false,
        slapped: false,
        clapped: false
    }

    // Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {

        await Font.loadAsync({
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
        });
        
        this.setState({ fontLoaded: true });
                
        this.slapSound = new Audio.Sound();
        this.clapSound = new Audio.Sound();

        this.slapSound.loadAsync(require('../../assets/sounds/slap_sound.mp3'), initialStatus = {}, downloadFirst = true)

        this.clapSound.loadAsync(require('../../assets/sounds/wow_sound.mp3'), initialStatus = {}, downloadFirst = true)
    }
    
    onSlap = () => {
        this.setState({
            slapped: !this.state.slapped
          })
        this.slapSound.playAsync()
        this.props.slapped(false);
        console.log('SLAP')
    }

    onClap = async () => {
        this.setState({
            clapped: !this.state.clapped
          })
        this.clapSound.playAsync();
        this.props.slapped(false);
        console.log('CLAP')
    }
    
  render() {

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
            style={styles.player}
            source={require("../../assets/players/antero.png")}
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
                <Text style={styles.withFontClap}>10k</Text>
            ) : (
                <Text style={styles.withoutFontClap}>10k</Text>
            )}

            {this.state.fontLoaded ? (
                <Text style={styles.withFontSlap}>200K</Text>
            ) : (
                <Text style={styles.withoutFontSlap}>200K</Text>
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
  player: {
    width: 243,
    height: 243,
    position: "absolute",
    borderWidth: 6,
    borderColor: "rgba(255,0,39,1)",
    borderRadius: 120,
    top: "7%"
  },
  slapShadow: {
    top: 200,
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
    // opacity: 0.6,
  },
});
