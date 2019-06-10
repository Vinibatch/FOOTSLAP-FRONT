import React from 'react';
import { Font } from 'expo';
import Footer from '../footer/footer';
import AdBanner from '../header/adBanner';
import {Thumbnail, Text, Card, CardItem,Left } from 'native-base';
import {StyleSheet, ImageBackground,View,Image,TouchableOpacity,ScrollView,Modal,TouchableHighlight} from "react-native";


class SlapometerScreen2 extends React.Component {
    constructor(props) {
        super(props);

        this.setClubVisible = this.setClubVisible.bind(this),
        this.setClubIisible = this.setClubIisible.bind(this);
        this.setTeamVisible = this.setTeamVisible.bind(this),
        this.setTeamIisible = this.setTeamIisible.bind(this);
        this.state = {
            number1 : 0,
            number: 0,
            fontLoaded: false,
            modalVisible: false,
            Compets: [],
            team: [],
			team1: [],
			team2: [],
            team3: []
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
        'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
        'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
});
    this.setState({ fontLoaded: true });
    var ctx = this;
    fetch('http://10.2.3.184:3000/actu-slap')
    .then((response)=>{
        return response.json();
    })
    .then((actu)=> {
        // console.log("après affichage",actu);
var copyCompets = [...ctx.state.Compets]
	for (var i = 0; i < actu.competitions.length; i++) {
    console.log (actu.competitions[i].name )	
    copyCompets.push(actu.competitions[i].name)
    
    }
    var copyTeam = [ ...ctx.state.team ];
				var copyTeam1 = [ ...ctx.state.team1 ];
				var copyTeam2 = [ ...ctx.state.team2 ];
				var copyTeam3 = [ ...ctx.state.team3 ];

				copyTeam3.push(actu.competitions[1].teamList[0].teams.name);
				for (var i = 0; i < actu.competitions.length; i++) {
					copyTeam.push(actu.competitions[i].name);
				}

				for (var j = 0; j < actu.competitions[2].teamList.length; j++) {
					copyTeam1.push(
	
						 actu.competitions[0].teamList[j].teams.name
                    );

					copyTeam2.push(

						 actu.competitions[2].teamList[j].teams.name
					);
				}
                ctx.setState({Compets:copyCompets})
				ctx.setState({ team: copyTeam });
				ctx.setState({ team1: copyTeam1 });
				ctx.setState({ team2: copyTeam2 });
                ctx.setState({ team3: copyTeam3 });
                console.log(ctx.state.team1)

    
    })
}

toggleModal() {
    this.setState({ modalVisible: !this.state.modalVisible });
 }
                setTeamVisible(){
                    
                    if (this.state.number >= this.state.Compets.length-1) {
                    this.setState({ number: 0 });

                } 
                else if (this.state.number < 0) {
                    this.setState({ number: 0 });
                } 
                else {
                    this.setState({number: this.state.number+1});
                }
                
                }
                setTeamIisible(){

                if (this.state.number === 0) {
                    this.setState({ number: 0 })
                } 
                else if (this.state.number < 0) {
                    this.setState({ number: 0 })
                } 
                else {
                    this.setState({ number:this.state.number -1 })
                }
                
                };

                setClubVisible(){
                    
                    if (this.state.number1 >= this.state.team1.length-1) {

                    this.setState({ number1: 0 });

                } 
                else if (this.state.number1 < 0) {
                    this.setState({ number1: 0 });
                } 
                else {
                    this.setState({number1: this.state.number1+1});
                }
                
                };
                setClubIisible(){

                if (this.state.number1 === 0) {
                    this.setState({ number1: 0 })
                } 
                else if (this.state.number1 < 0) {
                    this.setState({ number1: 0 })
                } 
                else {
                    this.setState({ number1:this.state.number1 -1 })
                }
                
                };
render(){

    ctx = this
    console.log ('((((((((((((('+ctx.state.number1)
    
    console.log("state TEAMMM",this.state.team);
    console.log("state TEAMMM team1",this.state.team1);
    console.log("state TEAMMM team2",this.state.team2);
    console.log("state TEAMMM team3",this.state.team3);
    
    if( ctx.state.number=== 0) {
        var top1 = <Thumbnail 
        large
      style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
      source ={ require('../../assets/players/neymar2.png')}
      />
      var top3 =  <Thumbnail   
      large
     style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
     source ={ require('../../assets/players/rami.png')}
    />
    var top2 = <Thumbnail 
    large
    style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
    source ={ require('../../assets/players/antero2.png')}
  />
      }
    



      else if(ctx.state.number===1){
         top1 = <Thumbnail 
        large
      style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
      source ={ require('../../assets/players/neymar2.png')}
      />
       top3 =  <Thumbnail   
      large
     style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
     source ={ require('../../assets/players/tuchel2.png')}
    />
     top2 = <Thumbnail 
    large
    style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
    source ={ require('../../assets/players/antero2.png')}
  />
      }
    
      else if( ctx.state.number===2){
       top1 = <Thumbnail 
      large
    style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
    source ={ require('../../assets/players/Valverde.png')}
    />
     top3 =  <Thumbnail   
    large
   style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
   source ={ require('../../assets/players/Suarez.png')}
  />
   top2 = <Thumbnail 
  large
  style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
  source ={ require('../../assets/players/Piqué.png')}
/>
    }




    if( ctx.state.number1 === 0) {
        var to1 = <Thumbnail 
        large
      style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
      source ={ require('../../assets/players/antero2.png')}
      />
      var to3 =  <Thumbnail   
      large
     style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
     source ={ require('../../assets/players/neymar2.png')}
    />
    var to2 = <Thumbnail 
    large
    style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
    source ={ require('../../assets/players/rabiot2.png')}
  />
      }
    



      else if(ctx.state.number1===1){
         to1 = <Thumbnail 
        large
      style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
      source ={ require('../../assets/players/germain.png')}
      />
       to3 =  <Thumbnail   
      large
     style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
     source ={ require('../../assets/players/rami.png')}
    />
     to2 = <Thumbnail 
    large
    style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
    source ={ require('../../assets/players/thauvin.png')}
  />
      }


            //    CONDITION CARD 2 

if (ctx.state.number1 === 2 && ctx.state.team3===0) {
    to1 = <Thumbnail 
    large
  style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
  source ={ require('../../assets/players/Benzema.png')}
  />
   to3 =  <Thumbnail   
  large
 style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
 source ={ require('../../assets/players/Ballondor.png')}
/>
 to2 = <Thumbnail 
large
style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
source ={ require('../../assets/players/Bale.png')}
/>

    
}







  
     
    
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

                    <TouchableOpacity  onPress={this.setTeamIisible}> 
                    <Image 
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/icons/left-chevron.png')}
                    />
                    </TouchableOpacity>

                    <View style = {{alignItems: 'center',width:'60%', backgroundColor: '#0062FF'}}>
                        {this.state.fontLoaded ? (
                            <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : "white"}} >
                {ctx.state.Compets[ctx.state.number]}
                            </Text>
                            ):null }
                    </View>
                    

                    <TouchableOpacity  onPress={this.setTeamVisible}>
                    <Image 
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/icons/right-chevron.png')}
                    />
                    </TouchableOpacity>

                </View>


                <View style={{flexDirection:'row',width:'90%', justifyContent:'space-around'}}>
                            {top1}
                            {top3}
                            {top2}
                {/* <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
                source ={ require('../../assets/players/neymar2.png')}
                />
                <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
                source ={ require('../../assets/players/rami.png.jpg')}
                />
                <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
                source ={ require('../../assets/players/antero2.png')}
                /> */}
                </View>

                <View style={{flexDirection:'row',alignItems:'flex-end'}} >
                <View style={{ width: 100, height:60, borderWidth:5,borderRightWidth:0, borderColor: '#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                <View style={{ width: 100, height: 90,  borderWidth:5, borderColor:'#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                <View style={{ width: 100, height: 40, borderWidth:5,borderLeftWidth:0, borderColor:'#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                </View>                       

                <TouchableOpacity 
                    onPress = {() => {this.toggleModal(true)}}
                    style={{borderBottomWidth:1, borderColor: '#0062FF',borderRadius:10, width:'30%',alignItems:'center'}}
                    >
                    {this.state.fontLoaded ? (
                            <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17,color : '#0062FF'}} >
                        Classement
                            </Text>
                            ):null }
                </TouchableOpacity>

                </View>


              
                            {/* DEUXIEME CARD */}
               
                <View style={{width:'90%', height:400, backgroundColor:'white', borderWidth:2,borderColor: '#0062FF',opacity: 0.9,marginTop: 20, justifyContent:"space-around", alignItems:"center"}}>


                <View style={{flexDirection:'row',width:'90%', justifyContent:'space-between'}}>

                    <TouchableOpacity  onPress={this.setClubIisible}> 
                    <Image 
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/icons/left-chevron.png')}
                    />
                    </TouchableOpacity>

                    <View style = {{alignItems: 'center',width:'60%', backgroundColor: '#0062FF'}}>
                        {this.state.fontLoaded ? (
                            <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : "white", textAlign:"center"}} >
                                {
                                    this.state.number === 0
                                     ?ctx.state.team1[ctx.state.number1]
                                     :this.state.number === 1
                                      ?ctx.state.team3[0]
                                      :this.state.number === 2
                                       ?ctx.state.team2[ctx.state.number1]
                                       :null
                                }
                            </Text>
                            ):null }
                    </View>
                    

                    <TouchableOpacity  onPress={this.setClubVisible}>
                    <Image 
                    style={{ width: 30, height: 30 }}
                    source={require('../../assets/icons/right-chevron.png')}
                    />
                    </TouchableOpacity>

                </View>


                <View style={{flexDirection:'row',width:'90%', justifyContent:'space-around'}}>
                                {to1}
                                {to3}
                                {to2}
                {/* <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:40,left:2 }}
                source ={ require('../../assets/players/antero2.png')}
                />
                <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:5}}
                source ={ require('../../assets/players/neymar2.png')}
                />
                <Thumbnail
                large
                style={{ borderWidth : 2,borderColor: '#FF0027',top:60,right:2}}
                source ={ require('../../assets/players/rabiot2.png')}
                /> */}
                </View>

                <View style={{flexDirection:'row',alignItems:'flex-end'}} >
                <View style={{ width: 100, height:60, borderWidth:5,borderRightWidth:0, borderColor: '#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                <View style={{ width: 100, height: 90,  borderWidth:5, borderColor:'#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                <View style={{ width: 100, height: 40, borderWidth:5,borderLeftWidth:0, borderColor:'#545454',opacity: 0.8}}>
                <Text></Text>
                </View>
                </View>                       

                <TouchableOpacity 
                    onPress = {() => {this.toggleModal(true)}}
                    style={{borderBottomWidth:1, borderColor: '#FFD700',borderRadius:10, width:'30%',alignItems:'center'}}
                    >
                    {this.state.fontLoaded ? (
                            <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17,color : '#0062FF'}} >
                        Classement
                            </Text>
                            ):null }
                </TouchableOpacity>

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

            {/* <TouchableHighlight 
            onPress = {() => {this.toggleModal(this.state.modalVisible)}} >
            <Image  
            style={{width: 30,height: 30}}
            source={require('../../assets/icons/down-chevron.png')}
            />
            </TouchableHighlight> */}

            {/* <Text>TEST</Text> */}

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                   <CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={require('../../assets/players/mbappe2.png')}
                         />
                      </Left>

                       <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                         Kylian Mbappe
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : 80
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  10
                        </Text>
                         ):null }

                       </View>

                   </CardItem>
                   

            </Card>

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                   <CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={require('../../assets/players/alves2.png')}
                         />
                      </Left>

                       <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                          Dani Alves
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : 70
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  10
                        </Text>
                         ):null }

                       </View>

                   </CardItem>
                   

            </Card>

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                   <CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={require('../../assets/players/kimpembe2.png')}
                         />
                      </Left>

                       <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                          Presnel Kimpembe
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : 65
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  10
                        </Text>
                         ):null }

                       </View>

                   </CardItem>
                   

            </Card>

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                   <CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={require('../../assets/players/marquinhos2.png')}
                         />
                      </Left>

                       <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                          Marquinhos 
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : 50
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  10
                        </Text>
                         ):null }

                       </View>

                   </CardItem>
                   

            </Card>

            <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

<CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

   <Left>
      <Thumbnail
       style={{ borderWidth : 2,borderColor: '#FF0027'}}
       source={require('../../assets/players/nasser2.png')}
      />
   </Left>

    <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

    {this.state.fontLoaded ? (
     <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
       Nasser Al Khelaifi  
     </Text>
     ) :  null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
       Slap : 45
     </Text>
     ):null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
       Clap :  9
     </Text>
      ):null }

    </View>

</CardItem>


</Card>
<Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

<CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

   <Left>
      <Thumbnail
       style={{ borderWidth : 2,borderColor: '#FF0027'}}
       source={require('../../assets/players/verratti2.png')}
      />
   </Left>

    <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

    {this.state.fontLoaded ? (
     <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
       Marco Verrati 
     </Text>
     ) :  null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
       Slap : 43
     </Text>
     ):null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
       Clap :  8
     </Text>
      ):null }

    </View>

</CardItem>


</Card>
<Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

<CardItem style ={{ alignContent : 'center', alignItems: 'center', borderWidth:2, borderColor: '#0062FF'}} >

   <Left>
      <Thumbnail
       style={{ borderWidth : 2,borderColor: '#FF0027'}}
       source={require('../../assets/players/areola2.png')}
      />
   </Left>

    <View style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

    {this.state.fontLoaded ? (
     <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
       Alphonse Areola  
     </Text>
     ) :  null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
       Slap : 32
     </Text>
     ):null }
    {this.state.fontLoaded ? (
     <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
       Clap :  7
     </Text>
      ):null }

    </View>

</CardItem>


</Card>

                

            </View>

            </ScrollView>
            <TouchableHighlight onPress = {() => {this.toggleModal(this.state.modalVisible)}}>
            <Image  
            style={{width: 30,height: 30}}
            source={require('../../assets/icons/down-chevron.png')}
            />
            </TouchableHighlight>

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
