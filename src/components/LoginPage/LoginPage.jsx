import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../store/actions/AuthAction";
import { connect } from "react-redux";
import { useFormik } from "formik";
import Logo from "../LandingPage/Header/Logo";
import Logoimg from "../../assets/img.png";
import { AuthPage } from "../AuthPages/AuthPage";
import { AuthContainer } from "../AuthPages/AuthContainer";
import FormField from "../Form/FormField/FormField";
import { AuthForm } from "../AuthPages/LoginForm";
import { Button } from "../Button/Button";

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
    <AuthPage>
      <AuthContainer>
        <Button onClick={() => navigate("/")}> Voltar </Button>
        <Logo src={Logoimg} height="48px" />
        <h3>4Pass</h3>
        <h2>Entre na sua conta </h2>
        <h5>Digite seu login e senha abaixo</h5>
        <AuthForm onSubmit={formik.handleSubmit}>
          <FormField
            id="login"
            type="text"
            label="Login"
            onChange={formik.handleChange}
            value={formik.values.login}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Login"
          />
          <FormField
            id="senha"
            type="password"
            label="Senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="Senha"
          />
          <Button primary type="submit" text="Login">
            Login
          </Button>
        </AuthForm>
        <h5>
          Não possui uma conta?
          <a href="#" onClick={() => navigate("/users")}>
            <span>Registre-se</span>
          </a>
        </h5>
      </AuthContainer>
    </AuthPage>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(LoginPage);
