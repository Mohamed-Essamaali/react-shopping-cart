import React,{useCallback, useContext} from 'react';
import {MyProducts} from '../App'

// Components
import Product from './Product';

const Products = props => {

	const products = useContext(MyProducts)
	return (
		<div className="products-container">
			{products.map(product => (

				<Product
					key={product.id}
					product={product}
					addItem={props.addItem}
				/>
			))}
		</div>
	);
};

export default Products;
