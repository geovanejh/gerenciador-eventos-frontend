import { setLoading } from "./UtilsAction";
import { api } from "../../api";
import { toast } from "react-hot-toast";

export const handleLogin = async (values, dispatch, navigate) => {
  setLoading(dispatch);
  try {
    const { data } = await api.post("/auth", values);
    console.log(data.token);
    api.defaults.headers.common["Authorization"] = data.token;
    localStorage.setItem("token", data.token);

    dispatch({
      type: "SET_LOGIN",
      token: data.token,
      isLogged: true,
    });
    navigate("/dashboard/tickets");
  } catch (error) {
    alert("Login e/ou senha inválidos!");
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
    await api.post(`/usuarios`, values);
    alert("Cadastrado com sucesso!");
    //toast.success("Registrado com sucesso!");
    navigate("/login");
  } catch (error) {
    alert("Um erro aconteceu, verifique os dados e tente novamente!");
    //if (error.response.data.errors) {
    //error.response.data.errors.map((e) => {
    //toast.error(`Um erro aconteceu!
    //${e}`);
    //});
    //} else {
    //toast.error("Um erro aconteceu.");
    //}
  }
  setLoading(dispatch);
};

export const isAuth = async (dispatch) => {
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const { data } = await api.get("/api/auth/check", {
        headers: {
          Authorization: token,
        },
      });
      api.defaults.headers.common["Authorization"] = token;
      localStorage.setItem("token", token);
      dispatch({
        type: "SET_LOGIN",
        token: token,
        isLogged: true,
        user_id: data.user_id,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOGIN",
        token: "",
        isLogged: false,
        user_id: "",
      });
    }
  } else {
    dispatch({
      type: "SET_LOGIN",
      token: "",
      isLogged: false,
      user_id: "",
    });
  }
};
