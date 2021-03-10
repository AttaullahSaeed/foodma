import { START_LOADING } from "../actions/DispatchActions";

// START_LOADING
const initialState = {
    loading: false,
};

export default function (state = initialState, actions) {
    switch (actions.type) {
        case START_LOADING:
            return { ...state, loading: actions.payload };
        default:
            return state;
    }
}
