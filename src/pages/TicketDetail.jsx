import TicketDetails from "../components/TicketDetails/TicketDetails";
import { useParams } from "react-router-dom";

const TicketDetail = () => {
  const { id } = useParams();

  return (
    <>
      <TicketDetails id={id} />
    </>
  );
};

export default TicketDetail;
