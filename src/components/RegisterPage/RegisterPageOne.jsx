import FormField from "../Form/FormField/FormField";

const RegisterPageOne = ({ formik }) => {
  return (
    <>
      <FormField
        id="email"
        type="text"
        label="email"
        onChange={formik.handleChange}
        value={formik.values.email}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="email"
      />
      <FormField
        id="password"
        type="password"
        label="Senha"
        onChange={formik.handleChange}
        value={formik.values.password}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Senha"
      />
      <FormField
        id="repetir"
        type="password"
        label="Repetir senha"
        onChange={formik.handleChange}
        value={formik.values.repetirSenha}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="Repetir senha"
      />
    </>
  );
};

export default RegisterPageOne;
