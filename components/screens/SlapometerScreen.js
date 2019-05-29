import React from 'react';
import { Container, Input, Item, Text } from 'native-base';
import {ImageBackground,View,Image,TouchableOpacity} from "react-native";



class SlapometerScreen extends React.Component {

render () {
  return (
    <Container>
    <View      style={{backgroundColor: '#FFF200',
                      flex: 0.2,
                      width:"100%",
                      alignItems : "center",
                      justifyContent : "center",
                      flexDirection : "row",
                      justifyContent: "space-around"
                    }}
                    >
            <Input placeholder='Lionel Messi'  style ={{
              backgroundColor: "#FFFFFF",
              flex: 0.70,
              width : "60%",
              borderColor: "#545454",
              borderWidth: 1


            }}
            />


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
    <View style ={{
      backgroundColor: "#FFFFFF",
      width:"80%",
       flex : 0.4 ,
       flexDirection: 'column'

     }}
     >
    </View>
    </ImageBackground>


    </Container>
  )
}
}



export default SlapometerScreen;
