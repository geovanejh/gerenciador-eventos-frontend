const INITIAL_STATE = {
  token: "",
  isLogged: false,
};

const AuthReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_LOGIN") {
    return {
      ...state,
      token: action.token,
      isLogged: action.isLogged,
    };
  }

  if (action.type === "SET_LOGOUT") {
    return { ...state, token: "", isLogged: false };
  }

  return state;
};

export default AuthReducer;
