import React from "react";
import Header from "../components/LandingPage/Header/Header/Header";
import { LandingPageContainer } from "../components/LandingPage/LandingPage.styled";
import Upcoming from "../components/LandingPage/Upcoming/Upcoming";
import FirstSection from "../components/LandingPage/FirstSection/FirstSection";

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Header></Header>
      <FirstSection />
      <Upcoming />
    </LandingPageContainer>
  );
};

export default LandingPage;
