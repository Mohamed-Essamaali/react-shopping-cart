import React, { useState,createContext } from 'react';
import { Route } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';
import {CartContext} from './contexts/cartContext'
import {ProductsContext} from './contexts/productContext'

function App() {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		// add the given item to the cart
		console.log('number of items in cart',cart)
		setCart([...cart,item])
	};
	const removeItem = itemId=>{
		setCart(cart.filter(item=> item.id != itemId))
		
	}

	return (
		<div className="App">
			<ProductsContext.Provider value={{products,addItem}} >
				
				<CartContext.Provider value={{cart,removeItem}}>

				<Navigation />
		
				{/* Routes */}
				<Route exact path="/">
				
					<Products />
					
				</Route>

				<Route path="/cart">
					<ShoppingCart  />
				</Route>

				</CartContext.Provider>

			</ProductsContext.Provider>
		</div>
	);
}

export default App;
