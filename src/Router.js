import { useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { MainContent, RouterContainer } from "./Routers.styled";
import Aside from "./components/Aside/Aside";
import Loading from "./components/Loading/Loading";
import Dashboard from "./pages/Dashboard";
import Event from "./pages/Event";
import EventDetail from "./pages/EventDetail";
import EventsPage from "./pages/EventsPage";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import NewEvent from "./pages/NewEvent";
import Payment from "./pages/Payment";
import Register from "./pages/Register";
import TicketDetail from "./pages/TicketDetail";
import TicketsPage from "./pages/TicketsPage";
import { isAuth } from "./store/actions/AuthAction";
import PurchasePage from "./pages/PurchasePage";
import QrcodePage from "./pages/QrcodePage";

const Router = ({ dispatch, auth, loading }) => {
  const location = useLocation();

  useEffect(() => {
    isAuth(dispatch);
    console.log("location: ", location);
  }, []);

  return loading === true ? (
    <Loading />
  ) : (
    <RouterContainer>
      {location.pathname.includes("/dashboard") && <Aside />}
      <MainContent
        auth={auth.isLogged}
        pathname={location.pathname.includes("/dashboard")}
      >
        <Routes>
          <Route path="/evento/:id" element={<Event />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/QRCODE" element={<QrcodePage />} />
          {auth.isLogged === true ? (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/tickets" element={<TicketsPage />} />
              <Route path="/dashboard/tickets/:id" element={<TicketDetail />} />
              <Route path="/dashboard/events" element={<EventsPage />} />
              <Route path="/dashboard/events/:id" element={<EventDetail />} />
              <Route path="/purchase/:id" element={<PurchasePage />} />
              <Route path="/dashboard/events/create" element={<NewEvent />} />
              <Route path="*" element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="*" element={<Navigate to="/" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </>
          )}
        </Routes>
      </MainContent>
    </RouterContainer>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Router);
