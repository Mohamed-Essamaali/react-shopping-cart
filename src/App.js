import React, { useState,createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

export const MyProducts = createContext()
export const MyCarts = createContext()

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
	};

	return (
		<div className="App">
			<MyCarts.Provider value={cart}>
				<Navigation />
			</MyCarts.Provider>
			

			{/* Routes */}
			<Route exact path="/">
			<MyProducts.Provider value={products}>
				<Products  />
				</MyProducts.Provider>
			</Route>

			<Route path="/cart">
				<MyCarts.Provider value={cart}>
					<ShoppingCart  />
				</MyCarts.Provider>
			</Route>
		</div>
	);
}

export default App;
