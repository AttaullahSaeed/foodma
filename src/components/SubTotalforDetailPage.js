import React from 'react'
import {useSelector, useDispatch} from "react-redux"
const SubTotalforDetailPage = () => {
    const cart = useSelector((state) => state.cart);
    const {cartItems} = cart;
    return (
        <div>
           Subtotal:${cartItems.reduce((a, c) => a + c.price, 0)}
        </div>
    )
}

export default SubTotalforDetailPage
