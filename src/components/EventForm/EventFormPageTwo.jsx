import FormField from "../Form/FormField/FormField";

const EventFormPageTwo = ({ formik }) => {
  return (
    <>
      <FormField
        id="valor_ingresso"
        type="text"
        label="Valor do ingresso"
        onChange={formik.handleChange}
        value={formik.values.valor_ingresso}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Valor do ingresso"
      />
      <FormField
        id="numero_ingressos"
        type="text"
        label="Número de ingressos disponíveis"
        onChange={formik.handleChange}
        value={formik.values.numero_ingressos}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Número de ingressos disponíveis"
      />
    </>
  );
};

export default EventFormPageTwo;
