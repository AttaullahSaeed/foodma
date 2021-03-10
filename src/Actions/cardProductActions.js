
import axios from "axios";
import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST
    , PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"

import {CART_ADD_ITEM} from '../constants/cartConstants.jsx';
export const cardProducts = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_LIST_REQUEST,
    })
    try {
        const { data } = await axios.get("https://fakestoreapi.com/products");
        dispatch({
            type: PRODUCT_LIST_SUCCESS,
            payload: data,
     
        })
      
    } catch (error) {
        dispatch({
            type: PRODUCT_LIST_FAIL,
            payload: error.message,
        })
    }
};
export const addToCart = (productId,qty) => async(dispatch, getState) =>{

    const {data} = await axios.get(`https://fakestoreapi.com/products/${productId}`);
    console.log('cart data: ', data)
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