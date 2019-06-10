import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import LiveGameScreen from '../screens/LiveGameScreen';
import AccountScreen from '../screens/AccountScreen';
import SlapometerScreen from '../screens/SlapometerScreen';
import TeamScreen from '../screens/TeamScreen';
import VsScreen from '../screens/VsScreen'
import LoginScreen from '../screens/LoginScreen'

const StackNavigator = createStackNavigator({

Login:LoginScreen,    
Live:LiveGameScreen,
Teams:TeamScreen,
Account:AccountScreen,
ActuSlap:SlapometerScreen,
Events: VsScreen,

},
{
headerMode: 'none'
});


export default Navigation = createAppContainer(StackNavigator);