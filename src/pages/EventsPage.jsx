import { useNavigate } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import { DashboardContainer } from "../components/Dashboard/Dashboard.styled";
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

const EventsPage = ({ auth }) => {
  const [loading, setLoading] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [events, setEvents] = useState([]);
  const [inactiveEvents, setInactiveEvents] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const { data } = await api.get(`/api/eventos/owner/${auth.user_id}`);
    console.log(data);
    setEvents(data);
  };

  const setup = async () => {
    getData();
  };

  useEffect(() => {
    setup();
  }, []);

  return (
    <>
      <Aside />
      {loading && <Loading />}
      <DashboardContainer>
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
        <button onClick={() => console.log(inactiveEvents)}>
          lista inativos
        </button>
      </DashboardContainer>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(EventsPage);
