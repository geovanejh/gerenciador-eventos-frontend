import React from "react";
import FormField from "../../Form/FormField/FormField";
import { useEffect } from "react";
import { api } from "../../../api";
import { connect } from "react-redux";
import { useState } from "react";
import Loading from "../../Loading/Loading";
import { PaymentStageContainer } from "./PaymentStage.styled";

const PaymentStageOne = ({ formik, auth }) => {
  const [loading, setLoading] = useState();

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/usuarios/${auth.user_id}`);
      console.log(data);
      formik.setFieldValue("rua", data.logadouro);
      formik.setFieldValue("numero", data.number);
      formik.setFieldValue("zip_code", data.cep);
      formik.setFieldValue("city", data.cidade);
      formik.setFieldValue("state", data.estado);
      formik.setFieldValue("country", "Brazil");
      formik.setFieldValue("firstname", data.nome);
      formik.setFieldValue("lastname", data.sobrenome);
      formik.setFieldValue("identification_number", data.cpf);
      formik.setFieldValue("email", data.email);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <div>
      <PaymentStageContainer>
        <FormField
          id="rua"
          type="text"
          label="Rua"
          onChange={formik.handleChange}
          value={formik.values.rua}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Rua"
        />
        <FormField
          id="numero"
          type="text"
          label="Número"
          onChange={formik.handleChange}
          value={formik.values.numero}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Número"
        />
        <FormField
          id="zip_code"
          type="text"
          label="CEP"
          onChange={formik.handleChange}
          value={formik.values.zip_code}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="CEP"
        />
        <FormField
          id="city"
          type="text"
          label="Cidade"
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Cidade"
        />
        <FormField
          id="state"
          type="text"
          label="Estado"
          onChange={formik.handleChange}
          value={formik.values.state}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Estado"
        />
      </PaymentStageContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(PaymentStageOne);
