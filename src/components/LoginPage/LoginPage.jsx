import { LoginForm, LoginPageContainer } from "./LoginPage.styled";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/actions/AuthAction";
import { connect } from "react-redux";
import { useFormik } from "formik";
import PrimaryButton from "../Button/PrimaryButton/PrimaryButton";
import Logo from "../LandingPage/Header/Logo";
import Logoimg from "../../assets/logo.svg";

const LoginPage = ({ dispatch }) => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      senha: "",
    },
    onSubmit: (values) => {
      handleLogin(values, dispatch, navigate);
    },
  });

  return (
    <LoginPageContainer>
      <PrimaryButton text="VOLTAR" onClick={() => navigate("/")} />
      <LoginForm onSubmit={formik.handleSubmit}>
        <Logo src={Logoimg} height="48px" />
        <label htmlFor="login">login</label>
        <input
          label="Email*"
          placeholder="Email*"
          id="email"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <label htmlFor="senha">senha</label>
        <input
          label="Senha*"
          placeholder="Senha*"
          id="senha"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.senha}
          onBlur={formik.handleBlur}
          formik={formik}
        />
        <button type="submit" id="ButtonLogin">
          LOGAR!
        </button>
      </LoginForm>
    </LoginPageContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(LoginPage);
