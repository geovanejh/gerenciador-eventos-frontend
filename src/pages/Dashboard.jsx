import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";
import Aside from "../components/Aside/Aside";
import { useEffect } from "react";
import { api } from "../api";

const Dashboard = () => {
  const navigate = useNavigate();
  const setup = async () => {
    try {
      const { data } = await api.get("/eventos");
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

export default Dashboard;
