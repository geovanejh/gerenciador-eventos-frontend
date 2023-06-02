import { Primary } from "./PrimaryButton.styled";

const PrimaryButton = ({ text, onClick }) => {
  return <Primary onClick={onClick}>{text}</Primary>;
};

export default PrimaryButton;
