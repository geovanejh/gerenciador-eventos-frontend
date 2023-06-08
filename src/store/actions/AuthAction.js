import { setLoading } from "./UtilsAction";
import { mock } from "../../api";

export const handleLogin = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    const { data } = await mock.post("/login", values);
    mock.defaults.headers.common["Authorization"] = data.token;
    localStorage.setItem("token", data.token);

    dispatch({
      type: "SET_LOGIN",
      token: "TOKEN_TESTE",
      isLogged: true,
    });
    navigate("/dashboard");
  } catch (error) {
    console.log("não deu!");
  }
  setLoading(dispatch);
};

export const handleLogout = (dispatch, navigate) => {
  setLoading(dispatch);
  localStorage.removeItem("token");

  dispatch({
    type: "SET_LOGOUT",
  });
  navigate("/");
  setLoading(dispatch);
};

export const handleRegister = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    navigate("/login");
  } catch (error) {
    console.log("não foi!");
  }
  setLoading(dispatch);
};

export const isAuth = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    dispatch({
      type: "SET_LOGIN",
      token: token,
      isLogged: true,
    });
  } else {
    dispatch({
      type: "SET_LOGIN",
      token: "",
      isLogged: false,
    });
  }
};
