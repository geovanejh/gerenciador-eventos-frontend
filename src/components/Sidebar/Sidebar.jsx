import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../../store/actions/AuthAction";

const Sidebar = ({ dispatch }) => {
  const navigate = useNavigate();

  return (
    <>
      <a onClick={() => navigate("/dashboard")}>DASHBOARD</a>
      <a onClick={() => navigate("/tickets")}> Meus ingressos </a>
      <a onClick={() => navigate("/events")}> Meus eventos </a>
      <button onClick={() => handleLogout(dispatch, navigate)}>
        DESLOGAR!
      </button>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.authReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Sidebar);
