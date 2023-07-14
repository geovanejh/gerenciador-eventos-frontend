import Item from "./Item";
import { MenuNav } from "./Menu.styled";
import { BiCurrentLocation } from "react-icons/bi";
import { MdLogout } from "react-icons/md";
import { FaTicketAlt } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogout } from "../../store/actions/AuthAction";
import { connect } from "react-redux";

const Menu = ({ dispatch }) => {
  const navigate = useNavigate();
  const { pathname: caminho } = useLocation();
  console.log(caminho);

  return (
    <MenuNav>
      <ul>
        <Item
          name="Início"
          url="/"
          icon={<BiCurrentLocation />}
          active={caminho === "/dashboard" ? "active" : ""}
        />
        <Item
          name="Meus ingressos"
          url="/dashboard/tickets"
          icon={<FaTicketAlt />}
          active={caminho.includes("/tickets") ? "active" : ""}
        />
        <Item
          name="Meus eventos"
          url="/dashboard/events"
          icon={<MdEvent />}
          active={caminho.includes("/events") ? "active" : ""}
        />
        <li>
          <button onClick={() => handleLogout(dispatch, navigate)}>
            <MdLogout />
            <p>Sair</p>
          </button>
        </li>
      </ul>
    </MenuNav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});
export default connect(mapStateToProps)(Menu);
