import { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { api } from "../../api";
import { Button } from "../Button/Button";
import { ListPage } from "../ListPages/ListPage";
import { PageHeader } from "../ListPages/ListPageHeader/ListPageHeader.styled";
import Loading from "../Loading/Loading";
import { Ticket, TicketContainer } from "./TicketDetails.styled";

const TicketDetails = ({ id, auth }) => {
  const [event, setEvent] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const setup = async () => {
    setLoading(true);
    try {
      const { data } = await api.get(`/api/ingressos/${id}`);
      console.log(data);
      setEvent(data);
    } catch (error) {}
    setLoading(false);
  };

  useEffect(() => {
    setup();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <ListPage>
        <PageHeader>
          <Button primary onClick={() => navigate(-1)}>
            Voltar
          </Button>
          <div>
            <p>USUÁRIO</p>
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
              alt=""
            />
          </div>
        </PageHeader>
        <TicketContainer>
          <Ticket>
            <div>
              <div>
                <h1>
                  {event?.evento.titulo} - {event?.evento.descricao}
                </h1>
              </div>
              <div>
                <b>Identificador:</b> {event?.id}
              </div>
              <div>
                <b>Valor:</b> R${event?.valor}
              </div>
              <div>
                <b>Tipo de evento:</b> {event?.evento.modalidade}
              </div>
            </div>
            <div></div>
            <div>
              {event?.evento.modalidade !== "online" ? (
                <QRCode
                  value={`localhost/api/ingressos/check/${id}?event_id=${event?.event_id}&user_id=${auth.user_id}`}
                ></QRCode>
              ) : (
                <div>
                  <p>
                    <b>URL de acesso: </b>
                    <a href={event.join_url}>Clique para juntar-se ao evento</a>
                  </p>
                </div>
              )}
            </div>
          </Ticket>
        </TicketContainer>
      </ListPage>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
});

export default connect(mapStateToProps)(TicketDetails);
