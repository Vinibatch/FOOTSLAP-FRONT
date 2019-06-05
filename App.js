import React from 'react';
import { StyleSheet, View } from 'react-native';
import Navigation from './components/navigation/navigation';
// import user from './components/reducers/live.reducer';
// import {Provider} from 'react-redux';
// import {connect} from 'react-redux';
// import {createStore, combineReducers} from 'redux';
// const store = createStore(combineReducers({user}));


 class App extends React.Component {
	constructor(props) {
		super(props);
	}

	// componentDidMount(){

	// 	fetch('http://IpConfig:3000/nom de la route ')
	// .then((response)=>{
	// 	return response.json();
	// })
	// .then((user)=> {
	// 	console.log("après affichage",(user));
	// 	this.props.handleUserFromDB(user)
	// })
	// .catch((error) =>{
	// 	console.log('Request failed', error)
	// });
	
	//  }
	


	render() {
		return (
			// <Provider store={store}>
			<View style={styles.container}>
				<Navigation />
			</View>
			// </Provider>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});

// function mapDispatchToProps(dispatch) {
// 	return {
// 		handleUserFromDB: function(user) {
// 	dispatch( {
// 	  type: 'getUserFromDB', 
// 	  user
// 		}) 
// 	  }
// 	 }
// 	}
	
// 	export default connect(
// 	null,
// 	mapDispatchToProps
// 	)(App);
  
export default App