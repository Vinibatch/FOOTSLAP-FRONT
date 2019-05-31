import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SlapometerScreen from './components/screens/SlapometerScreen';

export default class App extends React.Component {
	render() {
		return <View style={styles.container} />;
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
