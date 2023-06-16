import { RiDeleteBinFill } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { ListItem } from "../FlatList/ListItem";
import { Button } from "../Button/Button";

const PeopleListItem = ({ person, handleDelete, handleEdit }) => {
  const imgPlaceholder =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  const date = moment(person.dataNascimento).format("DD/MM/YYYY");
  const navigate = useNavigate();

  const handleEndereco = (person) => {
    navigate(`/endereco/${person.idPessoa}`);
  };

  return (
    <ListItem layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
      <div onClick={() => navigate(`/detalhes/${person.idPessoa}`)}>
        <img src={imgPlaceholder} alt="" />
        <p>{person.ID}</p>
      </div>
      <div onClick={() => navigate(`/detalhes/${person.idPessoa}`)}>
        <p>{person.event_id}</p>
      </div>
      <div onClick={() => navigate(`/detalhes/${person.idPessoa}`)}>
        <p>{person.status}</p>
      </div>
      <div onClick={() => navigate(`/detalhes/${person.idPessoa}`)}>
        <p>{date}</p>
      </div>
      <div>
        <Button
          onClick={() => handleEndereco(person)}
          border="none"
          fontSize="14px"
          fontWeight="600"
          borderRadius="10px"
        >
          XXXXXXXXXXXXX
        </Button>
      </div>
      <div>
        <Button
          onClick={() => handleEdit(person)}
          border="none"
          background="transparent"
          fontSize="20px"
        >
          <FiEdit />
        </Button>
        <Button
          onClick={() => handleDelete(person)}
          border="none"
          background="transparent"
          fontSize="20px"
        >
          <RiDeleteBinFill />
        </Button>
      </div>
    </ListItem>
  );
};
export default PeopleListItem;
