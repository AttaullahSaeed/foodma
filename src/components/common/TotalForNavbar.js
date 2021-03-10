import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const TotalForNavbar = () => {
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    return (
        <div>
            <div className="dropdown-cart-top-footer border-top p-4">
            <p className="mb-0 font-weight-bold text-secondary">Sub Total <span className="float-right text-dark">${cartItems.reduce((a, c) => a + c.price, 0).toPrecision(5)}</span></p>
            <small className="text-info">Extra charges may apply</small>
        </div>
        </div>
    )
}

export default TotalForNavbar
