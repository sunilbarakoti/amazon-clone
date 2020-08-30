/*
    - This is a child component to the parent Checkout page.
    - The attributes of the products like id, title, image, price and rating are taken 
      to create a component that describes the product added in the cart in detail.
*/

import React from 'react';

import { useStateValue } from '../StateProvider';
import './CheckoutProduct.css';

function CheckoutProduct({ id, title, image, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating).fill().map((_, i) => (<p>&#11088;</p>))
                    }
                </div>
                <button onClick={removeFromBasket} >Remove product</button>
            </div>
        </div>
    )
}

export default CheckoutProduct

