import axios from "axios"

import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../constants/cartConstants';
export const addToCart = (productId,qty) => async(dispatch, getState) =>{

    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    dispatch({
        type: CART_ADD_ITEM,
        payload: {
            category:data.category,
            image:data.image,
            price:data.price,
            title:data.title,
            product:data.id,
            qty,
        }
    })
   localStorage.setItem('cartItems' ,JSON.stringify(getState().cart.cartItems));
};
export const removeFromCart = (id) => async (dispatch,getState) => {
    dispatch({ 
        type: CART_REMOVE_ITEM,
        payload:id
    });
    localStorage.setItem('cartItems' ,JSON.stringify(getState().cart.cartItems));
}