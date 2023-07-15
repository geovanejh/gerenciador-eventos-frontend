import FormField from "../Form/FormField/FormField";

const RegisterPageTwo = ({ formik }) => {
  return (
    <>
      <FormField
        id="nome"
        type="text"
        label="nome"
        onChange={formik.handleChange}
        value={formik.values.nome}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="nome"
      />
      <FormField
        id="sobrenome"
        type="text"
        label="sobrenome"
        onChange={formik.handleChange}
        value={formik.values.sobrenome}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="sobrenome"
      />
      <FormField
        id="cpf"
        type="text"
        label="cpf"
        onChange={formik.handleChange}
        value={formik.values.cpf}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="cpf"
      />
      <FormField
        id="rg"
        type="text"
        label="rg"
        onChange={formik.handleChange}
        value={formik.values.rg}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="rg"
      />
      <FormField
        id="phone"
        type="text"
        label="phone"
        onChange={formik.handleChange}
        value={formik.values.phone}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="phone"
      />
    </>
  );
};

export default RegisterPageTwo;
