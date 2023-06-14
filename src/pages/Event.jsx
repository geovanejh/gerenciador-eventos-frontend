import React from "react";
import Header from "../components/LandingPage/Header/Header/Header";
import { LandingPageContainer } from "../components/LandingPage/LandingPage.styled";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";

const Event = ({ auth }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const compraIngresso = () => {
    if (auth.isLogged === false) {
      navigate("/login");
    } else {
      navigate("/purchase");
    }
  };

  return (
    <LandingPageContainer>
      <Header />
      <button onClick={() => navigate(-1)}>voltar</button>
      <h1>EVENTO N° {id}</h1>
      <button onClick={() => compraIngresso()}>COMPRAR</button>
    </LandingPageContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Event);
