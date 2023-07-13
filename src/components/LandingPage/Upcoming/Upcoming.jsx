import { useState } from "react";
import { UpcomingContainer } from "./Upcoming.styled";
import { api } from "../../../api";
import { useEffect } from "react";
import Loading from "../../Loading/Loading";
import { useNavigate } from "react-router-dom";

const Upcoming = () => {
  const [loading, setLoading] = useState(true);
  const [eventos, setEventos] = useState([]);
  const navigate = useNavigate();

  const setup = async () => {
    try {
      setLoading(true);
      const { data } = await api.get("/eventos", {
        headers: {
          "ngrok-skip-browser-warning": true,
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RlIiwidXNlcl9pZCI6NX0.Vqtd4yIHM_V0HezPu6t-aL9MZBZctjgVRaPHd5hWqN0",
        },
      });
      setEventos(data);
      console.log(data);
    } catch (error) {
      alert("deu ruim");
    }
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <UpcomingContainer>
      {loading && <Loading />}
      <h1>Próximos eventos</h1>
      {eventos.map((e) => (
        <div onClick={() => navigate(`/evento/${e.ID}`)}>
          <h4 key={e.id}>{e.titulo}</h4>
          <h5>{e.descricao}</h5>
          <hr />
        </div>
      ))}
    </UpcomingContainer>
  );
};

export default Upcoming;
