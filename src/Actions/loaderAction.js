import { START_LOADING } from "./DispatchActions";

export const LoadingState = (data) => (dispatch) => {
    console.log("LOADING ACTION DATA", data);
    dispatch({
        type: START_LOADING,
        payload: data,
    });
};
