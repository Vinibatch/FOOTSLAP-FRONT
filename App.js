import React from 'react';
import { StyleSheet } from 'react-native';
import Footer from './components/footer/footer';

export default class App extends React.Component {
  render() {
    return (
       <Footer/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
