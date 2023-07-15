import { useFormik } from "formik";
import { api } from "../api";
import { FormContainer } from "../components/Form/FormContainer";
import EventForm from "../components/EventForm/EventForm";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { toast } from "react-hot-toast";

const NewEvent = ({ auth }) => {
  const { id } = useParams();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const handleCreate = async (values) => {
    const dados = {
      ...values,
      valor_ingresso: parseInt(values.valor_ingresso),
      numero_ingressos: parseInt(values.numero_ingressos),
      organizador: auth.user_id,
    };

    try {
      const { data } = await api.post(`/api/eventos`, dados);
      toast.success("Evento criado com sucesso!");
      navigate("/dashboard/events");
    } catch (error) {
      toast.error("Um erro aconteceu, verifique os campos e tente novamente!");
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
