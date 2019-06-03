import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AccountScreen from './components/screens/AccountScreen';

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<AccountScreen />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
