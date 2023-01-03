// Libraries 
import React, { Component } from 'react';
import { Router, Route} from 'react-router-dom';
// Styling
import './App.css';
import history from './history'

// Components
import Home from '../src/copmonents/pages/Home';
import Proudcts from '../src/copmonents/products/Products';
import ProductDetails from '../src/copmonents/products/ProductDetails';

class App extends Component {
	render() {
		return (
			<Router history={history}>
				<div className='App'>
					<Route exact path='/' component={Home} />
					<Route exact path='/products/lips' component={Proudcts} />
					<Route exact path='/products/eyes' component={Proudcts} />
					<Route exact path='/products/face' component={Proudcts} />
					<Route exact path='/product/details/:id' component={ProductDetails} />
				</div>
			</Router>
	
		);
	}
}

export default App;
