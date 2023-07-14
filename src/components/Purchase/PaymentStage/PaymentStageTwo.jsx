import { useState } from "react";
import Loading from "../../Loading/Loading";
import { PaymentStageContainer } from "./PaymentStage.styled";
import FormField from "../../Form/FormField/FormField";

const PaymentStageTwo = ({ formik }) => {
  const [loading, setLoading] = useState();

  return loading ? (
    <Loading />
  ) : (
    <div>
      <PaymentStageContainer>
        <FormField
          id="firstname"
          type="text"
          label="Nome"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Nome"
        />
        <FormField
          id="lastname"
          type="text"
          label="Sobrenome"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Sobrenome"
        />
        <FormField
          id="identification_number"
          type="text"
          label="CPF"
          onChange={formik.handleChange}
          value={formik.values.identification_number}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="CPF"
        />
        <FormField
          id="email"
          type="text"
          label="e-mail"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="e-mail"
        />
      </PaymentStageContainer>
    </div>
  );
};

export default PaymentStageTwo;
