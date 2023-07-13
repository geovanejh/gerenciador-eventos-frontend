import { useFormik } from "formik";
import { AuthForm } from "../components/AuthPages/LoginForm";
import FormField from "../components/Form/FormField/FormField";
import { Button } from "../components/Button/Button";
import { api } from "../api";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();

  const formataData = (values) => {
    const newValues = {
      cardholder: {
        firstname: values.firstname,
        lastname: values.lastname,
        identification_type: values.identification_type,
        identification_number: values.identification_number,
        email: values.email,
        billing_address: {
          street_name: values.street_name,
          street_number: values.street_number,
          zip_code: values.zip_code,
          city: values.city,
          state: values.state,
          country: values.country,
        },
      },
      card_number: values.card_number,
      expiration_month: values.expiration_month,
      expiration_year: values.expiration_year,
      security_code: values.security_code,
      installments: 1,
      title: values.title,
      description: values.description,
      payment_method_id: values.payment_method_id,
      quantity_ing: 3,
      event_id: 7,
      user_id: 2,
    };
    console.log(newValues);
    return newValues;
  };

  const handlePayment = async (values) => {
    try {
      const data = await api.post(`/api/ingressos`, values);
      console.log(data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
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
      quantity_ing: "1",
      event_id: 1,
      user_id: 1,
    },
    onSubmit: (values) => {
      handlePayment(formataData(values));
    },
  });

  return (
    <>
      <AuthForm onSubmit={formik.handleSubmit}>
        <button onClick={() => navigate(-1)}>voltar</button>
        <h1>Endereço</h1>
        <FormField
          id="rua"
          type="text"
          label="Rua"
          onChange={formik.handleChange}
          value={formik.values.rua}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Rua"
        />
        <FormField
          id="numero"
          type="text"
          label="Número"
          onChange={formik.handleChange}
          value={formik.values.numero}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="Número"
        />
        <FormField
          id="zip_code"
          type="text"
          label="zip_code"
          onChange={formik.handleChange}
          value={formik.values.zip_code}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="zip_code"
        />
        <FormField
          id="city"
          type="text"
          label="city"
          onChange={formik.handleChange}
          value={formik.values.city}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="city"
        />
        <FormField
          id="state"
          type="text"
          label="state"
          onChange={formik.handleChange}
          value={formik.values.state}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="state"
        />
        <FormField
          id="country"
          type="text"
          label="country"
          onChange={formik.handleChange}
          value={formik.values.country}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="country"
        />
        <h1>Identificação</h1>
        <FormField
          id="firstname"
          type="text"
          label="firstname"
          onChange={formik.handleChange}
          value={formik.values.firstname}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="firstname"
        />
        <FormField
          id="lastname"
          type="text"
          label="lastname"
          onChange={formik.handleChange}
          value={formik.values.lastname}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="lastname"
        />
        <FormField
          id="identification_number"
          type="text"
          label="identification_number"
          onChange={formik.handleChange}
          value={formik.values.identification_number}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="identification_number"
        />
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
        <h1>Cartão</h1>
        <FormField
          id="card_number"
          type="text"
          label="card_number"
          onChange={formik.handleChange}
          value={formik.values.card_number}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="card_number"
          autocomplete="cc-number"
        />
        <FormField
          id="expiration_month"
          type="text"
          label="expiration_month"
          onChange={formik.handleChange}
          value={formik.values.expiration_month}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="expiration_month"
        />
        <FormField
          id="expiration_year"
          type="text"
          label="expiration_year"
          onChange={formik.handleChange}
          value={formik.values.expiration_year}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="expiration_year"
          autocomplete="cc-exp"
        />
        <FormField
          id="security_code"
          type="text"
          label="security_code"
          onChange={formik.handleChange}
          value={formik.values.security_code}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="security_code"
          autocomplete="cc-csc"
        />
        <FormField
          id="installments"
          type="text"
          label="installments"
          onChange={formik.handleChange}
          value={formik.values.installments}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="installments"
        />
        <FormField
          id="payment_method_id"
          type="text"
          label="payment_method_id"
          onChange={formik.handleChange}
          value={formik.values.payment_method_id}
          onBlur={formik.handleBlur}
          formik={formik}
          placeholder="payment_method_id"
        />
        <Button primary type="submit" text="Login">
          TEST
        </Button>
      </AuthForm>
    </>
  );
};

export default Payment;
