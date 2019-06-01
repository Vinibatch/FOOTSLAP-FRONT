import React from 'react';
import { StyleSheet, View } from 'react-native';

import LiveGameScreen from './components/screens/LiveGameScreen';


export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<LiveGameScreen/>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
