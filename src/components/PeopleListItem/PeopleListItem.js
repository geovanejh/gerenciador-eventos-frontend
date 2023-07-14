import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ListItem } from "../FlatList/ListItem";
import { FaPrint } from "react-icons/fa";

const PeopleListItem = ({ event }) => {
  console.log("event: ", event);
  const date = moment(event.CreatedAt).format("DD/MM/YYYY");
  const navigate = useNavigate();

  const handleEndereco = (event) => {
    navigate(`/endereco/${event.idPessoa}`);
  };

  return (
    <ListItem layout="1fr 1.5fr 1fr 1fr 0.5fr">
      <div onClick={() => navigate(`/dashboard/tickets/${event.id}`)}>
        <p>{event.id}</p>
      </div>
      <div onClick={() => navigate(`/dashboard/tickets/${event.id}`)}>
        <p>{event.evento.titulo}</p>
      </div>
      <div onClick={() => navigate(`/dashboard/tickets/${event.id}`)}>
        <p>{date}</p>
      </div>
      <div onClick={() => navigate(`/dashboard/tickets/${event.id}`)}>
        <p>R${event.valor}</p>
      </div>
      <div>
        <FaPrint />
      </div>
    </ListItem>
  );
};
export default PeopleListItem;
