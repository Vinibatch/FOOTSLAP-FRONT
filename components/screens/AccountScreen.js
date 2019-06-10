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
var tata = [];
export default class AccountScreen extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			fontLoaded: false,
			selected: '',
			toto: '',
			avatar: null,
			avatar1: null,
			team: [],
			team1: [],
			team2: [],
			team3: []
		};
	}
	// Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
			// 'Roboto-Medium': require('../../assets/fonts/Roboto-Medium.ttf')
		});
		var ctx = this;
		this.setState({ fontLoaded: true });
		fetch('http://10.2.4.26:3000/account')
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				//Pour récuperer des infos du back, on utilise les states et pour ce faire, on doit créer une copie
				// ET NE PAS OUBLIER LE CTX!!!!!
				var copyTeam = [ ...ctx.state.team ];
				var copyTeam1 = [ ...ctx.state.team1 ];
				var copyTeam2 = [ ...ctx.state.team2 ];
				var copyTeam3 = [ ...ctx.state.team3 ];

				copyTeam3.push(data.competitions[1].teamList[0].teams.name);
				for (var i = 0; i < data.competitions.length; i++) {
					copyTeam.push(data.competitions[i].name);
				}

				for (var j = 0; j < data.competitions[2].teamList.length; j++) {
					copyTeam1.push({
						id: data.competitions[0].teamList[j].teams._id,
						logo: data.competitions[0].teamList[j].teams.logo,
						team: data.competitions[0].teamList[j].teams.name
					});
					copyTeam2.push({
						id: data.competitions[2].teamList[j].teams._id,
						logo: data.competitions[2].teamList[j].teams.logo,
						team: data.competitions[2].teamList[j].teams.name
					});
				}

				ctx.setState({ team: copyTeam });
				ctx.setState({ team1: copyTeam1 });
				ctx.setState({ team2: copyTeam2 });
				ctx.setState({ team3: copyTeam3 });
			})
			.catch(function(error) {
				console.log('Request failed', error);
			});
	}

	onValueChangeToto = (value) => {
		this.setState({
			toto: value
		});
	};

	onValueChange = (value) => {
		this.setState({
			selected: value
		});
		var ctx = this;
		if (value === 'Ligue 1') {
			for (var i = 0; i < ctx.state.team1.length; i++) {
				picker[i] = <Picker.Item label={ctx.state.team1[i].team} value={ctx.state.team1[i].team} key={i} />;
				pickerA = [];
			}
		} else if (value === 'Liga') {
			for (var i = 0; i < ctx.state.team2.length; i++) {
				pickerA[i] = <Picker.Item label={ctx.state.team2[i].team} value={ctx.state.team2[i].team} key={i} />;
				picker = [];
			}
		} else if (value === 'Champions League') {
			for (var i = 0; i < ctx.state.team3.length; i++) {
				pickerA[i] = <Picker.Item label={ctx.state.team3[i]} value={ctx.state.team3[i]} key={i} />;
				picker = [];
			}
		}
	};

	setLogoVisible = () => {
		var Ligue1 = [ ...this.state.team1 ];
		var Liga = [ ...this.state.team2 ];

		for (var i = 0; i < Ligue1.length; i++) {
			var ctx = this;
			if (Ligue1[i].team === ctx.state.toto) {
				let avatar1 = (
					<Thumbnail
						style={{
							marginRight: 20
						}}
						source={{ uri: Ligue1[i].logo }}
					/>
				);

				this.setState(
					{ avatar1 }

					//this.setState({ toto: '' })
				);
			}
		}

		for (var i = 0; i < Liga.length; i++) {
			var ctx = this;

			if (Liga[i].team === ctx.state.toto) {
				let avatar = (
					<Thumbnail
						style={{
							marginRight: 20
						}}
						source={{ uri: Liga[i].logo }}
					/>
				);

				this.setState(
					{ avatar }

					//this.setState({ toto: '' })
				);
			}
		}
	};

	render() {
		//Récupération des informations de THIS.STATE.TEAM[], pour les afficher dans {tata}
		var ctx = this;

		for (var i = 0; i < ctx.state.team.length; i++) {
			tata[i] = <Picker.Item label={ctx.state.team[i]} value={ctx.state.team[i]} key={i} />;
		}

		return (
			<View style={styles.container}>
				<ImageBackground
					style={{ height: '100%', width: '100%' }}
					source={require('../../assets/backgrounds/backgroundRondDark.jpg')}
				>
					<AdBanner />
					<ScrollView>
						
						<View
							style={{
								display: 'flex'
							}}
						>
							
							<Divider style={{ height: 20, backgroundColor: 'transparent' }} />

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

									{this.state.avatar}
									{this.state.avatar1}
								</Body>
							</ListItem>

							<Divider style={{ height: 30, backgroundColor: 'transparent' }} />

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
									{tata}
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

							<Divider style={{ height: 10, backgroundColor: 'transparent' }} />

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

							<Divider style={{ height: 30, backgroundColor: 'transparent' }} />

							{this.state.fontLoaded ? (
								<Text
									style={{
										marginLeft: 10,
										fontFamily: 'Sriracha-Regular',
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Mes stats
								</Text>
							) : (
								<Text
									style={{
										marginLeft: 10,
										fontSize: 25,
										color: '#FFFFFF'
									}}
								>
									Mes stats
								</Text>
							)}

							<Divider style={{ height: 10, backgroundColor: 'transparent' }} />


							<CardItem cardBody style={{ margin: 5, display: 'flex' }}>
								<ImageBackground style={styles.blackboard}>
									<Divider style={{ height: 10, backgroundColor: 'transparent' }} />

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
												Mes Slaps: 5
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
												Mes Slaps: 5
											</Text>
										)}

										{this.state.fontLoaded ? (
											<Text
												style={{
													fontFamily: 'Sriracha-Regular',
													fontSize: 28,
													color: '#FFFFFF',
													marginLeft: 20
												}}
											>
												Mes Claps: 2
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
												Mes Claps: 2
											</Text>
										)}
									</View>

									<Divider style={{ height: 20, backgroundColor: 'transparent' }} />

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
										<Divider style={{ backgroundColor: 'transparent', height: 10 }} />

										<Thumbnail
											style={{
												alignSelf: 'center',
												borderColor: '#FF0027',
												borderRadius: 100,
												borderWidth: 3,
												width: 200,
												height: 200
											}}
											large
											source={require('../../assets/Vince.jpg')}
										/>
									</View>
									<Divider style={{ backgroundColor: 'transparent', height: 20 }} />
								</ImageBackground>
							</CardItem>

							<Divider style={{ backgroundColor: 'transparent', height: 30 }} />

							<Button 
								light 
								rounded 
								onPress={ () => this.props.navigation.navigate('Login')} 
								style={{ alignSelf: 'center', opacity: 0.9 }}>
								<Text>
									{this.state.fontLoaded ? (
										<Text
											style={{
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

						<Divider style={{ backgroundColor: 'transparent', height: 30 }} />
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
