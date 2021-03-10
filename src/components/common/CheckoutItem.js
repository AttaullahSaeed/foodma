
import React from 'react';
import Icofont from 'react-icofont';
import {useSelector, useDispatch} from "react-redux"

const CheckoutItem = () => {
  const { cartItems} = useSelector(state => state.cart);
  console.log('your cart:', cartItems);
  return (
    <div>
     {cartItems.length > 0 ? cartItems.map(cart => (
      <div className="d-flex justify-content-around" key={cart.id}>
       <p className="mt-2"><Icofont icon="ui-press" className="text-danger food-item mb-1" />&nbsp;&nbsp;{cart.category.slice(0, 20)}</p>
       <select className="option__cs1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                
              </select>
              <p className="mt-2">${cart.price}</p>
     </div>
     )) : 'your cart is empty'}
    
    




    </div>
  )
}

export default CheckoutItem
