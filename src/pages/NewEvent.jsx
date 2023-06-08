import { useFormik } from "formik";
import { AuthForm } from "../components/AuthPages/LoginForm";
import FormField from "../components/Form/FormField/FormField";
import { Button } from "../components/Button/Button";
import { api } from "../api";

const NewEvent = () => {
  const handleCreate = async (person) => {
    try {
      await api.post(`/eventos`, person);
    } catch (error) {
      alert("deu ruim");
    }
  };

  const formik = useFormik({
    initialValues: {
      titulo: "",
      descricao: "",
      categoria: "",
      modalidade: "",
      valor_ingresso: "",
      numero_ingressos: "",
      quantidade_ingressos: "",
      data: "",
      local: "",
      horario_inicio: "",
      horario_fim: "",
      organizador: "",
    },
    onSubmit: (values) => {
      handleCreate(values);
    },
  });

  return (
    <>
      <AuthForm onSubmit={formik.handleSubmit}>
        <FormField
          id="Titulo"
          type="text"
          label="Titulo"
          onChange={formik.handleChange}
          value={formik.values.titulo}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Titulo"
        />
        <FormField
          id="descricao"
          type="password"
          label="descricao"
          onChange={formik.handleChange}
          value={formik.values.descricao}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="descricao"
        />
        <FormField
          id="categoria"
          type="password"
          label="categoria"
          onChange={formik.handleChange}
          value={formik.values.categoria}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="categoria"
        />
        <FormField
          id="modalidade"
          type="password"
          label="modalidade"
          onChange={formik.handleChange}
          value={formik.values.modalidade}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="modalidade"
        />
        <FormField
          id="valor_ingresso"
          type="password"
          label="valor_ingresso"
          onChange={formik.handleChange}
          value={formik.values.valor_ingresso}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="valor_ingresso"
        />
        <FormField
          id="numero_ingressos"
          type="password"
          label="numero_ingressos"
          onChange={formik.handleChange}
          value={formik.values.numero_ingressos}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="numero_ingressos"
        />
        <FormField
          id="quantidade_ingressos"
          type="password"
          label="quantidade_ingressos"
          onChange={formik.handleChange}
          value={formik.values.quantidade_ingressos}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="quantidade_ingressos"
        />
        <FormField
          id="data"
          type="password"
          label="data"
          onChange={formik.handleChange}
          value={formik.values.data}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="data"
        />
        <FormField
          id="local"
          type="password"
          label="local"
          onChange={formik.handleChange}
          value={formik.values.local}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="local"
        />
        <FormField
          id="horario_inicio"
          type="password"
          label="horario_inicio"
          onChange={formik.handleChange}
          value={formik.values.horario_inicio}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="horario_inicio"
        />
        <FormField
          id="horario_fim"
          type="password"
          label="horario_fim"
          onChange={formik.handleChange}
          value={formik.values.horario_fim}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="horario_fim"
        />
        <FormField
          id="organizador"
          type="password"
          label="organizador"
          onChange={formik.handleChange}
          value={formik.values.organizador}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="organizador"
        />
        <Button primary type="submit" text="Login">
          SUBMIT
        </Button>
      </AuthForm>
    </>
  );
};

export default NewEvent;
