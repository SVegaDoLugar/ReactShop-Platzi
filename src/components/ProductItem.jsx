import React, {useContext} from 'react';
import AppContext from '../context/AppContext.js';
import addToCartImage from '../assets/icons/bt_add_to_cart.svg';
import '../styles/ProductItem.scss';
const ProductItem = ({product}) => {
	//Agregamos la constate addToCart
	const {addToCart} = useContext(AppContext);
	//Ese item es el mismo product, pero se cambia el nombre porque puede generar conflicto
	const handleClick = item =>{
		addToCart(item);
	}
	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} />
			<div className="product-info">
				<div>
					<p>${product.price}  USD</p>
					<p>{product.title}</p>
				</div>
				
				<figure onClick={() => handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
