import React, { Component } from 'react';
import { Font } from 'expo';
import { ImageBackground, ScrollView, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { List, ListItem, Left, Body, Thumbnail, Text, Icon, Picker, Form, Button, CardItem } from 'native-base';
import Footer from '../../components/footer/footer';
import AdBanner from '../../components/header/adBanner';
import { Divider } from 'react-native-elements';
var pickerA = [];
var picker = [];
var avatar = [];
var avatarA = [];
var logo;
var logoA = '';
export default class AccountScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoaded: false,
			selected: '',
			toto: ''
		};
	}

	onValueChangeToto = (value) => {
		this.setState({
			toto: value
		});

		console.log(value);
	};

	onValueChange = (value) => {
		this.setState({
			selected: value
		});
		// console.log(this.state.selected);

		var Ligue1 = [ 'psg', 'Marseille' ];
		var LigueA = [ 'Real Madrid' ];
		if (value === 'Ligue1') {
			for (var i = 0; i < Ligue1.length; i++) {
				picker[i] = <Picker.Item label={Ligue1[i]} value={Ligue1[i]} key={i} />;
				pickerA = [];
			}
		} else if (value === 'LigueA') {
			for (var i = 0; i < LigueA.length; i++) {
				pickerA[i] = <Picker.Item label={LigueA[i]} value={LigueA[i]} key={i} />;
				picker = [];
			}
		}
	};

	setLogoVisible = () => {
		var Ligue1 = [ 'psg', 'Marseille' ];
		var LigueA = [ 'Real Madrid' ];
		const coucou = [ require('../../assets/logo/psg.png'), require('../../assets/logo/Marseille.png') ];
		const coco = [ require('../../assets/logo/RealMadrid.png') ];
		for (var j = 0; j < Ligue1.length; j++) {
			if (Ligue1[j] === this.state.toto) {
				logo = this.state.toto;
				console.log(logo);
				console.log('--->logo:' + logo);
				logoA = '';

				console.log('------>j' + j);
				if (logo) {
					return (
						(avatar = (
							<Thumbnail
								style={{
									borderWidth: 2,
									borderColor: '#3b5998'
								}}
								//source={require('../../assets/logo/psg.png')}
								source={coucou[j]}
							/>
						)),
						this.setState({ selected: '' })
					);
				}
			} else if (LigueA[j] === this.state.toto) {
				console.log('------------>' + j);

				logoA = this.state.toto;
				console.log('--->logoA:' + logoA);
				logo = '';

				if (logoA === this.state.toto) {
					return (
						(avatarA = (
							<Thumbnail
								style={{
									borderWidth: 2,
									borderColor: '#3b5998'
								}}
								source={coco[j]}
							/>
						)),
						this.setState({ selected: '' })
					);
				}
			}
		}
	};
	// Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
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
					<ScrollView>
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

						<View
							style={{
								display: 'flex'
							}}
						>
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
										flexDirection: 'row'
									}}
								>
									<Left>
										<Text>Mes Equipes:</Text>
									</Left>

									{avatar}
									{avatarA}
								</Body>
							</ListItem>
							{this.state.fontLoaded ? (
								<Text
									style={{
										textAlign: 'center',
										fontFamily: 'Sriracha-Regular',
										fontSize: 28,
										color: '#FFFFFF'
									}}
								>
									Ajouter une équipe:
								</Text>
							) : (
								<Text
									style={{
										textAlign: 'center',
										fontSize: 28,
										color: '#FFFFFF'
									}}
								>
									Ajouter une équipe:
								</Text>
							)}

							{this.state.fontLoaded ? (
								<Text
									style={{
										marginLeft: 10,
										fontFamily: 'Sriracha-Regular',
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Championnat
								</Text>
							) : (
								<Text
									style={{
										marginLeft: 10,
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Championnat
								</Text>
							)}
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
									style={{ display: 'flex', justifyContent: 'center' }}
									mode="dropdown"
									iosIcon={<Icon name="arrow-down" />}
									headerBackButtonText="Baaack!"
									selectedValue={this.state.selected}
									onValueChange={this.onValueChange}
								>
									<Picker.Item label="Ligue 1" value="Ligue1" />
									<Picker.Item label="Ligue A" value="LigueA" />
								</Picker>
							</Form>

							{this.state.fontLoaded ? (
								<Text
									style={{
										marginLeft: 10,
										fontFamily: 'Sriracha-Regular',
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Equipe
								</Text>
							) : (
								<Text
									style={{
										marginLeft: 10,
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Equipe
								</Text>
							)}
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
									style={{ display: 'flex', justifyContent: 'center' }}
									mode="dropdown"
									iosIcon={<Icon name="arrow-down" />}
									headerBackButtonText="Baaack!"
									selectedValue={this.state.toto}
									onValueChange={this.onValueChangeToto}
								>
									{picker}
									{pickerA}
								</Picker>
							</Form>
							<View
								style={{
									alignSelf: 'center'
								}}
							>
								<Button light rounded style={{ opacity: 0.9 }} onPress={this.setLogoVisible}>
									<Text>
										{this.state.fontLoaded ? (
											<Text
												style={{
													fontWeight: 'bold',
													fontFamily: 'McLaren-Regular'
												}}
											>
												Valider
											</Text>
										) : (
											<Text style={{ fontWeight: 'bold' }}>Valider</Text>
										)}
									</Text>
								</Button>
							</View>

							<CardItem cardBody style={{ margin: 5, display: 'flex' }}>
								<ImageBackground style={styles.blackboard}>
									<View style={{ alignSelf: 'flex-start' }}>
										{this.state.fontLoaded ? (
											<Text
												style={{
													fontFamily: 'Sriracha-Regular',
													fontSize: 28,
													color: '#FFFFFF',
													marginLeft: 20
												}}
											>
												Mes Slaps: 790
											</Text>
										) : (
											<Text
												style={{
													fontSize: 28,
													textAlign: 'center',
													color: '#FFFFFF',
													marginLeft: 20
												}}
											>
												Mes Slaps: 790
											</Text>
										)}
										<Divider style={{ backgroundColor: '#565656' }} />
										{this.state.fontLoaded ? (
											<Text
												style={{
													fontFamily: 'Sriracha-Regular',
													fontSize: 28,
													color: '#FFFFFF',
													marginLeft: 20
												}}
											>
												Mes Wow: 22
											</Text>
										) : (
											<Text
												style={{
													fontSize: 28,
													textAlign: 'center',
													color: '#FFFFFF',
													marginLeft: 20
												}}
											>
												Mes Wow: 22
											</Text>
										)}
										<Divider style={{ backgroundColor: '#565656' }} />
									</View>
									<Divider style={{ backgroundColor: '#565656' }} />
									<View style={{ alignSelf: 'center' }}>
										{this.state.fontLoaded ? (
											<Text
												style={{
													fontFamily: 'Sriracha-Regular',
													fontSize: 28,
													color: '#FFFFFF',
													textAlign: 'center'
												}}
											>
												Most Slapped
											</Text>
										) : (
											<Text
												style={{
													fontSize: 28,
													color: '#FFFFFF'
												}}
											>
												Most Slapped
											</Text>
										)}
										<Divider style={{ backgroundColor: '#565656', height: 50 }} />

										<Thumbnail
											style={{
												alignSelf: 'center',
												borderColor: '#FF0027',
												borderWidth: 2,
												width: 200,
												height: 200
											}}
											large
											source={require('../../assets/players/messi.jpg')}
										/>
									</View>
								</ImageBackground>
							</CardItem>
							<Button light rounded style={{ alignSelf: 'center', opacity: 0.9 }}>
								<Text>
									{this.state.fontLoaded ? (
										<Text
											style={{
												fontWeight: 'bold',
												fontFamily: 'McLaren-Regular'
											}}
										>
											Déconnexion
										</Text>
									) : (
										<Text style={{ fontWeight: 'bold' }}>Déconnexion</Text>
									)}
								</Text>
							</Button>
						</View>
					</ScrollView>
					<Footer />
				</ImageBackground>
			</View>
		);
	}
}
const styles = StyleSheet.create({
	blackboard: {
		flex: 1,
		width: '100%',
		backgroundColor: '#565656',
		// shadowColor: 'rgba(0,0,0,1)',
		borderWidth: 2,
		borderColor: '#3b5998'
	},
	container: {
		flex: 1
	}
});
