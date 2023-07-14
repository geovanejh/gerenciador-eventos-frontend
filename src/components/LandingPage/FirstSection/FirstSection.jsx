import Image from "../../../assets/20943471-removebg-preview.png";
import { CustomSection } from "./FirstSection.styled";

const FirstSection = () => {
  return (
    <CustomSection>
      <div>
        <h1>
          Organize seus eventos de forma <span>rápida</span> e{" "}
          <span>prática</span>.
        </h1>
      </div>
      <div>
        <img src={Image} alt="" />
      </div>
    </CustomSection>
  );
};

export default FirstSection;
