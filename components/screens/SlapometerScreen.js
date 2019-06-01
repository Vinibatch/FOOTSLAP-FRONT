          import React from 'react';
          import { Font } from 'expo';
          import Footer from '../footer/footer';
          import AdBanner from '../header/adBanner';

          import { Container,Containt, Input, Item, Header, Content, ListItem, Left, Body, Right, Thumbnail, Text,Toast,Button,Card, CardItem,List} from 'native-base';
          import {ImageBackground,View,Image,TouchableOpacity,ScrollView} from "react-native";



          class SlapometerScreen extends React.Component {

            constructor() {
          		super();

          		this.state = {
          			fontLoaded: false,
                visible:false
          		};
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
                visible:true
              })
            }

          render () {
            var searchPlayer = [
              {
                name: 'Lionel Messi',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
            ];








              console.log( this.state.visible)

            return (

              <Container style ={{
                width : "100%"
              }}>



               <AdBanner/>

                 {     // SEARCH BARRE
                 }
              <View      style={{backgroundColor: '#FFF200',
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

                  </View>




             <ScrollView style = {{flex : 1, backgroundColor:"green", }}>

              {
                // SEARCH CARD
              }

               < Card style = {{ width : "100%", opacity: 0.8}}>
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
                 </Card>

                  {
                    // CARD CHAMPIONNAT
                  }

                <Card  style={{width: "100%", height: 330, backgroundColor: 'white', opacity: 0.9}}>


                  <View style = { {position: 'absolute', top: '2%', left: '10%'}}>
                  <Image style={{ width: 30, height: 30 }}
                      source={require('../../assets/icons/left-chevron.png')}
                      />
                      </View>
                      <View style = {{alignItems: 'center', position: 'absolute', top: '3%', backgroundColor: 'pink', textColor : "white", height: 20, width: 200, left : "24%"}}>
                      <Text>
                      Ligue 1</Text>
                      </View>
                      <View style = { {position: 'absolute', top: '2%', right: '10%'}}>
                      <Image style={{width: 30,height: 30, flexDirection : 'row'}}
                            source={require('../../assets/icons/right-chevron.png')}
                        />
                        </View>

                                       <View>
                                       <Thumbnail   style={{  borderColor: '#FF0027',borderWidth: 2, left :"60%", top: '205%'}}
                                             source= {require("../../assets/players/alves.png")}
                                       />
                                       </View>
                                       <View>
                                       <Thumbnail style={{borderColor: '#FF0027',borderWidth: 2, left : "28%", top : "105%" }}
                                             source= {require("../../assets/players/rabiot.png")}
                                             />
                                             </View>
                                           <View>

                                       <Thumbnail style={{ borderColor: '#FF0027',borderWidth: 2, left : "44%", bottom : "20%"}}
                                             source= {require("../../assets/players/neymar.png")}
                                             />
                                       </View>
                      <View style = {{position: 'absolute',top : "35%", left : "25%"}}>
                      <Image style={{width : 200, height :200 }}
                            source={require('../../assets/icons/podium.png')}
                        />
                      </View>
                      <TouchableOpacity onPress={this.visible}>
                                         <Image  style={{width: 30,height: 30, left : "48%", top :'400%'}}
                                                source={require('../../assets/icons/bottom-chevron.png')}
                                                />
                                                {
                                                  this.state.visible
                                                  ? <View style={{height: 300, backgroundColor:"white",opacity: 0.9, top :'40%'}}>


                                                  < Card style = {{ width : "100%", opacity: 0.8}}>
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
                                                    </Card>
                                                    < Card style = {{ width : "100%", opacity: 0.8}}>
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
                                                      </Card>






                                                  </View>
                                                  :null
                                                }
                      </TouchableOpacity>



                      </Card>

                                                {
                                                  // CARD CLUB !!!!!!
                                                }

                      <Card  style={{width: "100%", height: 330, backgroundColor: 'white', opacity: 0.9}}>

                        <View style = { {position: 'absolute', top: '2%', left: '10%'}}>
                        <Image style={{ width: 30, height: 30 }}
                            source={require('../../assets/icons/left-chevron.png')}
                            />
                            </View>
                            <View style = {{alignItems: 'center', position: 'absolute', top: '3%', backgroundColor: 'pink', textColor : "white", height: 20, width: 200, left : "24%"}}>
                            <Text>
                            Club</Text>
                            </View>
                            <View style = { {position: 'absolute', top: '2%', right: '10%'}}>
                            <Image style={{width: 30,height: 30, flexDirection : 'row'}}
                                  source={require('../../assets/icons/right-chevron.png')}
                              />
                              </View>

                                             <View>
                                             <Thumbnail   style={{  borderColor: '#FF0027',borderWidth: 2, left :"60%", top: '205%'}}
                                                   source= {require("../../assets/players/alves.png")}
                                             />
                                             </View>
                                             <View>
                                             <Thumbnail style={{borderColor: '#FF0027',borderWidth: 2, left : "28%", top : "105%" }}
                                                   source= {require("../../assets/players/rabiot.png")}
                                                   />
                                                   </View>
                                                 <View>

                                             <Thumbnail style={{ borderColor: '#FF0027',borderWidth: 2, left : "44%", bottom : "20%"}}
                                                   source= {require("../../assets/players/neymar.png")}
                                                   />
                                             </View>
                            <View style = {{position: 'absolute',top : "35%", left : "25%"}}>
                            <Image style={{width : 200, height :200 }}
                                  source={require('../../assets/icons/podium.png')}
                              />
                            </View>
                            <View>
                                               <Image  style={{width: 30,height: 30, left : "48%", top :'400%'}}
                                                      source={require('../../assets/icons/bottom-chevron.png')}
                                                      />
                            </View>


                            </Card>





          </ScrollView>


        <Footer/>

    </Container>
    );
  }
}
     export default SlapometerScreen;
