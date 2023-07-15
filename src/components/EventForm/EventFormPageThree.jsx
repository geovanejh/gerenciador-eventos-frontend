import { Button } from "../Button/Button";
import FormField from "../Form/FormField/FormField";

const EventFormPageThree = ({ formik }) => {
  return (
    <>
      <FormField
        id="data"
        type="text"
        label="data"
        onChange={formik.handleChange}
        value={formik.values.data}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="data"
      />
      <FormField
        id="local"
        type="text"
        label="local"
        onChange={formik.handleChange}
        value={formik.values.local}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="local"
      />
      <FormField
        id="horario_inicio"
        type="text"
        label="horario_inicio"
        onChange={formik.handleChange}
        value={formik.values.horario_inicio}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="horario_inicio"
      />
      <FormField
        id="horario_fim"
        type="text"
        label="horario_fim"
        onChange={formik.handleChange}
        value={formik.values.horario_fim}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="horario_fim"
      />
    </>
  );
};

export default EventFormPageThree;
