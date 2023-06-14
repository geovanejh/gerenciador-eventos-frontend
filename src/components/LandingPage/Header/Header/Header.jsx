import { connect } from "react-redux";
import { Button } from "../../../Button/Button";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Header = ({ dispatch, auth }) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Nav />
      {auth.isLogged === false ? (
        <Button primary onClick={() => navigate("/login")}>
          Acesse sua conta
        </Button>
      ) : (
        <Button primary onClick={() => navigate("/dashboard")}>
          Painel
        </Button>
      )}
    </HeaderContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Header);
