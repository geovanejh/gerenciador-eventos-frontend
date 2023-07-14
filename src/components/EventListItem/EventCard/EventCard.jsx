import React from "react";
import { EventCardContainer } from "./EventCard.styled";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  const navigate = useNavigate();

  return (
    <EventCardContainer
      onClick={() => navigate(`/dashboard/events/${event.ID}`)}
    >
      <img
        src="https://t3.ftcdn.net/jpg/02/87/35/70/360_F_287357045_Ib0oYOxhotdjOEHi0vkggpZTQCsz0r19.jpg"
        alt=""
        height="150px"
        width="100%"
      />
      <div>
        <h2>{event.titulo}</h2>
        <h3>{event.descricao}</h3>
        <h4>{event.local}</h4>
        <h4>{event.data}</h4>
      </div>
    </EventCardContainer>
  );
};

export default EventCard;
