          import React from 'react';
          import { Font } from 'expo';

          import { Container,Containt, Input, Item, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Toast,Button,Card, CardItem} from 'native-base';
          import {ImageBackground,View,Image,TouchableOpacity,ScrollView} from "react-native";



          class SlapometerScreen extends React.Component {
            constructor() {
          		super();

          		this.state = {
          			fontLoaded: false
          		};
          	}
          	async componentDidMount() {
          		await Font.loadAsync({
          			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
          			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
          		});

          		this.setState({ fontLoaded: true });
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
            var listPlayers = [
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'MESSI',
                img: require('../../assets/players/messi.jpg'),
                clap: '10K',
                slap: '200K'
              },
              {
                name: 'RONALDO',
                img: require('../../assets/players/Ronaldo.jpg'),
                clap: '10K',
                slap: '200K'
              }
            ];
            var items = listPlayers.map((element, i) => {
              return (
                <List
                  style={{
                    backgroundColor: 'pink',
                    opacity: 0.8,
                    marginTop: 10,
                    marginLeft: "auto",
                    marginRight: "auto"
                  }}
                >
                  <ListItem avatar>
                    <Left>
                      <Thumbnail
                        style={{ marginBottom: 2, marginTop: -8, borderWidth: 2, borderColor: '#FF0027' }}
                        source={element.img}
                      />
                    </Left>
                    <Body style={{ height: 70 }}>
                      {this.state.fontLoaded ? (
                        <Text style={{ fontFamily: 'McLaren-Regular', fontSize: 25, textAlign: 'center' }}>
                          {element.name}
                        </Text>
                      ) : (
                        <Text style={{ fontSize: 25, textAlign: 'center' }}>{element.name}</Text>
                      )}

                      <View
                        style={{
                          display: 'flex',
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                          alignItems: 'center'
                        }}
                      >
                        {this.state.fontLoaded ? (
                          <Text
                            style={{
                              fontFamily: 'Sriracha-Regular',
                              fontSize: 22,
                              textAlign: 'center'
                            }}
                          >
                            Clap: {element.clap}
                          </Text>
                        ) : (
                          <Text style={{ fontSize: 22, textAlign: 'center' }}>Clap: {element.clap}</Text>
                        )}
                        {this.state.fontLoaded ? (
                          <Text
                            style={{
                              fontFamily: 'Sriracha-Regular',
                              fontSize: 22,
                              textAlign: 'center'
                            }}
                          >
                            Slap: {element.slap}
                          </Text>
                        ) : (
                          <Text style={{ fontSize: 22, textAlign: 'center' }}>Slap: {element.slap}</Text>
                        )}
                      </View>
                    </Body>
                  </ListItem>
                </List>
              );
            });


            return (
              <Container>

              <View      style={{backgroundColor: '#FFF200',
                                flex: 0.2,
                                width:"100%",
                                alignItems : "center",
                                justifyContent : "center",
                                flexDirection : "row",
                                justifyContent: "space-around",
                                marginTop : 40

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

              <ImageBackground source= {require("../../assets/backgrounds/Field_Bg.png")} style ={{
                flex:1,
                width : "100%"
              }}
          >
                            < Card>
                   <CardItem>
                     <Left>
                       <Thumbnail style={{
                         marginLeft: "auto",
                         marginRight: "auto",
                         marginBottom: 1,
                           borderWidth: 2,
                            borderColor: '#FF0027',
                            paddingLeft: 0,
                          }}
                          source={searchPlayer[0].img}
                        />
                       <Body style={{
                           alignItems:"center"
                          }}
                          >
                          {this.state.fontLoaded ? (

                          <Text style={{
                             fontFamily: 'McLaren-Regular',
                              fontSize: 20,
                             }}
                             >
                            {searchPlayer[0].name}
                          </Text>
                        ) :  null }
                        {this.state.fontLoaded ? (

                        <Text style = {{
                          fontFamily: 'McLaren-Regular',
                          fontSize : 20
                        }}
                        >
                        Slap : {searchPlayer[0].slap}
                        </Text>

                        ):null }
                          {this.state.fontLoaded ? (

                          <Text style = {{
                            fontFamily: 'McLaren-Regular',
                            fontSize : 15
                          }}
                          >
                          Clap :  {searchPlayer[0].clap}
                          </Text>

                        ):null }


                       </Body>
                     </Left>
                   </CardItem>
          </Card>





          <Card style = {{
            backgroundColor: "#FFFFFF",
            width:"90%",
             flex : 0.4 ,
              marginTop: 15,
              marginLeft: "auto",
              marginRight: "auto",
              borderWidth: 2,
              display : "block"

          }}>

          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/icons/left-chevron.png')}
          />


          <Button style ={{
            width  : "40%",
            flex : 1,

          marginLeft: 0}}>

          {this.state.fontLoaded ? (
            <Text style = {{

              alignItems:"center",
              marginLeft: "auto",
              marginRight: "auto",

              fontFamily :"McLaren-Regular"
            }}
            >
            Ligue 1
            </Text>
          ):null }
          </Button>

          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/icons/right-chevron.png')}
          />

          <Thumbnail
          style={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 1,
          marginTop: 10,
          borderWidth: 2,
           paddingLeft: 0,
           width : 50,
           height : 50,
           borderColor: '#FF0027' }}
           source= {require("../../assets/players/alves.png")}

          />
          <Thumbnail
          style={{
          marginLeft: 60,
          marginRight: "auto",
          marginBottom: 1,
          marginTop: -20,
          borderWidth: 2,
           paddingLeft: 0,
           width : 50,
           height : 50,
           borderColor: '#FF0027' }}
           source= {require("../../assets/players/rabiot.png")}

          />
          <Thumbnail
          style={{
          marginLeft: "auto",
          marginRight: 60,
          marginBottom: 1,
          marginTop: -50,
          borderWidth: 2,
           paddingLeft: 0,
           width : 50,
           height : 50,
           borderColor: '#FF0027' }}
           source= {require("../../assets/players/neymar.png")}
          />









          <Image
          style={{
            width:550,
             height:300,
             marginLeft:-100,
             marginTop: -90,

            }}

          source= {require("../../assets/icons/podium_icon.png")}

          />

          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require('../../assets/icons/bottom-chevron.png')}
          />






          </Card>










              </ImageBackground>


              </Container>

                );
              }
            }


          export default SlapometerScreen;
