import React, { useEffect, useState } from "react";
import Header from "../components/LandingPage/Header/Header/Header";
import { LandingPageContainer } from "../components/LandingPage/LandingPage.styled";
import { useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { api } from "../api";
import { handleGetTicketInfo } from "../store/actions/PurchaseAction";

const Event = ({ dispatch, auth }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState();

  const compraIngresso = () => {
    if (auth.isLogged === false) {
      navigate("/login");
    } else {
      handleGetTicketInfo(dispatch, id, auth.user_id);
      navigate("/purchase");
    }
  };

  const setup = async () => {
    const { data } = await api.get(`/api/eventos/${id}`);
    setSelectedEvent(data);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <LandingPageContainer>
      <Header />
      <button onClick={() => navigate(-1)}>voltar</button>
      <h1>EVENTO N° {id}</h1>
      <p></p>
      <button onClick={() => compraIngresso()}>COMPRAR</button>
    </LandingPageContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Event);
