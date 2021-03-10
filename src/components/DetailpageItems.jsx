import React from 'react'
import { useSelector } from 'react-redux';
const DetailpageItems = () => {
    const cart= useSelector(state => state.cart);
    const {cartItems} = cart;
    return (
        <div>
              {
                cartItems.length > 0 ? (
                  <h6 className="text-white font-weight-bold my-2">{cartItems.length} Items</h6>
                ):
                <h6 className="text-white font-weight-bold my-2">0 Item</h6>
              }
        </div>
    )
}

export default DetailpageItems
