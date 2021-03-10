import axios from "axios";
import {
    PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_DETAILS_REQUEST
    , PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAIL
} from "../constants/productConstants"

export const listProducts = () => async (dispatch) => {
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
