import { Button } from "../Button/Button";
import { AdvanceContainer } from "../Purchase/PaymentStage/PaymentStage.styled";
import { DashboardForm } from "./EventForm.styled";
import EventFormPageOne from "./EventFormPageOne";
import EventFormPageThree from "./EventFormPageThree";
import EventFormPageTwo from "./EventFormPageTwo";

const EventForm = ({ formik, id, page, setPage }) => {
  return (
    <DashboardForm>
      {page === 1 && <EventFormPageOne formik={formik} />}
      {page === 2 && <EventFormPageTwo formik={formik} />}
      {page === 3 && <EventFormPageThree formik={formik} />}
      <AdvanceContainer>
        {page !== 1 ? (
          <a
            primary
            onClick={(e) => {
              e.preventDefault();
              setPage(page - 1);
            }}
          >
            Voltar
          </a>
        ) : (
          <div></div>
        )}
        {page !== 3 && (
          <Button
            primary
            onClick={(e) => {
              e.preventDefault();
              setPage(page + 1);
            }}
          >
            Avançar
          </Button>
        )}
      </AdvanceContainer>
      {page === 3 && (
        <Button
          primary
          text="Login"
          onClick={(e) => {
            e.preventDefault();
            formik.submitForm();
          }}
        >
          Confirmar
        </Button>
      )}
    </DashboardForm>
  );
};

export default EventForm;
