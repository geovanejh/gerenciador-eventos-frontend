import { Link } from "react-router-dom";
import Logotipo from "../../assets/logo.svg";
import { LogoContainer } from "./Logo.styled";

const Logo = () => {
  return (
    <LogoContainer>
      <Link to="/dashboard">
        <img src={Logotipo} alt="" />
      </Link>
    </LogoContainer>
  );
};
export default Logo;
