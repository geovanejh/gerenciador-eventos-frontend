import { useState } from "react";
import Loading from "../../Loading/Loading";
import { PaymentStageContainer } from "./PaymentStage.styled";
import FormField from "../../Form/FormField/FormField";

const PaymentStageThree = ({ formik }) => {
  const [loading, setLoading] = useState();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <PaymentStageContainer>
        <FormField
          id="card_number"
          type="text"
          label="Número do cartão"
          onChange={formik.handleChange}
          value={formik.values.card_number}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Número do cartão"
        />
        <FormField
          id="nome_cartao"
          type="text"
          label="Nome no cartão"
          onChange={formik.handleChange}
          value={formik.values.nome_cartao}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Nome no cartão"
        />
        <FormField
          id="expiration_month"
          type="text"
          label="Data de vencimento"
          onChange={formik.handleChange}
          value={formik.values.expiration_month}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Data de vencimento (00/00)"
        />
        <FormField
          id="security_code"
          type="text"
          label="Código de segurança"
          onChange={formik.handleChange}
          value={formik.values.security_code}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Código de segurança"
        />
      </PaymentStageContainer>
    </div>
  );
};

export default PaymentStageThree;
