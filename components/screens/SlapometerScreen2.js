import React from 'react';
import { Font } from 'expo';
import Footer from '../footer/footer';
import AdBanner from '../header/adBanner';
import {Thumbnail, Text, Card, CardItem,Left } from 'native-base';
import {StyleSheet, ImageBackground,View,Image,TouchableOpacity,ScrollView,Modal,TouchableHighlight} from "react-native";


class SlapometerScreen2 extends React.Component {
    constructor(props) {
        super(props);
        
      this.state = {
            fontLoaded: false,
            modalVisible: false,
    };
  }

    componentDidMount(){

        fetch('http://IP:3000/actu-slap')
    .then((response)=>{
        return response.json();
    })
    .then((actu)=> {
        console.log("après affichage",actu);
    })
    .catch((error) =>{
        console.log('Request failed', error)
    });

    }

  async componentDidMount() {
    await Font.loadAsync({
        'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
        'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
});
    this.setState({ fontLoaded: true });
}

toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
 }


render(){
return(
    <View style={{flex:1, width:'100%'}}>
         <AdBanner/>
            <ImageBackground
                source={require("../../assets/backgrounds/backgroundRond.png")}
                style={styles.ibg}
            >
                <ScrollView 
                     contentContainerStyle={{alignItems:'center'}}
                     centerContent={true} 
                     style={{flex:1, width:'100%'}}>

                <View style={{width:'90%', height:400, backgroundColor:'white', borderWidth:2,borderColor: '#0062FF',opacity: 0.9,marginTop: 20, justifyContent:"space-around", alignItems:"center"}}>


                    <View style={{flexDirection:'row',width:'90%', justifyContent:'space-between'}}>

                        <TouchableOpacity>
                        <Image 
                        style={{ width: 30, height: 30 }}
                        source={require('../../assets/icons/left-chevron.png')}
                        />
                        </TouchableOpacity>

                        <View style = {{alignItems: 'center',width:'60%', backgroundColor: '#0D0F50'}}>
                            {this.state.fontLoaded ? (
                                <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : "white"}} >
                                Ligue 1
                                </Text>
                                ):null }
                        </View>
                        

                        <TouchableOpacity>
                        <Image 
                        style={{ width: 30, height: 30 }}
                        source={require('../../assets/icons/right-chevron.png')}
                        />
                        </TouchableOpacity>

                    </View>
                    
                    
                    <View style={{flexDirection:'row',width:'90%', justifyContent:'space-around'}}>

                    <Thumbnail
                    style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:10, height:70,width:70, borderRadius:100}}
                     source ={ require('../../assets/players/rabiot.png')}
                    />
                    <Thumbnail
                     style={{ borderWidth : 2,borderColor: '#FF0027',top:10, height:70,width:70, borderRadius:100}}
                     source ={ require('../../assets/players/rabiot.png')}
                    />
                    <Thumbnail
                 
                     style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:10, height:70,width:70, borderRadius:100}}
                     source ={ require('../../assets/players/rabiot.png')}
                    />
                    </View>

                    <View style={{flexDirection:'row',alignItems:'flex-end'}} >
                    <View style={{ width: 100, height:60, borderWidth:5,borderRightWidth:0, borderColor: '#0D0F50',opacity: 0.8}}>
                       <Text></Text>
                    </View>
                    <View style={{ width: 100, height: 90,  borderWidth:5, borderColor:'#0D0F50',opacity: 0.8}}>
                       <Text></Text>
                    </View>
                    <View style={{ width: 100, height: 40, borderWidth:5,borderLeftWidth:0, borderColor:'#0D0F50',opacity: 0.8}}>
                      <Text></Text>
                    </View>
                    </View>                       

                    <TouchableOpacity 
                        onPress = {() => {this.toggleModal(true)}}
                        style={{borderBottomWidth:1, borderColor: '#0D0F50',borderRadius:10, width:'30%',alignItems:'center'}}
                        >
                         {this.state.fontLoaded ? (
                                <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : '#0D0F50'}} >
                               Classement
                                </Text>
                                ):null }
                    </TouchableOpacity>

                </View>
                

                
                <View style={{width:'90%', height:400, backgroundColor:'white', borderWidth:2,borderColor: '#0062FF',opacity: 0.9,marginTop: 20}}>

                </View>
                <View style={{width:'90%', height:400, backgroundColor:'white', borderWidth:2,borderColor: '#0062FF',opacity: 0.9,marginTop: 20, marginBottom: 20  }}>

                </View>
                </ScrollView>
            </ImageBackground>
        <Footer/>   

        <Modal 
            animationType = {"slide"} 
            transparent = {false}
            visible = {this.state.modalVisible}
            onRequestClose = {() => { console.log("Modal has been closed.") } }>

            <AdBanner/>

            <ImageBackground
                source={require("../../assets/backgrounds/Field_Bg.png")}
                style={{flex:1, alignItems:"center"}}
                >
            <ScrollView
             contentContainerStyle={{alignItems:'center'}}
             centerContent={true} 
             style={{flex:1, width:'100%'}}
             >

            <View style = {{alignItems:'center'}}>

            <TouchableHighlight 
            onPress = {() => {this.toggleModal(this.state.modalVisible)}} >
            <Image  
            style={{width: 30,height: 30}}
            source={require('../../assets/icons/down-chevron.png')}
            />
            </TouchableHighlight>

            {/* <Text>TEST</Text> */}

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                   <CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={require('../../assets/players/rabiot.png')}
                         />
                      </Left>

                       <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                          Adrien RABIOT
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : 200
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  140
                        </Text>
                         ):null }

                       </View>

                   </CardItem>

            </Card>
            
                
            <TouchableHighlight onPress = {() => {this.toggleModal(this.state.modalVisible)}}>
            <Image  
            style={{width: 30,height: 30}}
            source={require('../../assets/icons/down-chevron.png')}
            />
            </TouchableHighlight>

            </View>

            </ScrollView>

            </ImageBackground>

        </Modal>

</View>


)}
}

const styles = StyleSheet.create({
    staffLine: {
        width:"100%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    attLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    midLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    defLine: {
        width:"95%",
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    goalLine: {
        justifyContent:"space-around",
        alignItems:"center", 
        flex: 0.2,
        flexDirection:"row"
    },
    ibg: {
        flex:1,
        alignItems:"center",
    },
    score: {
        backgroundColor: '#FFD700',
        justifyContent:"space-around",
        alignItems:"center", 
        flexDirection:"row", 
        width:"100%",
        height:90
    },
  });


export default SlapometerScreen2;
