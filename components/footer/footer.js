import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { List, ListItem } from 'native-base';
import { Center } from "@builderx/utils";

export default class Footer extends React.Component {

  state = {
    blackboardVisible: false 
  };

onBoardClick = () => {
  console.log('click')
  this.setState({
    blackboardVisible: !this.state.blackboardVisible
  })
}

  render() {

    console.log(this.state.blackboardVisible)

    if(!this.state.blackboardVisible) {
      return <View style={styles.root}>
      <View style={styles.footer} />
      <TouchableOpacity 
        style={styles.menu}
        onPress={this.onBoardClick}>
        <Image
          source={require("../../assets/icons/menu_icon.png")}
          style={styles.menu}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.coach}>
        <Image
          source={require("../../assets/icons/coach_icon.png")}
          style={styles.coach}
        />
      </TouchableOpacity>
      
      <Center horizontal>
        <Text style={styles.text}>Footer</Text>
      </Center>

      <View style={styles.blackboard}>
        <List>
          <ListItem>
            <View style={styles.menuList}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/liveGame_icon.png")}
            />
            <Text style={{color: 'white'}}>Match</Text>
          </View>
          </ListItem>
          <ListItem>
            <TouchableOpacity style={styles.menuList}>
              <Image
                style={styles.icon}
                source={require("../../assets/icons/team_icon.png")}
              />
              <Text style={{color: 'white'}}>Team</Text>
            </TouchableOpacity>
          </ListItem>
          <ListItem>
          <TouchableOpacity style={styles.menuList}>
          <Image
            style={styles.icon}
            source={require("../../assets/icons/world-cup_icon.png")}
          />
          <Text style={{color: 'white'}}>Slapometer</Text>
        </TouchableOpacity>
          </ListItem>
          <ListItem>
          <TouchableOpacity style={styles.menuList}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/Vs_icon.png")}
            />
            <Text style={{color: 'white'}}>Events</Text>
          </TouchableOpacity>
          </ListItem>
      </List>

        </View>
        
      </View>
    } else {
      return <View style={styles.root}>
      <View style={styles.footer} />
      <TouchableOpacity 
        style={styles.menu}
        onPress={this.onBoardClick}>
        <Image
          source={require("../../assets/icons/menu_icon.png")}
          style={styles.menu}
        />
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.coach}>
        <Image
          source={require("../../assets/icons/coach_icon.png")}
          style={styles.coach}
        />
      </TouchableOpacity>
      
      <Center horizontal>
        <Text style={styles.text}>Footer</Text>
      </Center>   
      </View>
    }

  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "white",
    flex: 1
  },
  blackboard: {
    height: "30%",
    width: "50%",
    position: "absolute",
    bottom: "11%",
    left: "2%",
    backgroundColor: '#565656',
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  footer: {
    height: '10%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: "absolute",
    backgroundColor: "#FFF200",
    opacity: 1
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 50
  },
  menuList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menu: {
    height: 42,
    width: 42,
    bottom: '3%',
    left: '7%',
    position: "absolute"
  },
  coach: {
    height: 39,
    width: 38,
    bottom: '3%',
    position: "absolute",
    right: "7%"
  },
  text: {
    bottom: '4%',
    position: "absolute",
    fontSize: 18
  }
});
