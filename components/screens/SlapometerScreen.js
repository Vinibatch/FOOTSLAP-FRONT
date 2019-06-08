          import React from 'react';
          import { Font } from 'expo';
          import Footer from '../footer/footer';
          import AdBanner from '../header/adBanner';
          import { Container, Input, Item, ListItem, Left, Body, Right, Thumbnail, Text,Toast,Button,Card, CardItem,List, ContenContainer, Header, Accordion , Content } from 'native-base';
          import {ImageBackground,View,Image,TouchableOpacity,ScrollView,Modal, TouchableHighlight} from "react-native";
          class SlapometerScreen extends React.Component {
            constructor(props) {
          		super(props);
          		
                this.setTeamVisible = this.setTeamVisible.bind(this),
                this.setTeamIisible = this.setTeamIisible.bind(this);
                this.state = {
          			fontLoaded: false,
                visible:false,
                modalVisible: false,
                number: 0,
                championnats :
                  [
                    {name : "Ligue 1"},
                    {name : "Liga"},
                    {name : "Champions League"},
                  ]
              };
            }
            toggleModal() {
              this.setState({ modalVisible: !this.state.modalVisible });
           }
          	async componentDidMount() {
          		await Font.loadAsync({
          			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
          			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
              });
          		this.setState({ fontLoaded: true });
          	}
            visible=()=>{
              this.setState({
                visible:!this.state.visible
              })
            }


            setTeamVisible(){
      
                if (this.state.number >= this.state.championnats.length-1) {
                  this.setState({ number: 0 });
              } else if (this.state.number < 0) {
                  this.setState({ number: 0 });
              } else {
                  this.setState({number: this.state.number+1});
              }
             
          };
            setTeamIisible(){
        
              if (this.state.number === 0) {
                  this.setState({ number: 0 })
              } else if (this.state.number < 0) {
                  this.setState({ number: 0 })
              } else {
                  this.setState({ number:this.state.number -1 })
              }
              
          };
      






          render () {
            if( this.state.number === 0) {
              var top1 = <Thumbnail 
              style={{ borderColor: '#FF0027',borderWidth: 2, left : "41%", bottom : "170%"}}
              source= {require("../../assets/players/antero.png")}
            />
            var top3 =  <Thumbnail   
            style={{  borderColor: '#FF0027',borderWidth: 2, left :"61%", top: '85%'}}
            source= {require("../../assets/players/draxler.png")}
          />
          var top2 = <Thumbnail 
          style={{borderColor: '#FF0027',borderWidth: 2, left : "20%", bottom : "25%" }}
          source= {require("../../assets/players/tuchel.png")}
        />
            }
          



            else if( this.state.number ===1){
               top1 = <Thumbnail 
              style={{ borderColor: '#FF0027',borderWidth: 2, left : "41%", bottom : "170%"}}
              source= {require("../../assets/players/rabiot.png")}
            />
             top3 =  <Thumbnail   
            style={{  borderColor: '#FF0027',borderWidth: 2, left :"61%", top: '85%'}}
            source= {require("../../assets/players/nasser.png")}
          />
           top2 = <Thumbnail 
          style={{borderColor: '#FF0027',borderWidth: 2, left : "20%", bottom : "25%" }}
          source= {require("../../assets/players/cavani.png")}
        />
            }
            else if( this.state.number ===2){
            top1 = <Thumbnail 
             style={{ borderColor: '#FF0027',borderWidth: 2, left : "41%", bottom : "170%"}}
             source= {require("../../assets/players/mbappe.png")}
            />
            top3 =  <Thumbnail   
              style={{  borderColor: '#FF0027',borderWidth: 2, left :"61%", top: '85%'}}
              source= {require("../../assets/players/kurzawa.png")}
            />
            top2 = <Thumbnail 
              style={{borderColor: '#FF0027',borderWidth: 2, left : "20%", bottom : "25%" }}
              source= {require("../../assets/players/verratti.png")}
            />
           }
           
          

           
            var searchPlayer = [
              {
                name: 'Lionel Messi',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
            ];
            var ListPlayer  = [
              {
                name: 'Adrien Rabiot ',
                img: require('../../assets/players/rabiot.png'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'Presnel Kimpembe',
                img: require('../../assets/players/kimpembe.png'),
                clap: '10K',
                slap: '200K' 
              },
              {
                name: ' Angel Di Maria',
                img: require('../../assets/players/cavani.png'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'Adrien Rabiot ',
                img: require('../../assets/players/rabiot.png'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'Presnel Kimpembe',
                img: require('../../assets/players/kimpembe.png'),
                clap: '10K',
                slap: '200K' 
              },
              {
                name: ' Angel Di Maria',
                img: require('../../assets/players/cavani.png'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'Adrien Rabiot ',
                img: require('../../assets/players/rabiot.png'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'Presnel Kimpembe',
                img: require('../../assets/players/kimpembe.png'),
                clap: '10K',
                slap: '200K' 
              },
              {
                name: ' Angel Di Maria',
                img: require('../../assets/players/cavani.png'),
                clap: '10K',
                slap: '200K'
              }
            ];


              for (var i = 0; i < this.state.championnats.length; i++) {

                
              
              }

            
              

                
                        
                  

            var ListPlayer = ListPlayer.map((element, i) => {
              return (
                <Card style = {{  width : "90%", opacity: 0.8, flexDirection: 'column',display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                   <CardItem style ={{ alignContent : 'center', alignItems: 'center'}} >
                      <Left>
                         <Thumbnail
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={element.img}
                         />
                      </Left>
                       <Body style={{height: 70, borderBottomWidth: 0,alignItems:"flex-end"}}>

                       {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 17 , textAlign: 'left' }}>
                          {element.name}
                        </Text>
                        ) :  null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 17}}>
                          Slap : {element.slap}
                        </Text>
                        ):null }
                       {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  {element.clap}
                        </Text>
                         ):null }
                       </Body>
                   </CardItem>
                 </Card>
              );
            }
              );
            return (
              <Container style ={{
                width : "100%"
              }}>
               <AdBanner/>

                 {     // SEARCH BARRE
                 }
              {/* <View      style={{backgroundColor: '#FFF200',
                                flex: 0.2,
                                width:"100%",
                                alignItems : "center",
                                justifyContent : "center",
                                flexDirection : "row",
                                justifyContent: "space-around",

                              }}
                              >
                      {this.state.fontLoaded ? (
                      <Input placeholder='Lionel Messi'  style ={{
                        backgroundColor: "#FFFFFF",
                        flex: 0.70,
                        width : "60%",
                        borderColor: "#545454",
                        borderWidth: 1,
                        fontFamily: 'McLaren-Regular'
                      }}
                      />
                            ) :  null }
                  <TouchableOpacity >
                  <Image
                  style={{ width:20, height:30}}
                  source= {require("../../assets/icons/search_icon.png")}
                  />
                  </TouchableOpacity>
                  </View> */}


                  <View style = {{ flex: 1, height : 100 }}>

                     
             <ScrollView style = {{flex : 1, opacity:0.9}} 
             >

             <ImageBackground
                source={require("../../assets/backgrounds/Field_Bg.png")}
                style={{flex:1,
                  alignItems:"center",height : 1000}}
                >
              {
                // SEARCH CARD
              }
               {/* < Card style = {{ width : "90%", opacity: 0.8}}>
                   <CardItem >
                     <Left>
                       <Thumbnail
                          large
                          style={{ borderWidth : 2,borderColor: '#FF0027'}}
                          source={searchPlayer[0].img}
                        />
                      </Left>
                <Body style={{alignItems:"flex-end"}}>

                    {this.state.fontLoaded ? (
                        <Text style={{fontFamily: 'McLaren-Regular',fontSize: 20}}>
                          {searchPlayer[0].name}
                        </Text>
                        ) :  null }
                    {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 20}}>
                          Slap : {searchPlayer[0].slap}
                        </Text>
                        ):null }
                    {this.state.fontLoaded ? (
                        <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 15}}>
                          Clap :  {searchPlayer[0].clap}
                        </Text>
                         ):null }
                   </Body>
                   </CardItem>
                 </Card> */}
                  {
                    // CARD CHAMPIONNAT
                  }
            <Card  style={{width: "90%", height: 280, backgroundColor: 'white', opacity: 0.8}}>
              <View style = { { top: '4%', left: '10%'}}>
               <TouchableOpacity onPress={this.setTeamIisible}>
                <Image 
                  style={{ width: 30, height: 30 }}
                  source={require('../../assets/icons/left-chevron.png')}
                />
                </TouchableOpacity>
                </View>
                <View key={i} style = {{alignItems: 'center', position: 'absolute', top: '3%', backgroundColor: '#0D0F50', textColor : "white", height: 34, width: 200, left : "19%"}}>
              {this.state.fontLoaded ? (
                <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : "white"}} >
                {this.state.championnats[this.state.number].name}
                </Text>
                ):null }
              </View>
                  <View style = { { bottom: '6%', left: '80%'}}>
                  <TouchableOpacity onPress={this.setTeamVisible}>
                  <Image 
                    style={{width: 30,height: 30}}
                    source={require('../../assets/icons/right-chevron.png')}
                  />
                </TouchableOpacity>
                </View>
                <View>
               {top3}
                </View>
                  <View>
                    {top2}
                  </View>
                    <View>
                      {top1}
                      </View>
                      <View style = {{position: 'absolute',top : "20%", left : "20%"}}>
                      <Image 
                        style={{width : 200, height :200 }}
                        source={require('../../assets/icons/podium.png')}
                      />
                      </View>
                      <TouchableOpacity onPress = {() => {this.toggleModal(true)}} >
                        <Image  
                        style={{width: 30,height: 30, left : "45%", top :'70%'}}
                        source={require('../../assets/icons/bottom-chevron.png')}
                        />
                       </TouchableOpacity>



                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    <AdBanner/>
                    <ImageBackground
                          source={require("../../assets/backgrounds/Field_Bg.png")}
                          style={{flex:1, alignItems:"center",height : 1900}}
                          >
                     <ScrollView>

                    <View style = {{}}>
                    <TouchableHighlight onPress = {() => {
                          this.toggleModal(this.state.modalVisible)}} >
                          <Image  
                                  style={{width: 30,height: 30, left : "45%", top :'25%'}}
                                  source={require('../../assets/icons/top-chevron.png')}
                                  />
                    </TouchableHighlight>
                        {ListPlayer}
                        
                    <TouchableHighlight onPress = {() => {
                    this.toggleModal(this.state.modalVisible)}} >
                          <Image  
                           style={{width: 30,height: 30, left : "45%", top :'55%'}}
                           source={require('../../assets/icons/top-chevron.png')}
                            />
                    </TouchableHighlight>
                    </View>
                    </ScrollView>

                    </ImageBackground>
                 </Modal>

                            </Card>



                          {/* DEUXIEME CARD */}
                            <Card  style={{width: "90%", height: 280, backgroundColor: 'white', opacity: 0.8}}>
                        <View style = { { top: '4%', left: '10%'}}>
                        <TouchableOpacity>
                          <Image 
                            style={{ width: 30, height: 30 }}
                            source={require('../../assets/icons/left-chevron.png')}
                          />
                          </TouchableOpacity>
                          </View>
                          <View key={i} style = {{alignItems: 'center', position: 'absolute', top: '3%', backgroundColor: '#0D0F50', textColor : "white", height: 34, width: 200, left : "19%"}}>
                        {this.state.fontLoaded ? (
                          <Text style = {{fontFamily: 'McLaren-Regular',fontSize : 18,color : "white"}} >
                          
                          </Text>
                          ):null }
                        </View>
                            <View style = { { bottom: '6%', left: '80%'}}>
                            <TouchableOpacity >
                            <Image 
                              style={{width: 30,height: 30}}
                              source={require('../../assets/icons/right-chevron.png')}
                            />
                          </TouchableOpacity>
                          </View>
                          <View>
                          </View>
                            <View>
                            </View>
                              <View>
                                </View>
                                <View style = {{position: 'absolute',top : "20%", left : "20%"}}>
                                <Image 
                                  style={{width : 200, height :200 }}
                                  source={require('../../assets/icons/podium.png')}
                                />
                                </View>
                                <TouchableOpacity>
                                  <Image  
                                  style={{width: 30,height: 30, left : "45%", top :'70%'}}
                                  source={require('../../assets/icons/bottom-chevron.png')}
                                  />
                                </TouchableOpacity>
                                <Modal animationType = {"slide"} transparent = {false}
                    visible = {this.state.modalVisible}
                    onRequestClose = {() => { console.log("Modal has been closed.") } }>
                    <AdBanner/>
                    <ImageBackground
                          source={require("../../assets/backgrounds/Field_Bg.png")}
                          style={{flex:1,
                            alignItems:"center",height : 1500}}
                          >
                    <ScrollView>
                   
                    <View style = {{}}>
                    <TouchableHighlight onPress = {() => {
                          this.toggleModal(this.state.modalVisible)}} >
                          <Image  
                                  style={{width: 30,height: 30, left : "45%", top :'25%'}}
                                  source={require('../../assets/icons/top-chevron.png')}
                                  />
                        </TouchableHighlight>
                        {ListPlayer}
                        
                        <TouchableHighlight onPress = {() => {
                          this.toggleModal(this.state.modalVisible)}} >
                          <Image  
                                  style={{width: 30,height: 30, left : "45%", top :'75%'}}
                                  source={require('../../assets/icons/top-chevron.png')}
                                  />
                        </TouchableHighlight>
                    </View>
                    </ScrollView>
                    </ImageBackground>

                  </Modal>






                            </Card>
                            </ImageBackground>
                        </ScrollView>
                        </View>
                      <Footer/>
              </Container>
              );
            }
          }
              export default SlapometerScreen;
