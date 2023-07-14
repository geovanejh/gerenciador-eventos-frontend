import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../../api";
import { Button } from "../../Button/Button";
import { ListItem } from "../../FlatList/ListItem";
import Loading from "../../Loading/Loading";
import { UpcomingContainer } from "./Upcoming.styled";
import { connect } from "react-redux";

const Upcoming = ({ auth }) => {
  const [loading, setLoading] = useState(true);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  const compraIngresso = (id) => {
    if (auth.isLogged === false) {
      navigate("/login");
    } else {
      navigate(`/purchase/${id}`);
    }
  };

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
      <UpcomingContainer layout="2fr 1.5fr 0.5fr 0.5fr 0.5fr">
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
              <h3>Valor</h3>
            </li>
            {eventos.map((e, index) => (
              <ListItem layout="2fr 1.5fr 0.5fr 0.5fr 0.5fr" key={index}>
                <div onClick={() => navigate(`/evento/${e.ID}`)}>
                  <p>{e.titulo}</p>
                </div>
                <div onClick={() => navigate(`/evento/${e.ID}`)}>
                  <p>{e.local}</p>
                </div>
                <div onClick={() => navigate(`/evento/${e.ID}`)}>
                  <p>{e.horario_inicio.slice(0, 5)}</p>
                </div>
                <div onClick={() => navigate(`/evento/${e.ID}`)}>
                  <p>R${e.valor_ingresso}</p>
                </div>
                <div>
                  <Button primary onClick={() => compraIngresso(e.ID)}>
                    Comprar
                  </Button>
                </div>
              </ListItem>
            ))}
          </ul>
        )}
      </UpcomingContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(Upcoming);
