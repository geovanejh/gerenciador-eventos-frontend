import React from "react";
import { useNavigate } from "react-router-dom";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";
import Aside from "../components/Aside/Aside";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Aside />
      <DashboardContainer>PÁGINA INICIAL</DashboardContainer>
    </>
  );
};

export default Dashboard;
