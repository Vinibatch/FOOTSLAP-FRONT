import React from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Divider } from 'react-native-elements';

export default class AdBanner extends React.Component {
	render() {
		return (
			<View>
				<Divider style={styles.divide} />
				<ImageBackground source={require('../../assets/backgrounds/FootSlap_Bg.png')} style={styles.header}>
					<Image source={require('../../assets/logos/FSlogo.png')} style={styles.logo} />
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		height: 50,
		width: '100%'
	},
	divide: {
		height: 20,
		backgroundColor: '#00B1FF',
		width: '100%'
	},
	logo: {
		width: 50,
		height: 50,
		alignItems: 'center',
		alignSelf: 'center'
	}
});
