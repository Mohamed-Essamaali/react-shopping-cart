import React,{useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {MyCarts} from '../App'

const Navigation = () => {
	const cart = useContext(MyCarts)
	return (
		<div className="navigation">
			<NavLink to="/">Products</NavLink>
			<NavLink to="/cart">
				Cart <span>{cart.length}</span>
			</NavLink>
		</div>
	);
};

export default Navigation;
