import React from 'react';
import { StyleSheet, View } from 'react-native';

import Navigation from './components/navigation/navigation';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={styles.container}>
				<Navigation />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
