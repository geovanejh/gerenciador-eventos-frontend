import Aside from "../components/Aside/Aside";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";

const EventsPage = () => {
  return (
    <>
      <Aside />
      <DashboardContainer>
        <a>MEUS EVENTOS</a>
      </DashboardContainer>
    </>
  );
};

export default EventsPage;
