import { Button } from "../Button/Button";
import FormField from "../Form/FormField/FormField";

const SelectScreen = ({ formik, event, setStage }) => {
  return (
    <div>
      <FormField
        id="qtd_ingressos"
        type="number"
        label="Quantidade de ingressos: "
        onChange={formik.handleChange}
        value={formik.values.qtd_ingressos}
        onBlur={formik.handleBlur}
        formik={formik}
        placeholder="1"
      />
      <p>
        <b>TOTAL:</b> R$
        {event?.valor_ingresso * formik?.values.qtd_ingressos}
      </p>
      <Button
        primary
        onClick={(e) => {
          e.preventDefault();
          setStage(2);
        }}
      >
        Confirmar compra
      </Button>
    </div>
  );
};

export default SelectScreen;
