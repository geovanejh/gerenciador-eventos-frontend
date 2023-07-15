import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { ListPage } from "../ListPages/ListPage";
import { ListPageContainer } from "../ListPages/ListPageContainer";
import ListPageHeader from "../ListPages/ListPageHeader/ListPageHeader";
import Loading from "../Loading/Loading";
import { EventDetailContainer, ListaIngressos } from "./EventDetails.styled";

const EventDetails = ({ id }) => {
  const [event, setEvent] = useState();
  const [ingressos, setIngressos] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  console.log("event: ", event);

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/api/eventos/${id}`);
      setEvent(data);
      const { data: ings } = await api.get(`/api/eventos/${id}/ingressos`);
      setIngressos(ings);
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
        title="Meus eventos"
        user="Geovane Hartmann"
        onClick={() => navigate(-1)}
      />
      <ListPageContainer>
        <EventDetailContainer>
          <div>
            <h1>{event?.titulo}</h1>
          </div>
          <h2>{event?.descricao}</h2>
          <p>
            <b>Ingressos vendidos:</b> {event?.quantidade_inscritos}/
            {event?.numero_ingressos + event?.quantidade_inscritos}
          </p>
          <p>
            <b>Local:</b> {event?.local}
          </p>
          <p>
            <b>Horário:</b> {event?.horario_inicio} - {event?.horario_fim}
          </p>
          <p>
            <b>Valor do ingresso:</b> R${event?.valor_ingresso}
          </p>
          <p>
            <b>Lucro parcial bruto:</b> R${ingressos?.lucro}
          </p>
          {event?.modalidade === "online" && (
            <>
              <b>Link do organizador: </b> {event?.join_url}
            </>
          )}
          <ListaIngressos>
            <h2>Ingressos vendidos:</h2>
            <div>
              <p>
                <b>Nome</b>
              </p>
              <p>
                <b>E-mail</b>
              </p>
              <p>
                <b>CPF</b>
              </p>
            </div>
            {ingressos.ingressos === null ? (
              <h3>Nenhum ingresso encontrado.</h3>
            ) : (
              <>
                {ingressos?.ingressos.map((e, i) => (
                  <div>
                    <p>
                      {e.user.nome} {e.user.sobrenome}
                    </p>
                    <p>{e.user.email}</p>
                    <p>{e.user.cpf}</p>
                  </div>
                ))}
              </>
            )}
          </ListaIngressos>
        </EventDetailContainer>
      </ListPageContainer>
    </ListPage>
  );
};

export default EventDetails;
