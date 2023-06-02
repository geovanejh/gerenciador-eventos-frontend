import React from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Sidebar />
    </div>
  );
};

export default LandingPage;
