import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ListPage } from "../components/ListPages/ListPage";
import Loading from "../components/Loading/Loading";
import SearchField from "../components/Form/SearchField/SearchField";
import ListPageHeader from "../components/ListPages/ListPageHeader/ListPageHeader";
import { ListPageContainer } from "../components/ListPages/ListPageContainer";
import EventCard from "../components/EventListItem/EventCard/EventCard";
import { CardPageContainer } from "../components/EventListItem/EventCard/EventCard.styled";
import { api } from "../api";
import { connect } from "react-redux";
import { Button } from "../components/Button/Button";

const EventsPage = ({ auth }) => {
  const [loading, setLoading] = useState(true);
  const [searchField, setSearchField] = useState("");
  const [events, setEvents] = useState([]);
  const [inactiveEvents, setInactiveEvents] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/api/eventos/owner/${auth.user_id}`);
      setEvents(data);
    } catch (error) {}
    setLoading(false);
  };

  const setup = async () => {
    getData();
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <ListPage>
        <ListPageHeader title="Meus eventos" user="Geovane Hartmann" />
        <ListPageContainer layout="1.5fr 1.5fr 1fr 1fr 1fr 0.5fr">
          <div>
            <SearchField
              value={searchField}
              placeholder="Pesquisar"
              onChange={(e) => {
                setSearchField(e.target.value);
              }}
            />
            <Button
              primary
              onClick={() => navigate("/dashboard/events/create")}
            >
              Adicionar
            </Button>
          </div>
          {events.length < 1 ? (
            <div>Nenhum evento encontrado.</div>
          ) : (
            <CardPageContainer>
              {events.map((e, i) => (
                <EventCard key={i} event={e} />
              ))}
            </CardPageContainer>
          )}
        </ListPageContainer>
      </ListPage>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(EventsPage);
