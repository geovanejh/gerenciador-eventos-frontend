import { useEffect, useState } from "react";
import { api } from "../../api";
import { Ticket, TicketContainer } from "./TicketDetails.styled";
import Loading from "../Loading/Loading";
import { connect } from "react-redux";
import QRCode from "react-qr-code";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";
import { ListPage } from "../ListPages/ListPage";
import ListPageHeader from "../ListPages/ListPageHeader/ListPageHeader";
import { PageHeader } from "../ListPages/ListPageHeader/ListPageHeader.styled";

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
                <h1>{event.evento.titulo}- Uma baita festa!</h1>
              </div>
              <div>
                <b>Identificador:</b> {event.ID}
              </div>
              <div>
                <b>Preço:</b> R${event.valor}
              </div>
              <div>
                <b>Tipo de evento:</b> Presencial
              </div>
            </div>
            <div></div>
            <div>
              <QRCode value="hey"></QRCode>
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
