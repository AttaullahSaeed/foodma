import { AUTHENTICATE } from "../Actions/DispatchActions";

const initialState = {
  products: null,
  bulk: null,
  is_Auth: null,
};

export default function (state = initialState, actions) {
  switch (actions.type) {
    case "GET_DATA":
      return { ...state, products: actions.payload };
    case "GET_BULK":
      return { ...state, bulk: actions.payload };
    case "AUTHENTICATE":
      return { ...state, is_Auth: actions.payload };

    default:
      return state;
  }
}
