import React,{useCallback, useContext} from 'react';
import {ProductsContext} from '../contexts/productContext'

// Components
import Product from './Product';

const Products = () => {

	const {products,addItem} = useContext(ProductsContext)
	
	
	return (
		<div className="products-container">
			{products.map(product => (

				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;
