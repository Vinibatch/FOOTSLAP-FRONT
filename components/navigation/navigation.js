import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import LiveGameScreen from '../screens/LiveGameScreen';
import AccountScreen from '../screens/AccountScreen';
import SlapometerScreen from '../screens/SlapometerScreen';
import TeamScreen from '../screens/TeamScreen';
import VsScreen from '../screens/VsScreen'
import LoginScreen from '../screens/LoginScreen'

const StackNavigator = createStackNavigator({
    Slapo:SlapometerScreen,

Login:LoginScreen,    
Live:LiveGameScreen,
Team:TeamScreen,
Account:AccountScreen,
Events: VsScreen,
},
{
headerMode: 'none'
});


export default Navigation = createAppContainer(StackNavigator);