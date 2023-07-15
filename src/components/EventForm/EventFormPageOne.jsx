import FormField from "../Form/FormField/FormField";
import SelectField from "../Form/SelectField/SelectField";

const EventFormPageOne = ({ formik }) => {
  const options = [
    { id: undefined, nome: undefined },
    { id: "online", nome: "online" },
    { id: "Presencial", nome: "Presencial" },
  ];

  return (
    <>
      <FormField
        id="titulo"
        type="text"
        label="Título"
        onChange={formik.handleChange}
        value={formik.values.titulo}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Título"
      />
      <FormField
        id="descricao"
        type="text"
        label="Descrição"
        onChange={formik.handleChange}
        value={formik.values.descricao}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Descrição"
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
      <SelectField
        options={options}
        label="Modalidade"
        id="modalidade"
        value={formik.values.modalidade}
        onChange={formik.handleChange}
        formik={formik}
      />
    </>
  );
};

export default EventFormPageOne;
