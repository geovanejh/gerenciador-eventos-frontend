import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../api";
import Header from "../components/LandingPage/Header/Header/Header";
import { LandingPageContainer } from "../components/LandingPage/LandingPage.styled";
import Loading from "../components/Loading/Loading";
import EventPage from "../components/Purchase/EventP/EventPage";
import { handleGetTicketInfo } from "../store/actions/PurchaseAction";

const Event = ({ dispatch, auth }) => {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState();

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/eventos/${id}`);
      setEvent(data);
      console.log("data: ", data);
    } catch (error) {
      alert("erro na req de evento");
    }
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  const compraIngresso = () => {
    if (auth.isLogged === false) {
      navigate("/login");
    } else {
      handleGetTicketInfo(dispatch, id, auth.user_id);
      navigate(`/purchase/${id}`);
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <LandingPageContainer>
      <Header />
      <EventPage compraIngresso={compraIngresso} />
    </LandingPageContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Event);
