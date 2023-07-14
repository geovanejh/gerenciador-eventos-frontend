import { Button } from "../../Button/Button";

const EventPage = ({ event, compraIngresso }) => {
  return (
    <>
      <h1>
        {event?.titulo} - {event?.descricao}
      </h1>
      <p>
        Horario: {event?.horario_inicio} - {event?.horario_fim}
      </p>
      <p> Local: {event?.local}</p>
      <p>Valor do ingresso: R${event?.valor_ingresso}</p>
      <Button primary onClick={() => compraIngresso()}>
        COMPRAR
      </Button>
    </>
  );
};

export default EventPage;
