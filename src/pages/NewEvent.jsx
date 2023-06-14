import { useFormik } from "formik";
import { AuthForm } from "../components/AuthPages/LoginForm";
import FormField from "../components/Form/FormField/FormField";
import { Button } from "../components/Button/Button";
import { api } from "../api";

const NewEvent = () => {
  const handleCreate = async (person) => {
    const obj = {
      titulo: "Festa de Aniversário",
      descricao: "Uma festa incrível para comemorar meu aniversário!",
      categoria: "Festa",
      modalidade: "Presencial",
      valor_ingresso: 50.0,
      numero_ingressos: 100,
      quantidade_inscritos: 50,
      data: "2023-06-10",
      local: "Minha casa",
      horario_inicio: "20:00:00",
      horario_fim: "02:00:00",
      organizador: 11,
    };

    try {
      await api.post(`/api/eventos`, obj);
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
        <FormField
          id="quantidade_ingressos"
          type="text"
          label="quantidade_ingressos"
          onChange={formik.handleChange}
          value={formik.values.quantidade_ingressos}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="quantidade_ingressos"
        />
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
        <FormField
          id="organizador"
          type="text"
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
