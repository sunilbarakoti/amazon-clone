/*
    - This component calculates the subtotal  of the items added in the cart and displays in the 
      checkout page.
    - Global variable basket is taken and the total sum of amount is calculated using 'react-currency-format'.
*/

import React from 'react';

import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider';
import { getBasketTotal } from '../../reducer';
import './Subtotal.css';

function Subtotal() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items) : <strong>{`   ${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
