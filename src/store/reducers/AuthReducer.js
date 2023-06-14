const INITIAL_STATE = {
  token: "",
  isLogged: false,
  user_id: "",
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      ...state,
      token: action.token,
      isLogged: action.isLogged,
      user_id: action.user_id ? action.user_id : "",
    };
  }

  if (action.type === "SET_LOGOUT") {
    return { ...state, token: "", isLogged: false, user_id: "" };
  }

  return state;
};

export default AuthReducer;
