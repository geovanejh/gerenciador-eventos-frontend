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
      <button
        onClick={(e) => {
          e.preventDefault();
          if (page !== 3) {
            setPage(page + 1);
          }
        }}
      >
        +
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          if (page !== 1) {
            setPage(page - 1);
          }
        }}
      >
        -
      </button>
    </DashboardForm>
  );
};

export default EventForm;
