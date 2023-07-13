import FormField from "../Form/FormField/FormField";

const EventFormPageOne = ({ formik }) => {
  return (
    <>
      <FormField
        id="titulo"
        type="text"
        label="Titulo"
        onChange={formik.handleChange}
        value={formik.values.titulo}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="titulo"
      />
      <FormField
        id="descricao"
        type="text"
        label="descricao"
        onChange={formik.handleChange}
        value={formik.values.descricao}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="descricao"
      />
      <FormField
        id="categoria"
        type="text"
        label="categoria"
        onChange={formik.handleChange}
        value={formik.values.categoria}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="categoria"
      />
      <FormField
        id="modalidade"
        type="text"
        label="modalidade"
        onChange={formik.handleChange}
        value={formik.values.modalidade}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="modalidade"
      />
    </>
  );
};

export default EventFormPageOne;
