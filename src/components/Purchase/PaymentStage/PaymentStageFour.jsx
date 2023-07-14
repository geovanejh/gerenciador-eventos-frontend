import { useState } from "react";
import { PaymentStageContainer } from "./PaymentStage.styled";
import Loading from "../../Loading/Loading";

const PaymentStageFour = ({ formik, event }) => {
  const [loading, setLoading] = useState();
  console.log(formik.values);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <PaymentStageContainer>
        <h3>Confirmação de compra: </h3>
        <div>
          <p>
            <b>Evento:</b> {event?.titulo} - {event.descricao}
          </p>
          <p>
            <b>Valor do Ingresso:</b> R${event?.valor_ingresso}
          </p>
          <p>
            <b>Quantidade:</b> {formik.values.qtd_ingressos}
          </p>
          <div></div>
          <p>
            <b>Valor total:</b> R$
            {formik.values.qtd_ingressos * event?.valor_ingresso}
          </p>
          <p>
            <b>Pagamento:</b> Cartão de crédito terminado em{" "}
            {formik.values.card_number.slice(-4)}
          </p>
        </div>
      </PaymentStageContainer>
    </div>
  );
};

export default PaymentStageFour;
