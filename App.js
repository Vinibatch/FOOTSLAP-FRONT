import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LiveGameScreen from './components/screens/LiveGameScreen';

import Footer from './components/footer/footer';
import AdBanner from './components/header/adBanner';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

});
