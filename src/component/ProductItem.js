import React, { useState } from 'react';

const ProductItem = ({ product, addToCart }) => {
    const { name, image, price, description } = product;
    // State to manage whether to show the description or not
    const [showDescription, setShowDescription] = useState(false);


    // Function to handle adding the product to the cart
    const handleAddToCart = () => {
        addToCart(product);
    };

    return (
        <div className="product">

            <img className="product-image" src={image} alt={name} width="350"/>

            <div>
  
                <h3 className="product-name" 
                onMouseEnter ={() => setShowDescription(true)} 
                onMouseLeave={() => setShowDescription(false)}
                >{name}</h3>

                <p className="price">${price}</p>

                {showDescription && <p className="product-description">Description: {description}</p>}

                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;


// import React, { useContext, useState } from 'react';
// import PropTypes from 'prop-types';
// import Productpage from './Productpage';
// import product from '../data/products';
// import { CartItem } from './CartItem';



// const ProductItem = (props) => {
//     const {id, name, price, image, description, addToCart} = props.data;
//     const [showDescription, setShowDescription] = useState(false);
//     console.log(props.data)



//     return (
//         <div className="product">
//             <img className="product-image" src={image} width="350"/>

            // <h3 className="product-name" 
            // onMouseEnter ={() => setShowDescription(true)} 
            // onMouseLeave={() => setShowDescription(false)}
            // >{name}</h3>

//             <p className="price">${price}</p>
//             {showDescription && <p className="product-description">{description}</p>}   
//             <button className="add-to-cart-btn" onClick={() => addToCart(id, name, price, image)}>Add To Cart</button>
          
//         </div>
//     );
// };
// ProductItem.propTypes = {
//     data: PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         name: PropTypes.string.isRequired,
//         price: PropTypes.number.isRequired,
//         image: PropTypes.string.isRequired,
//         description: PropTypes.string.isRequired,
//         addToCart: PropTypes.func.isRequired
//     }).isRequired
// };



// export default ProductItem;