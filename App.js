import React from 'react';
import { StyleSheet, View } from 'react-native';
import Timer from './components/timer/timer';
import Rooter from './components/rooter/rooter';
import user from './components/reducers/live.reducer';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
const store = createStore(combineReducers({user}));


 class App extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
			<Provider store={store}>
				{/* <Timer/> */}
				<Rooter/>
			</Provider>
		);
	}
}

  
export default App