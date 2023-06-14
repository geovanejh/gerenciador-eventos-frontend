import { useEffect } from "react";
import { connect } from "react-redux";
import { Routes, Route, Navigate } from "react-router-dom";
import { isAuth } from "./store/actions/AuthAction";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";
import Loading from "./components/Loading/Loading";
import Dashboard from "./pages/Dashboard";
import TicketsPage from "./pages/TicketsPage";
import EventsPage from "./pages/EventsPage";
import NewEvent from "./pages/NewEvent";
import Event from "./pages/Event";
import Register from "./pages/Register";
import Purchase from "./pages/Purchase";
import Payment from "./pages/Payment";

const Router = ({ dispatch, auth, loading }) => {
  useEffect(() => {
    isAuth(dispatch);
  }, []);
  console.log("isLoading: ", loading);

  return loading === true ? (
    <Loading />
  ) : (
    <div>
      <Routes>
        <Route path="/evento/:id" element={<Event />} />
        <Route path="/" element={<LandingPage />} />
        {auth.isLogged === true ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/purchase" element={<Purchase />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/events/create" element={<NewEvent />} />
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.AuthReducer,
  loading: state.UtilsReducer.loading,
});

export default connect(mapStateToProps)(Router);
