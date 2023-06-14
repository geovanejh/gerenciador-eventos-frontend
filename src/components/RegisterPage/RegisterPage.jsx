import { useNavigate } from "react-router-dom";
import { handleRegister } from "../../store/actions/AuthAction";
import { connect } from "react-redux";
import { useFormik } from "formik";
import Logo from "../LandingPage/Header/Logo";
import Logoimg from "../../assets/img.png";
import { AuthPage } from "../AuthPages/AuthPage";
import { AuthContainer } from "../AuthPages/AuthContainer";
import FormField from "../Form/FormField/FormField";
import { AuthForm } from "../AuthPages/LoginForm";
import { Button } from "../Button/Button";

const RegisterPage = ({ dispatch }) => {
  const navigate = useNavigate();

  //TODO formatar os dados.
  const formataDatos = (values) => {
    const newValues = {
      ...values,
    };
    return newValues;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      cpf: "",
      rg: "",
      phone: "",
      logadouro: "",
      number: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "",
    },
    onSubmit: (values) => {
      handleRegister(formataDatos(values), dispatch, navigate);
    },
  });

  return (
    <AuthPage>
      <AuthContainer>
        <Button onClick={() => navigate(-1)}> Voltar </Button>
        <Logo src={Logoimg} height="48px" />
        <h3>4Pass</h3>
        <h2>Entre na sua conta </h2>
        <h5>Digite seu login e senha abaixo</h5>
        <AuthForm onSubmit={formik.handleSubmit}>
          <FormField
            id="email"
            type="text"
            label="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="email"
          />
          <FormField
            id="password"
            type="password"
            label="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="password"
          />
          <FormField
            id="name"
            type="text"
            label="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="name"
          />
          <FormField
            id="cpf"
            type="text"
            label="cpf"
            onChange={formik.handleChange}
            value={formik.values.cpf}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="cpf"
          />
          <FormField
            id="rg"
            type="text"
            label="rg"
            onChange={formik.handleChange}
            value={formik.values.rg}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="rg"
          />
          <FormField
            id="phone"
            type="text"
            label="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="phone"
          />
          <FormField
            id="logadouro"
            type="text"
            label="logadouro"
            onChange={formik.handleChange}
            value={formik.values.logadouro}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="logadouro"
          />
          <FormField
            id="number"
            type="text"
            label="number"
            onChange={formik.handleChange}
            value={formik.values.number}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="number"
          />
          <FormField
            id="bairro"
            type="text"
            label="bairro"
            onChange={formik.handleChange}
            value={formik.values.bairro}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="bairro"
          />
          <FormField
            id="cidade"
            type="text"
            label="cidade"
            onChange={formik.handleChange}
            value={formik.values.cidade}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="cidade"
          />
          <FormField
            id="estado"
            type="text"
            label="estado"
            onChange={formik.handleChange}
            value={formik.values.estado}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="estado"
          />
          <FormField
            id="cep"
            type="text"
            label="cep"
            onChange={formik.handleChange}
            value={formik.values.cep}
            onBlur={formik.handleBlur}
            formik={formik}
            placeholder="cep"
          />
          <Button primary type="submit" text="Login">
            Registrar
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

export default connect(mapStateToProps)(RegisterPage);
