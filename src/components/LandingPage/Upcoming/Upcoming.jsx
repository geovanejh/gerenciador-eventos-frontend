import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api";
import { ListItem } from "../../FlatList/ListItem";
import Loading from "../../Loading/Loading";
import { UpcomingContainer } from "./Upcoming.styled";

const Upcoming = () => {
  const [loading, setLoading] = useState(true);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/eventos", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlIiwidXNlcl9pZCI6NX0.Vqtd4yIHM_V0HezPu6t-aL9MZBZctjgVRaPHd5hWqN0",
        },
      });
      setEventos(data);
      console.log("data: ", data);
    } catch (error) {
      alert("deu ruim");
    }
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <UpcomingContainer layout="2fr 1.5fr 0.5fr 0.5fr">
        <div>
          <h2>Próximos eventos</h2>
        </div>

        {eventos.length < 1 ? (
          <div>Nenhum ingresso encontrado.</div>
        ) : (
          <ul>
            <li>
              <h3>Evento</h3>
              <h3>Local</h3>
              <h3>Hora</h3>
              <h3>Valor do ingresso</h3>
            </li>
            {eventos.map((e, index) => (
              <ListItem
                layout="2fr 1.5fr 0.5fr 0.5fr"
                key={index}
                onClick={() => navigate(`/evento/${e.ID}`)}
              >
                <div>
                  <p>{e.titulo}</p>
                </div>
                <div>
                  <p>{e.local}</p>
                </div>
                <div>
                  <p>{e.horario_inicio.slice(0, 5)}</p>
                </div>
                <div>
                  <p>R${e.valor_ingresso}</p>
                </div>
              </ListItem>
            ))}
          </ul>
        )}
      </UpcomingContainer>
    </>
  );
};

export default Upcoming;
