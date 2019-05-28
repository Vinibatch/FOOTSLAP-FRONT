import React from 'react';
import {StyleSheet, Text, View, ImageBackground, TouchableOpacity, Image} from 'react-native';
import {Thumbnail} from 'native-base';
import Footer from '../footer/footer';

class LiveGameScreen extends React.Component { 
  render() {
  return (
    <View
        style={{flex:1,width:"100%"}}
    >
    <View
            style={styles.header}
        >
        </View>
    <ImageBackground 
        source={require("../../assets/backgrounds/Field_Bg.png")}
        style={styles.ibg}
        >
       
        <View
            style={styles.pub}
        >
        <Text>PUB</Text>
        </View>
        <View
             style={styles.score}
        >
                 <TouchableOpacity 
                    // onPress={this._onPressButton}
                    >
                    <Image
                        style={{width: 20, height: 20}}
                        source={require('../../assets/icons/left-chevron.png')}
                    />
                 </TouchableOpacity>
                 <Thumbnail source={require("../../assets/logos/logoPsg.jpg")} />
                 <View style={{alignItems:"center"}}>
                 <Text style={{fontSize:40}}>5 - 0</Text>
                 <Text style={{fontSize:15}}>45:00</Text>
                 </View>
                 <Thumbnail source={require("../../assets/logos/logoMarseille.png")} />
                 <TouchableOpacity
                    //  onPress={this._onPressButton}
                     >
                    <Image
                        style={{width: 20., height: 20}}
                        source={require('../../assets/icons/right-chevron.png')}
                    />
                 </TouchableOpacity>
        </View>
        <View
            style={styles.goalLine}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity> 
        </View>
        <View
            style={styles.defLine}
        >
             <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={styles.midLine}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={styles.attLine}
        >
             <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={styles.staffLine}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}            
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
             <TouchableOpacity>
            <Thumbnail 
            style={styles.avatarPlayer}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        {/* <View
            style={{backgroundColor: '#FFF200',justifyContent:"space-around",alignItems:"center", flex: 0.1,flexDirection:"row",width:"100%"}}
        >
        </View> */}
        

        
    </ImageBackground>
    <Footer/>
    </View>
  )
 }
}


const styles = StyleSheet.create({
    avatarPlayer: {
        borderWidth: 2, 
        borderColor:'#FF0027',
    },
    staffLine: {
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.14,
        flexDirection:"row"
    },
    attLine: {
        width:"90%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    midLine: {
        width:"70%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    defLine: {
        width:"92%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    goalLine: {
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.13,
        flexDirection:"row"
    },
    header: {
        backgroundColor: '#545454',
        flex:0.03,
        width:"100%"
    },
    pub: {
        backgroundColor: 'red',
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.1, 
        flexDirection:"row",
        width:"100%"
    },
    ibg: {
        flex:1,
        alignItems:"center",
        width:"100%"
    },
    score: {
        backgroundColor: '#FFF200',
        justifyContent:"space-around",
        alignItems:"center", flex: 0.15, 
        flexDirection:"row", 
        width:"100%"
    },
  });
  

export default LiveGameScreen;
