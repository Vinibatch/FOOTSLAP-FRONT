import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TeamScreen from './components/screens/TeamScreen';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TeamScreen/>
      </View>
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
