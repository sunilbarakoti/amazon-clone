/*
    - This component is reposible for displaying the items added in the cart.
    - It also checks if the basket is empty and displays the message accordingly.
    - Context API is used for the state management. Basket is the global variable from the context API
      and is updated everytime as the user adds the product.
 */

import React from 'react';

import { useStateValue } from '../StateProvider';
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';
import './Checkout.css';


function Checkout() {
    const [{ basket }] = useStateValue();

    console.log(basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    className="checkout_adimage"
                    src=""
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2> Your Shopping basket is empty</h2>
                        <p> You have no items in your basket. To buy one or more items,
                        click "Add to basket" next to the item</p>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout__title">Your Shopping Basket</h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
            </div>
            {basket.length > 0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
