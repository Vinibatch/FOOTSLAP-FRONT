import React from 'react';
import {Text, View,ImageBackground,TouchableOpacity,Image} from 'react-native';
import {Thumbnail, Header} from 'native-base';




class TeamScreen extends React.Component { 
  render() {
  return (
    <View
        style={{flex:1,width:"100%"}}
    >
    <View
            style={{backgroundColor: '#545454',flex:0.03,width:"100%"}}
        >
        </View>
    <ImageBackground 
        source={require("../../assets/backgrounds/Field_Bg.png")}
        style={{flex:1 ,alignItems:"center", width:"100%"}}
        >
       
        <View
            style={{backgroundColor: 'red',justifyContent:"space-around",alignItems:"center", flex: 0.1, flexDirection:"row",width:"100%"}}
        >
        <Text>PUB</Text>
        </View>
        <View
             style={{backgroundColor: '#FFF200',justifyContent:"space-around",alignItems:"center", flex: 0.15, flexDirection:"row", width:"100%"}}
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
                 <Thumbnail source={require("../../assets/logos/logoPsg.jpg")} />
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
            style={{justifyContent:"space-around",alignItems:"center", flex: 0.13,flexDirection:"row"}}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity> 
        </View>
        <View
            style={{width:"90%", justifyContent:"space-around",alignItems:"center", flex: 0.13,flexDirection:"row"}}
        >
             <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={{width:"85%",justifyContent:"space-around",alignItems:"center", flex: 0.13,flexDirection:"row"}}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={{width:"85%",justifyContent:"space-around",alignItems:"center", flex: 0.13,flexDirection:"row"}}
        >
             <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={{width:"95%",justifyContent:"space-around",alignItems:"center", flex: 0.14,flexDirection:"row"}}
        >
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
            <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
             <TouchableOpacity>
            <Thumbnail 
            style={{borderWidth: 2, borderColor:'#FF0027'}}
            source={require("../../assets/players/messi.jpg")} />    
            </TouchableOpacity>
        </View>
        <View
            style={{backgroundColor: '#FFF200',justifyContent:"space-around",alignItems:"center", flex: 0.1,flexDirection:"row",width:"100%"}}
        >
        <Text>FOOTER</Text>
        </View>
        
    </ImageBackground>
    </View>
  )
 }
}

export default TeamScreen;
