import Logo from "../Logo";
import SearchBar from "../SearchBar/SearchBar";
import { NavContainer } from "./Nav.styled";
import Logotipo from "../../../../assets/Meu projeto.png";

const Nav = () => {
  return (
    <NavContainer>
      <div>
        <Logo width="120px" src={Logotipo} />
        <SearchBar />
      </div>
      <a>Seja um organizador</a>
    </NavContainer>
  );
};

export default Nav;
