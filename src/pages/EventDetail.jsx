import React from "react";
import { useParams } from "react-router-dom";
import EventDetails from "../components/EventDetails/EventDetails";

const EventDetail = () => {
  const { id } = useParams();

  return (
    <>
      <EventDetails id={id} />
    </>
  );
};

export default EventDetail;
