import { useFormik } from "formik";
import { api } from "../api";
import { FormContainer } from "../components/Form/FormContainer";
import EventForm from "../components/EventForm/EventForm";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";

const NewEvent = ({ auth }) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);

  const handleCreate = async (values) => {
    const dados = {
      ...values,
      valor_ingresso: parseInt(values.valor_ingresso),
      numero_ingressos: parseInt(values.numero_ingressos),
      organizador: auth.user_id,
    };

    try {
      const { data } = await api.post(`/api/eventos`, dados);
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
    <FormContainer>
      <EventForm formik={formik} id={id} page={page} setPage={setPage} />
    </FormContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(NewEvent);
