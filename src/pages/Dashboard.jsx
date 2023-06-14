import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";
import Aside from "../components/Aside/Aside";
import { useEffect } from "react";
import { connect } from "react-redux";
import { isAuth } from "../store/actions/AuthAction";

const Dashboard = ({ dispatch }) => {
  const navigate = useNavigate();
  const setup = async () => {
    try {
      isAuth(dispatch);
    } catch (error) {
      alert("deu ruim");
    }
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <Aside />
      <DashboardContainer>PÁGINA INICIAL</DashboardContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Dashboard);
