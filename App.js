import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import LiveGameScreen from './components/screens/LiveGameScreen';

import Footer from './components/footer/footer';
import AdBanner from './components/header/adBanner';
import SlapCard from './components/slapCard/slapCard';


export default class App extends React.Component {
	render() {
		return (
			
			<View style={styles.container}>
				<LiveGameScreen/>
			</View>
		)}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
