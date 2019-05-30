import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SlapometerScreen from './components/screens/SlapometerScreen';

import LiveGameScreen from './components/screens/LiveGameScreen';

import Footer from './components/footer/footer';

export default class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <SlapometerScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});
