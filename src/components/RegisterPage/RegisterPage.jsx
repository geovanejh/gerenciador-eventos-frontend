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
import { useState } from "react";
import RegisterPageOne from "./RegisterPageOne";
import RegisterPageTwo from "./RegisterPageTwo";
import RegisterPageThree from "./RegisterPageThree";
import { AdvanceContainer } from "../Purchase/PaymentStage/PaymentStage.styled";

const RegisterPage = ({ dispatch }) => {
  const navigate = useNavigate();
  const [stage, setStage] = useState(1);

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
      nome: "",
      sobrenome: "",
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
        <Button primary onClick={() => navigate("/login")}>
          Voltar
        </Button>
        <Logo src={Logoimg} height="48px" />
        <AuthForm>
          {stage === 1 && <RegisterPageOne formik={formik} />}
          {stage === 2 && <RegisterPageTwo formik={formik} />}
          {stage === 3 && <RegisterPageThree formik={formik} />}
          <AdvanceContainer>
            {stage !== 1 ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setStage(stage - 1);
                }}
              >
                Voltar
              </a>
            ) : (
              <a></a>
            )}
            {stage !== 3 && (
              <Button
                primary
                onClick={(e) => {
                  e.preventDefault();
                  setStage(stage + 1);
                }}
              >
                Avançar
              </Button>
            )}
          </AdvanceContainer>
          {stage === 3 && (
            <Button
              primary
              text="Login"
              onClick={(e) => {
                e.preventDefault();
                formik.handleSubmit();
              }}
            >
              Registrar
            </Button>
          )}
        </AuthForm>
      </AuthContainer>
    </AuthPage>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(RegisterPage);
