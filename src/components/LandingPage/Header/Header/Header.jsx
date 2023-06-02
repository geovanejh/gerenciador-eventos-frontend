import PrimaryButton from "../../../Button/PrimaryButton/PrimaryButton";
import Nav from "../Nav/Nav";
import { HeaderContainer } from "./Header.styled";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <Nav />
      <PrimaryButton
        text="Acesse sua conta"
        onClick={() => navigate("/login")}
      />
    </HeaderContainer>
  );
};

export default Header;
