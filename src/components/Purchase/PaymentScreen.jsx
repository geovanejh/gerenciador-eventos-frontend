import { useState } from "react";
import PaymentStageOne from "./PaymentStage/PaymentStageOne";
import PaymentStageTwo from "./PaymentStage/PaymentStageTwo";
import PaymentStageThree from "./PaymentStage/PaymentStageThree";
import { Button } from "../Button/Button";
import { useFormik } from "formik";
import { api } from "../../api";
import { useNavigate } from "react-router-dom";
import { AdvanceContainer } from "./PaymentStage/PaymentStage.styled";
import PaymentStageFour from "./PaymentStage/PaymentStageFour";

const PaymentScreen = ({ event, setStage, stage, formik }) => {
  const [paymentStage, setPaymentStage] = useState(1);
  const navigate = useNavigate();

  return (
    <div>
      {paymentStage === 1 && <PaymentStageOne formik={formik} />}
      {paymentStage === 2 && <PaymentStageTwo formik={formik} />}
      {paymentStage === 3 && <PaymentStageThree formik={formik} />}
      {paymentStage === 4 && <PaymentStageFour formik={formik} event={event} />}
      <AdvanceContainer>
        <a
          onClick={() => {
            paymentStage > 1 ? setPaymentStage(paymentStage - 1) : setStage(1);
          }}
        >
          Voltar
        </a>
        {paymentStage < 4 ? (
          <Button
            primary
            onClick={() => {
              paymentStage !== 4
                ? setPaymentStage(paymentStage + 1)
                : setStage(2);
            }}
          >
            Próximo
          </Button>
        ) : (
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
              formik.handleSubmit();
            }}
          >
            Finalizar compra!
          </Button>
        )}
      </AdvanceContainer>
    </div>
  );
};

export default PaymentScreen;
