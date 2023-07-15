import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { ListPage } from "../ListPages/ListPage";
import { ListPageContainer } from "../ListPages/ListPageContainer";
import ListPageHeader from "../ListPages/ListPageHeader/ListPageHeader";
import Loading from "../Loading/Loading";

const EventDetails = ({ id }) => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/eventos/${id}`);
      setEvent(data);
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <ListPage>
      <ListPageHeader
        title="< Meus eventos"
        user="Geovane Hartmann"
        onClick={() => navigate(-1)}
      />
      <ListPageContainer layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
        <div>
          <h2>{event?.titulo}</h2>
        </div>
        <p>{event?.descricao}</p>
        <p>
          Ingressos vendidos: {event?.quantidade_inscritos}/
          {event?.numero_ingressos + event?.quantidade_inscritos}
        </p>
        <p>Local: {event?.local}</p>
        <p>
          Horário: {event?.horario_inicio} - {event?.horario_fim}
        </p>
        <p>Valor do ingresso: R${event?.valor_ingresso}</p>
      </ListPageContainer>
    </ListPage>
  );
};

export default EventDetails;
