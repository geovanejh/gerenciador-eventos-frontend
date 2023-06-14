import { setLoading } from "./UtilsAction";
import { api } from "../../api";

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
    await api.post(`/usuarios`, values);
    alert("foi");
    //toast.success("Registrado com sucesso!");
    navigate("/login");
  } catch (error) {
    alert("foi n kkkk", error);
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
          Authorization: localStorage.getItem("token"),
        },
      });
      api.defaults.headers.common["Authorization"] = data.token;
      localStorage.setItem("token", data.token);
      dispatch({
        type: "SET_LOGIN",
        token: data.token,
        isLogged: true,
      });
    } catch (error) {
      dispatch({
        type: "SET_LOGIN",
        token: "",
        isLogged: false,
      });
    }
  } else {
    dispatch({
      type: "SET_LOGIN",
      token: "",
      isLogged: false,
    });
  }
};
