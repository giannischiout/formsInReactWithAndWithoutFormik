import React from "react";

import { useParams } from "react-router-dom";
import { useReservations } from "../customHooks/useReservations";
import { Reservation } from "../presentational/reservation";

const ReservationContainer = () => {
  let { username } = useParams();
  const {
    handleSubmit,
    cinema,
    movies,
    auditorium,
    screenings,
    seats,
    handleChange,
    response,
    values,
    //  price
    
    // seats,
  } = useReservations(username);

  const props = {
    handleSubmit,
    movies,
    cinema,
    auditorium,
    screenings,
    seats,
    handleChange,
    response,
    values,
    //  price
    
    // seats,
  };

  return <Reservation {...props} />;
};

export default ReservationContainer;
