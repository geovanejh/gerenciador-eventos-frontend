import React from "react";
import Aside from "../components/Aside/Aside";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";

const TicketsPage = () => {
  return (
    <>
      <Aside />
      <DashboardContainer>
        <a>MEUS TICKETS</a>
      </DashboardContainer>
    </>
  );
};

export default TicketsPage;
