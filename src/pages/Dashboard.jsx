import React from "react";
import { useNavigate } from "react-router-dom";
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

  return <>Página inicial</>;
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Dashboard);
