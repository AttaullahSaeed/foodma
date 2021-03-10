import { AUTHENTICATE } from "./DispatchActions";

export const checkAuth = () => (dispatch) => {
  console.log("checkAuthcheckAuthcheckAuth");
  const token = localStorage.getItem("token");
  if (token) {
    // apicall
    dispatch({
      type: AUTHENTICATE,
      payload: true,
    });
  } else {
    // apicall
    dispatch({
      type: AUTHENTICATE,
      payload: false,
    });
  }
};
