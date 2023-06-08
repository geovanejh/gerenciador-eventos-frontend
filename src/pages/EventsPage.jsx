import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";

const EventsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Aside />
      <DashboardContainer>
        <a>MEUS EVENTOS</a>
        <button onClick={() => navigate("/events/create")}>NOVO</button>
      </DashboardContainer>
    </>
  );
};

export default EventsPage;
