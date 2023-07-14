import { Button } from "../../Button/Button";
import { EventContainer } from "./EventPage.styled";

const EventPage = ({ event, compraIngresso }) => {
  return (
    <EventContainer>
      <h1>
        {event?.titulo} - {event?.descricao}
      </h1>
      <p>
        <b>Horario:</b> {event?.horario_inicio} - {event?.horario_fim}
      </p>
      <p>
        <b>Local:</b> {event?.local}
      </p>
      <p>
        <b>Valor do ingresso:</b> R${event?.valor_ingresso}
      </p>
      <p>
        <b>Categoria:</b> {event?.categoria}
      </p>
      <p>
        <b>Lotação:</b> {event?.quantidade_inscritos}/
        {event?.numero_ingressos + event?.quantidade_inscritos}
      </p>
      <Button primary onClick={() => compraIngresso()}>
        COMPRAR
      </Button>
    </EventContainer>
  );
};

export default EventPage;
