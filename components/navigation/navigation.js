import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';

import LiveGameScreen from '../Screens/LiveGameScreen';
import AccountScreen from '../Screens/AccountScreen';
import SlapometerScreen from '../Screens/SlapometerScreen';
import TeamScreen from '../Screens/TeamScreen';



const StackNavigator = createStackNavigator({

Team:TeamScreen,
Live:LiveGameScreen,
Slapo:SlapometerScreen,
Account:AccountScreen,

},
{
headerMode: 'none'
})


export default Navigation = createAppContainer(StackNavigator);
