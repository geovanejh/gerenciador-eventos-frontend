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
        {auth.isLogged === true ? (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tickets" element={<TicketsPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/create" element={<NewEvent />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<Navigate to="/" />} />
            <Route path="/login" element={<Login />} />
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
