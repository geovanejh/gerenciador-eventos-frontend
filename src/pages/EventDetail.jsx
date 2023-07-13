import React from "react";
import { ListPage } from "../components/ListPages/ListPage";
import { ListPageContainer } from "../components/ListPages/ListPageContainer";
import ListPageHeader from "../components/ListPages/ListPageHeader/ListPageHeader";
import { useEffect } from "react";
import { useState } from "react";
import { api } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading/Loading";
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
