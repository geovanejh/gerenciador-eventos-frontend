import { Button } from "../../../Button/Button";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Nav />
      <Button primary onClick={() => navigate("/login")}>
        Acesse sua conta
      </Button>
    </HeaderContainer>
  );
};

export default Header;
