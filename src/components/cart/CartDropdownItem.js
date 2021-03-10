import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import { removeFromCart } from '../../Actions/cartActions';
import { AiOutlineDelete } from "react-icons/ai";
import Tooltip from '@material-ui/core/Tooltip';

const CartDropdownItem = () => {
const dispatch=useDispatch();
  const { cartItems} = useSelector(state => state.cart);
  console.log('your cart:', cartItems);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
 }
  return (
    <div className="">
     {cartItems.length > 0 ? cartItems.map(cart => (
     <div className="d-flex justify-content-between" key={cart.id}>
       <p>{cart.category}</p>
       <p>{cart.price}</p>
       <Tooltip title="Delete">
       <div className="col-md-3">

       <AiOutlineDelete onClick={() =>removeFromCartHandler(cart.product)} className="delete_icon"/>
                                       
                                      </div>
                                      </Tooltip>
     </div>
     )) : <p>Your cart is empty</p>}

     
    </div>
  )
}

export default CartDropdownItem
