import React, { Component } from 'react';
import { Font } from 'expo';
import { ImageBackground, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, CardItem, CheckBox, Body, ListItem, Thumbnail } from 'native-base';
import Footer from '../../components/footer/footer';
import AdBanner from '../../components/header/adBanner';
import { ScrollView } from 'react-native-gesture-handler';

export default class VsScreen extends React.Component {
	constructor() {
		super();
		this.setCountSlapPlayer1 = this.setCountSlapPlayer1.bind(this);
		this.setCountSlapPlayer2 = this.setCountSlapPlayer2.bind(this);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			fontLoaded: false,
			countSlapPlayer1: 0,
			countSlapPlayer2: 0
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

	handleClick = () => {
		this.setState({
			display: 'none'
		});
	};
	setCountSlapPlayer1() {
		this.setState({ countSlapPlayer1: this.state.countSlapPlayer1 + 1 });
		console.log(this.state.countSlapPlayer1);
		// this.setState({ selected: true });
		// console.log(selected.coucou);
		// console.log(name);
		// console.log(this.props.name);
	}

	setCountSlapPlayer2() {
		this.setState({ countSlapPlayer2: this.state.countSlapPlayer2 + 1 });
		console.log(this.state.countSlapPlayer2);
	}

	render() {
		var eventLive = [
			[ { img: require('../../assets/players/messi.jpg'), slap: 200 } ],
			[ { img: require('../../assets/players/Ronaldo.jpg'), slap: 200 } ]
		];

		var events = [
			{ event: 'Murinho - Guardiola', selected: false },
			{ event: 'Neymar - Mbappé', selected: true },
			{ event: 'Liverpool - Totenham', selected: false }
		];

		var items = events.map((element, i) => {
			return (
				<Toto
					name={element.event}
					key={i}
					onPress={this.setSelected}
					burgerNumber={i + 1}
					array={events}
					handleClickParent={this.handleClick}
				/>
			);
		});
		return (
			<View style={styles.container}>
				<AdBanner />
				<ImageBackground
					style={{ flex: 1, width: '100%' }}
					source={require('../../assets/backgrounds/Field_Bg.png')}
				>
					<ScrollView>
						<CardItem cardBody style={{ margin: 5 }}>
							<ImageBackground
								style={{
									flex: 1,
									width: '100%',
									borderWidth: 2,
									borderColor: '#3b5998'
								}}
								source={require('../../assets/backgrounds/Vs_Bg.jpg')}
							>
								<View style={{ flexDirection: 'column' }}>
									{this.state.fontLoaded ? (
										<Text style={styles.FontSlap}>
											{eventLive[1][0].slap + this.state.countSlapPlayer2}
										</Text>
									) : (
										<Text
											style={{
												alignSelf: 'flex-end',
												marginRight: 20,
												fontSize: 35,
												color: '#ffffff'
											}}
										>
											{eventLive[1][0].slap + this.state.countSlapPlayer2}
										</Text>
									)}
									<TouchableOpacity
										onPress={this.setCountSlapPlayer1}
										style={{ alignSelf: 'flex-start' }}
									>
										<Thumbnail style={{ marginLeft: 20 }} large source={eventLive[0][0].img} />
									</TouchableOpacity>
								</View>
								<View style={{ flexDirection: 'column' }}>
									<TouchableOpacity
										onPress={this.setCountSlapPlayer2}
										style={{
											alignSelf: 'flex-end'
										}}
									>
										<Thumbnail style={{ marginRight: 20 }} large source={eventLive[1][0].img} />
									</TouchableOpacity>
								</View>
								<View style={{ display: 'flex' }}>
									{this.state.fontLoaded ? (
										<Text style={styles.withFontSlap}>
											{eventLive[0][0].slap + this.state.countSlapPlayer1}
										</Text>
									) : (
										<Text
											style={{
												marginLeft: 20,
												fontSize: 35,
												color: '#ffffff'
											}}
										>
											{eventLive[0][0].slap + this.state.countSlapPlayer1}
										</Text>
									)}
								</View>
							</ImageBackground>
						</CardItem>

						<CardItem cardBody style={{ margin: 5 }}>
							<ImageBackground style={styles.blackboard}>
								{this.state.fontLoaded ? (
									<Text
										style={{
											fontFamily: 'Sriracha-Regular',
											fontSize: 28,
											textAlign: 'center',
											color: '#ffffff'
										}}
									>
										Vote pour le prochain slap VS:
									</Text>
								) : (
									<Text style={{ fontSize: 22, textAlign: 'center' }}>
										Vote pour le prochain slap VS:
									</Text>
								)}
								{this.state.display ? (
									<Text>
										{this.state.fontLoaded ? (
											<Text
												style={{
													fontFamily: 'Sriracha-Regular',
													fontSize: 28,
													textAlign: 'center',
													color: '#ffffff'
												}}
											>
												A voté!
											</Text>
										) : (
											<Text
												style={{
													fontSize: 28,
													fontSize: 28,
													textAlign: 'center',
													color: '#ffffff'
												}}
											>
												A voté!
											</Text>
										)}
									</Text>
								) : (
									<Text />
								)}

								<ScrollView style={{ display: this.state.display }}>{items}</ScrollView>
							</ImageBackground>
						</CardItem>
					</ScrollView>
				</ImageBackground>

				<Footer />
			</View>
		);
	}
}

class Toto extends React.Component {
	constructor() {
		super();
		this.setSelected = this.setSelected.bind(this);

		this.state = {
			selected: null,
			count: 0
		};
	}
	async componentDidMount() {
		await Font.loadAsync({
			'McLaren-Regular': require('../../assets/fonts/McLaren-Regular.ttf'),
			'Sriracha-Regular': require('../../assets/fonts/Sriracha-Regular.ttf')
		});

		this.setState({ fontLoaded: true });
	}
	setSelected() {
		if (!this.state.selected) {
			this.setState({ selected: !this.state.selected });

			this.props.handleClickParent();
			// this.setState({ display: true });
			// this.setState({ count: this.state.count + 1 });
			// console.log(this.props.array);
			// console.log(this.props.name);
			// console.log(this.state.count);
		}
	}

	render() {
		var ctx = this;
		return (
			<ListItem style={{ display: this.state.display }}>
				<CheckBox checked={this.state.selected} onPress={ctx.setSelected} color="white" />
				<Body>
					{this.state.fontLoaded ? (
						<Text
							style={{
								fontFamily: 'Sriracha-Regular',
								fontSize: 22,
								textAlign: 'center',
								color: '#ffffff'
							}}
						>
							{this.props.name}
						</Text>
					) : (
						<Text style={{ fontSize: 22, textAlign: 'center' }}>{this.props.name}</Text>
					)}
				</Body>
			</ListItem>
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
	},
	withFontSlap: {
		fontFamily: 'Sriracha-Regular',
		fontSize: 35,
		marginLeft: 20,
		color: '#ffffff',
		shadowColor: 'rgba(0,0,0,1)',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 3,
		shadowOpacity: 0.3
	},
	FontSlap: {
		fontFamily: 'Sriracha-Regular',
		fontSize: 35,
		alignSelf: 'flex-end',
		marginRight: 20,
		color: '#ffffff',
		shadowColor: 'rgba(0,0,0,1)',
		shadowOffset: {
			width: 0,
			height: 0
		},
		shadowRadius: 3,
		shadowOpacity: 0.3
	}
});
