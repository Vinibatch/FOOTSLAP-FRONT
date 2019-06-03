import React, { Component } from 'react';
import { Font } from 'expo';
import { ImageBackground, ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body, Thumbnail, Text, Icon, Picker, Form, Button } from 'native-base';
import Footer from '../../components/footer/footer';
import AdBanner from '../../components/header/adBanner';

export default class AccountScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoaded: false,
			selected: 'key3'
		};
	}

	onValueChange(value: 1) {
		this.setState({
			selected: value
		});
	}
	// Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf'),
			// 'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf')
		});

		this.setState({ fontLoaded: true });
	}
	render() {
		return (
			<View style={styles.container}>
				<ImageBackground
					style={{ height: '100%', width: '100%' }}
					source={require('../../assets/backgrounds/Field_Bg.png')}
				>
					<AdBanner />
					<View
						style={{
							flexDirection: 'row',
							height: 80,
							justifyContent: 'space-around',
							alignItems: 'center',
							backgroundColor: '#FFF200'
						}}
					>
						{this.state.fontLoaded ? (
							<Text
								style={{
									fontFamily: 'Sriracha-Regular',
									fontSize: 28,
									textAlign: 'center',
									color: '#565656'
								}}
							>
								Mon compte
							</Text>
						) : (
							<Text
								style={{
									fontSize: 28,
									textAlign: 'center',
									color: '#565656'
								}}
							>
								Mon compte
							</Text>
						)}
					</View>

					<ListItem
						avatar
						style={{
							backgroundColor: 'white',
							borderWidth: 2,
							borderColor: '#3b5998',
							opacity: 0.8,
							marginTop: 10,
							marginLeft: 10,
							marginRight: 10
						}}
					>
						<Body
							style={{
								display: 'flex',
								flexDirection: 'row',
								justifyContent: 'space-around'
							}}
						>
							<Left>
								<Text>Mes Equipes:</Text>
							</Left>

							<Thumbnail
								style={{
									borderWidth: 2,
									borderColor: '#3b5998'
								}}
								source={require('../../assets/logo/psg.png')}
							/>
						</Body>
					</ListItem>
					<Text style={{ textAlign: 'center' }}>Ajouter une équipe</Text>
					<Text style={{ marginLeft: 10 }}>Championnat</Text>
					<Form
						style={{
							backgroundColor: 'white',
							borderWidth: 2,
							borderColor: '#3b5998',
							opacity: 0.8,
							margin: 10
						}}
					>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" style={{ marginLeft: -50 }} />}
							headerBackButtonText="Baaack!"
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
						>
							<Picker.Item label="Ligue 1" value="key3" />
						</Picker>
					</Form>

					<Text style={{ marginLeft: 10 }}>Equipe</Text>
					<Form
						style={{
							backgroundColor: 'white',
							borderWidth: 2,
							borderColor: '#3b5998',
							opacity: 0.8,
							margin: 10
						}}
					>
						<Picker
							mode="dropdown"
							iosIcon={<Icon name="arrow-down" style={{ marginLeft: -50 }} />}
							headerBackButtonText="Baaack!"
							selectedValue={this.state.selected}
							onValueChange={this.onValueChange.bind(this)}
						>
							<Picker.Item label="PSG" value="key3" />
						</Picker>
					</Form>

					<Button light rounded>
						<Text> Valider </Text>
					</Button>
				</ImageBackground>
				
			 <Footer/> 
		 </View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});
