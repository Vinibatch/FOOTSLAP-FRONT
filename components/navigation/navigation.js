import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import LiveGameScreen from '../screens/LiveGameScreen';
import AccountScreen from '../screens/AccountScreen';
import SlapometerScreen from '../screens/SlapometerScreen';
import TeamScreen from '../screens/TeamScreen';
import VsScreen from '../screens/VsScreen'


const StackNavigator = createStackNavigator({
    
Live:LiveGameScreen,
Team:TeamScreen,
Slapo:SlapometerScreen,
Account:AccountScreen,
Events: VsScreen,
},
{
headerMode: 'none'
});


export default Navigation = createAppContainer(StackNavigator);