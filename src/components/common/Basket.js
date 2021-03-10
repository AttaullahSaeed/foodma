import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from 'react-redux';
const Basket = () => {
    const cart= useSelector(state => state.cart);
    const {cartItems} = cart;
    return (
        <div className="count__basket">
        {
            cartItems.length >0? (
                <i className="fas fa-shopping-basket mr-1 "><span className="ml-1 total___carts">{cartItems.length}</span></i>
            ):
            <i className="fas fa-shopping-basket mr-1 "><span className="ml-1 total___carts">0</span></i>
        }
          
        </div>
    )
}

export default Basket
