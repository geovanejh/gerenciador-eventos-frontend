import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ListItem } from "../FlatList/ListItem";
import { FaPrint } from "react-icons/fa";

const PeopleListItem = ({ event }) => {
  console.log(event);
  const date = moment(event.CreatedAt).format("DD/MM/YYYY");
  const navigate = useNavigate();

  const handleEndereco = (event) => {
    navigate(`/endereco/${event.idPessoa}`);
  };

  return (
    <ListItem layout="1fr 1.5fr 1fr 0.5fr">
      <div onClick={() => navigate(`/tickets/${event.ID}`)}>
        <p>{event.ID}</p>
      </div>
      <div onClick={() => navigate(`/tickets/${event.ID}`)}>
        <p>{date}</p>
      </div>
      <div onClick={() => navigate(`/tickets/${event.evento.ID}`)}>
        <p>R${event.valor}</p>
      </div>
      <div>
        <FaPrint />
      </div>
    </ListItem>
  );
};
export default PeopleListItem;
