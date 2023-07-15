import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api";
import { Button } from "../Button/Button";
import Loading from "../Loading/Loading";
import { PurchaseContainer } from "./Purchase.styled";
import SelectScreen from "./SelectScreen";
import PaymentScreen from "./PaymentScreen";
import { toast } from "react-hot-toast";

const Purchase = ({ auth }) => {
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(10);
  const navigate = useNavigate();
  const [event, setEvent] = useState();
  const { id } = useParams();
  const [stage, setStage] = useState(1);

  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/eventos/${id}`);
      setEvent(data);
    } catch (error) {
      alert("erro na req de evento");
    }
    setLoading(false);
  };

  const handlePayment = async (values) => {
    try {
      const { data } = await api.post(`/api/ingressos`, values);
      toast.success("Compra realizada com sucesso!");
      navigate("/dashboard/tickets");
    } catch (error) {
      toast.error("Um erro aconteceu, verifique seus dados e tente novamente!");
    }
  };

  const formataData = (values) => {
    const newValues = {
      cardholder: {
        firstname: values.firstname,
        lastname: values.lastname,
        identification_type: values.identification_type,
        identification_number: values.identification_number,
        email: values.email,
        billing_address: {
          street_name: values.rua,
          street_number: values.numero,
          zip_code: values.zip_code,
          city: values.city,
          state: values.state,
          country: values.country,
        },
      },
      card_number: values.card_number.replaceAll(" ", ""),
      expiration_month: values.expiration_month.slice(0, 2),
      expiration_year: values.expiration_month.slice(3, 7),
      security_code: values.security_code,
      installments: 1,
      title: values.title,
      description: values.description,
      payment_method_id: "master",
      quantity_ing: values.qtd_ingressos,
      event_id: parseInt(id),
      user_id: auth.user_id,
    };
    console.log("newValues: ", newValues);
    console.log("formik: ", formik.values);
    return newValues;
  };

  const formik = useFormik({
    initialValues: {
      street_name: "",
      street_number: "",
      zip_code: "",
      city: "",
      state: "",
      country: "",
      firstname: "",
      lastname: "",
      identification_type: "CPF",
      identification_number: "",
      email: "",
      card_number: "",
      expiration_month: "",
      expiration_year: "",
      security_code: "",
      installments: "",
      title: "Ingresso",
      description: "Simulação master.",
      payment_method_id: "",
      event_id: 1,
      user_id: 1,
      qtd_ingressos: 0,
    },
    onSubmit: (values) => {
      handlePayment(formataData(values));
    },
  });

  return loading ? (
    <Loading />
  ) : (
    <PurchaseContainer>
      <Button primary onClick={() => navigate(-1)}>
        Cancelar
      </Button>
      <div>
        <div>
          <h1>{event?.titulo}</h1>
          <h2>{event?.descricao}</h2>
          {event?.modalide == "Presencial" && <h2>{event?.local}</h2>}
        </div>
        {stage === 1 && (
          <SelectScreen
            formik={formik}
            event={event}
            setStage={setStage}
            stage={stage}
          />
        )}
        {stage === 2 && (
          <PaymentScreen formik={formik} event={event} setStage={setStage} />
        )}
      </div>
    </PurchaseContainer>
  );
};

const mapStateToProps = (state) => ({
  purchase: state.PurchaseReducer,
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Purchase);
