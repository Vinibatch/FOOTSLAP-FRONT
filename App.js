import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SlapometerScreen from './components/screens/SlapometerScreen';

import LiveGameScreen from './components/screens/LiveGameScreen';

import Footer from './components/footer/footer';
import AdBanner from './components/header/adBanner';
import SlapCard from './components/slapCard/slapCard';


export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
      <SlapometerScreen> </SlapometerScreen>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
