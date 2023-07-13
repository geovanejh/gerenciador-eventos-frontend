import FormField from "../Form/FormField/FormField";

const EventFormPageTwo = ({ formik }) => {
  return (
    <>
      <FormField
        id="valor_ingresso"
        type="text"
        label="valor_ingresso"
        onChange={formik.handleChange}
        value={formik.values.valor_ingresso}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="valor_ingresso"
      />
      <FormField
        id="numero_ingressos"
        type="text"
        label="numero_ingressos"
        onChange={formik.handleChange}
        value={formik.values.numero_ingressos}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="numero_ingressos"
      />
    </>
  );
};

export default EventFormPageTwo;
