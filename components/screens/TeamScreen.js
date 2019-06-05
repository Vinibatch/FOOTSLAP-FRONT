import React, { Component } from 'react';
import { Font } from 'expo';
import { ImageBackground, ScrollView, View, Image, TouchableOpacity } from 'react-native';
import { List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';
import Footer from '../../components/footer/footer';
import AdBanner from '../../components/header/adBanner';

export default class TeamScreen extends Component {
	constructor(props) {
		super(props);
		this.setTeamVisible = this.setTeamVisible.bind(this);
		this.setTeamIisible = this.setTeamIisible.bind(this);
		this.state = {
			fontLoaded: false,
			team: 0
		};
	}
	// Insertion des nouvelles polices (fonts-family)
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
		});

		this.setState({ fontLoaded: true });
	}
	//Création de 2 fonctions permettant d'incrémenter ou de décrémenter un compteur afin de mapper sur la variable
	// listPlayers en fonction de la team de l'utlisateur
	setTeamVisible() {
		this.setState({ team: this.state.team + 1 });
	}
	setTeamIisible() {
		this.setState({ team: this.state.team - 1 });
	}
	// Tableau représentant les teams (+ logo) suivis par l'utilisateur
	render() {
		var listPlayers = [
			[
				//listPlayers[0][1].logo
				{ logo: require('../../assets/logos/logoMarseille.png') },
				[
					//listPlayers[0][1]
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'LIONEL MESSI',
						img: require('../../assets/players/messi.jpg'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'CRISTIANO RONALDO',
						img: require('../../assets/players/Ronaldo.jpg'),
						clap: '10K',
						slap: '200K'
					}
				]
			],

			[
				//listPlayers[1][1].logo
				{ logo: require('../../assets/logo/psg.png') },
				[
					//listPlayers[1][1]
					{
						name: 'alves',
						img: require('../../assets/players/alves.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'areola',
						img: require('../../assets/players/areola.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'cavani',
						img: require('../../assets/players/cavani.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'draxler',
						img: require('../../assets/players/draxler.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'kimpembe',
						img: require('../../assets/players/kimpembe.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'kurzawa',
						img: require('../../assets/players/kurzawa.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'marquinhos',
						img: require('../../assets/players/marquinhos.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'mbappe',
						img: require('../../assets/players/mbappe.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'neymar',
						img: require('../../assets/players/neymar.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'rabiot',
						img: require('../../assets/players/rabiot.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'verratti',
						img: require('../../assets/players/verratti.png'),
						clap: '10K',
						slap: '200K'
					},
					{
						name: 'antero',
						img: require('../../assets/players/antero.png'),
						clap: '10K',
						slap: '200K'
					}
				]
			]
		];
		// Enchainement de condition pour éviter des erreurs de valeurs de this.state.team
		var team = [];
		var teamLogo = '';
		for (var i = 0; i < listPlayers.length; i++) {
			if (this.state.team === i) {
				team = listPlayers[this.state.team][1];

				teamLogo = listPlayers[this.state.team][0].logo;
			}
		}

		if (this.state.team >= listPlayers.length) {
			//Réinitialisation du state
			this.setState({ team: 0 });
		} else if (this.state.team < 0) {
			//Réinitialisation du state
			this.setState({ team: 0 });
		}
		//Récupération du logo de chaque team
		var logo = (
			<Thumbnail
				style={{
					width: 60,
					height: 60
				}}
				source={teamLogo}
			/>
		);
		// Map permettant de lister chaques joueurs de l'équipe
		var items = team.map((element, i) => {
			return (
				<List
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
					<ListItem avatar>
						<Left>
							<Thumbnail
								style={{ marginBottom: 2, marginTop: -8, borderWidth: 2, borderColor: '#FF0027' }}
								source={element.img}
							/>
						</Left>

						<Body style={{ height: 70 }}>
							{this.state.fontLoaded ? (
								<Text style={{ fontFamily: 'McLaren-Regular', fontSize: 25, textAlign: 'left' }}>
									{element.name}
								</Text>
							) : (
								<Text style={{ fontSize: 25, textAlign: 'center' }}>{element.name}</Text>
							)}
							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-around',
									alignItems: 'center'
								}}
							>
								{this.state.fontLoaded ? (
									<Text
										style={{
											fontFamily: 'Sriracha-Regular',
											fontSize: 22,
											textAlign: 'center'
										}}
									>
										Clap: {element.clap}
									</Text>
								) : (
									<Text style={{ fontSize: 22, textAlign: 'center' }}>Clap: {element.clap}</Text>
								)}
								{this.state.fontLoaded ? (
									<Text
										style={{
											fontFamily: 'Sriracha-Regular',
											fontSize: 22,
											textAlign: 'center'
										}}
									>
										Slap: {element.slap}
									</Text>
								) : (
									<Text style={{ fontSize: 22, textAlign: 'center' }}>Slap: {element.slap}</Text>
								)}
							</View>
						</Body>
					</ListItem>
				</List>
			);
		});

		return (
			<View style={{ flex: 1, width: '100%' }}>
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
						<TouchableOpacity onPress={this.setTeamIisible}>
							<Image
								style={{
									width: 30,
									height: 30
								}}
								source={require('../../assets/icons/left-chevron.png')}
							/>
						</TouchableOpacity>
						{logo}

						<TouchableOpacity onPress={this.setTeamVisible}>
							<Image
								style={{
									width: 30,
									height: 30
								}}
								source={require('../../assets/icons/right-chevron.png')}
							/>
						</TouchableOpacity>
					</View>

					<ScrollView>{items}</ScrollView>
					
					<Footer />

				</ImageBackground>

			</View>
		);
	}
}
