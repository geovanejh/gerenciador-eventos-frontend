import { useNavigate } from "react-router-dom";

const Logo = ({ src, width, height }) => {
  const navigate = useNavigate();

  return (
    <img
      src={src}
      width={width}
      height={height}
      onClick={() => navigate("/")}
    ></img>
  );
};

export default Logo;
