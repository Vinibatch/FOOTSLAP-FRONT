import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from '../navigation/navigation';
import {connect} from 'react-redux';


 class rooter extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount(){

		fetch('http://192.168.43.99:3000/redux')
	.then((response)=>{
		return response.json();
	})
	.then((user)=> {
		// console.log("après affichage",user);
		this.props.handleUserFromDB(user)
	})
	.catch((error) =>{
		console.log('Request failed', error)
	});
	
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


function mapDispatchToProps(dispatch) {
	return {
		handleUserFromDB(user) {
			// console.log("DISPATCH===>",user)
	dispatch( {
	  type: 'getUserFromDB', 
	  user
		}) 
	  }
	 }
	}
	
	export default connect(
	null,
	mapDispatchToProps
	)(rooter);
  
