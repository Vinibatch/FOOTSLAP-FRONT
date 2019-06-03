import React from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';
import { List, ListItem } from 'native-base';
import { Center } from '@builderx/utils';
import { Font } from 'expo';
import { withNavigation } from 'react-navigation';

class Footer extends React.Component {

  constructor (props) {
    super(props)
}

  state = {
    fontLoaded: false,
    blackboardVisible: false 
  };

  // Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {

    await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
    });
    
    this.setState({ fontLoaded: true });
}

onBoardClick = () => {
  this.setState({
    blackboardVisible: !this.state.blackboardVisible
  })
}

  render() {


    console.log('nav', this.props.navigation.state.routeName)

    console.log('state', this.state.blackboardVisible)
    
    var popUpMenu;
    if(this.state.blackboardVisible) {
      popUpMenu = <View style={styles.blackboard}>       
        <List>
          <ListItem>
            <TouchableOpacity 
            style={styles.menuList}
            onPress={ () => {this.setState({blackboardVisible: !this.state.blackboardVisible}); this.props.navigation.navigate('Live')}}
            >
            <Image
              style={styles.icon}
              source={require("../../assets/icons/liveGame_icon.png")}
            />

            {this.state.fontLoaded ? (
              <Text style={styles.font}>Match</Text>
            ) : (
              <Text>Match</Text>
            )}

          </TouchableOpacity>
          </ListItem>
          <ListItem>
            <TouchableOpacity 
            style={styles.menuList}
            onPress={ () => {this.setState({blackboardVisible: !this.state.blackboardVisible}); this.props.navigation.navigate('Team')}}
            >
              <Image
                style={styles.icon}
                source={require("../../assets/icons/team_icon.png")}
              />
              
              {this.state.fontLoaded ? (
                <Text style={styles.font}>Team</Text>
              ) : (
                <Text>Team</Text>
              )}

            </TouchableOpacity>
          </ListItem>
          <ListItem>
          <TouchableOpacity 
          style={styles.menuList}
          onPress={ () => {this.setState({blackboardVisible: !this.state.blackboardVisible}); this.props.navigation.navigate('Slapo')}}
          >
          <Image
            style={styles.icon}
            source={require("../../assets/icons/world-cup_icon.png")}
           
          />

            {this.state.fontLoaded ? (
              <Text style={styles.font}>Slapometer</Text>
            ) : (
              <Text>Slapometer</Text>
            )}    

        </TouchableOpacity>
          </ListItem>
          <ListItem>
          <TouchableOpacity 
              style={styles.menuList}
              onPress={ () => {this.setState({blackboardVisible: !this.state.blackboardVisible}); this.props.navigation.navigate('Events')}}>
            <Image
              style={styles.icon}
              source={require("../../assets/icons/Vs_icon.png")}
             
            />

            {this.state.fontLoaded ? (
              <Text style={styles.font}>Events</Text>
            ) : (
              <Text>Events</Text>
            )}

          </TouchableOpacity>
          </ListItem>
      </List>
      </View>
      }   
      return (
      <View>
      <View style={styles.footer} />
      <TouchableOpacity 
        style={styles.menuIcon}
        onPress={this.onBoardClick}>
        <Image
          source={require("../../assets/icons/menu_icon.png")}
          style={styles.menuIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.coach}
        onPress={ () => this.props.navigation.navigate('Account')}
        >
        <Image
          source={require("../../assets/icons/coach_icon.png")}
          style={styles.coach}
        />
      </TouchableOpacity>

      <Center horizontal>

        {this.state.fontLoaded ? (
          <Text style={styles.text}>{this.props.navigation.state.routeName}</Text>
        ) : (
          <Text>Footer</Text>
        )}

      </Center> 
      {popUpMenu}  
      </View>

    )
  }
}

const styles = StyleSheet.create({
  blackboard: {
    height: 280,
    width: 230,
    position: "absolute",
    bottom: 80,
    left: "2%",
    backgroundColor: '#474747',
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 0,
      height: 0
    },
    shadowRadius: 5,
    shadowOpacity: 1
  },
  boardBg: {
    width: 280,
    height: 230,
  },
  footer: {
    height: 60,
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: "#FFF200",
    opacity: 1,
  },
  icon: {
    height: 40,
    width: 40,
    marginLeft: 10,
    marginRight: 30
  },
  menuList: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  menuIcon: {
    height: 42,
    width: 42,
    bottom: 7,
    left: '7%',
    position: "absolute"
  },
  coach: {
    height: 27,
    width: 26,
    bottom: 9,
    position: "absolute",
    right: "7%"
  },
  text: {
    bottom: 18,
    position: "absolute",
    color: "#545454",
    fontSize: 20,
    fontFamily: 'McLaren-Regular',  },
  font: {
    color: "white",
    fontSize: 20,
    fontFamily: 'McLaren-Regular',
  },
}
);

export default withNavigation(Footer);
