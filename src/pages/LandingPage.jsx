import React from "react";
import Header from "../components/LandingPage/Header/Header/Header";
import { LandingPageContainer } from "../components/LandingPage/LandingPage.styled";
import Upcoming from "../components/LandingPage/Upcoming/Upcoming";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header></Header>
      <Upcoming />
    </LandingPageContainer>
  );
};

export default LandingPage;
