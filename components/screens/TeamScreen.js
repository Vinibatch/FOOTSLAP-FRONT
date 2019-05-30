import React, { Component } from 'react';
import { Divider } from 'react-native-elements';
import { Font } from 'expo';
import { ImageBackground, ScrollView, View, Image, TouchableHighlight } from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class TeamScreen extends Component {
	constructor() {
		super();

		this.state = {
			fontLoaded: false
		};
	}
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		var listPlayers = [
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'MESSI',
				img: require('../../assets/players/messi.jpg'),
				clap: '10K',
				slap: '200K'
			},
			{
				name: 'RONALDO',
				img: require('../../assets/players/Ronaldo.jpg'),
				clap: '10K',
				slap: '200K'
			}
		];
		var items = listPlayers.map((element, i) => {
			return (
				<List
					style={{
						backgroundColor: 'white',
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
								<Text style={{ fontFamily: 'McLaren-Regular', fontSize: 25, textAlign: 'center' }}>
									{element.name}
								</Text>
							) : (
								<Text style={{ fontSize: 25, textAlign: 'center' }}>{element.name}</Text>
							)}

							<View
								style={{
									display: 'flex',
									flexDirection: 'row',
									justifyContent: 'space-between',
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
				{/* <Header style={{ heiight: -5 }} /> */}
				<View style={{ backgroundColor: '#545454', height: 20, width: '100%' }} />
				<ImageBackground
					style={{ height: '100%', width: '100%' }}
					source={require('../../assets/backgrounds/Field_Bg.png')}
				>
					<View
						style={{
							flexDirection: 'row',
							height: 80,
							justifyContent: 'space-around',
							alignItems: 'center',
							backgroundColor: '#FFF200'
						}}
					>
						<Image
							style={{
								width: 30,
								height: 30
							}}
							source={require('../../assets/icons/left-chevron.png')}
						/>
						<Image
							style={{
								width: 60,
								height: 60
							}}
							source={require('../../assets/logo/psg.png')}
						/>
						<Image
							style={{
								width: 30,
								height: 30
							}}
							source={require('../../assets/icons/right-chevron.png')}
						/>
					</View>

					<ScrollView>{items}</ScrollView>
				</ImageBackground>
			</View>
		);
	}
}
