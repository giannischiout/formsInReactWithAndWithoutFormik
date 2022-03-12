import React from "react";

import PropTypes from "prop-types";

export const Reservation = ({
  // response,
  handleSubmit,
  values,
  cinema,
  handleChange,
  movies,
  auditorium,
  screenings,
  seats,
}) => {
  return (
    <div className="container m-2">
      <h4 className="text-decoration-underline">Reservation Form</h4>
      <form className="inline-form" onSubmit={handleSubmit}>
        <div>
          <label
            className="w-25 d-inline-block form-label mt-4"
            htmlFor="cinema"
          >
            Cinema:
          </label>
          <select
            name="cinema"
            className="form-select d-inline-block mx-auto h-25 w-25"
            id="cinema"
            aria-label=""
            onChange={handleChange}
          >
            <option value="">Choose...</option>
            {cinema.map((cin) => (
              <option key={cin.id} value={cin.address}>
                {cin.address}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="w-25 d-inline-block form-label mt-4"
            htmlFor="movie"
          >
            Movie:
          </label>
          <select
            name="movie"
            className="form-select d-inline-block mx-auto h-25 w-25"
            id="movie"
            aria-label=""
            onChange={handleChange}
            disabled={!values.cinema}
          >
            <option value="">Choose...</option>
            {movies.map((movie) => (
              <option key={movie.id} value={movie.title}>
                {movie.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            className="w-25 d-inline-block form-label mt-4"
            htmlFor="auditorium"
          >
            Auditorium:
          </label>
          <select
            name = "auditorium"
            className="form-select d-inline-block mx-auto h-25 w-25"
            id="auditorium"
            aria-label=""
            onChange={handleChange}
            disabled={!values.movie}
          >
            <option value="">Choose...</option>
            {auditorium.map((auditorium) => (
              <option key={auditorium.id} value={auditorium.id}>
                {auditorium.id}
              </option>
            ))}
            
          </select>
        </div>
        {/* Screening */}
        <div>
          <label
            className="w-25 d-inline-block form-label mt-4"
            htmlFor="screenings"
          >
            Screening:
          </label>
          <select
            name = "screenings"
            className="form-select d-inline-block mx-auto h-25 w-25"
            id="screening"
            aria-label=""
            onChange={handleChange}
            disabled={!values.auditorium}
          >
            <option value="">Choose...</option>
            {screenings.map((screenings) => (
              <option key={screenings.movie_starts} value={screenings.movie_starts}>
                {screenings.id}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="w-25 d-inline-block form-label mt-4" htmlFor="seat">
            Seat:
          </label>
          <select
            name = "seat"
            className="form-select d-inline-block mx-auto h-25 w-25"
            id="seat"
            aria-label=""
            onChange={handleChange}
            disabled={!values.screenings}
          >
            <option value="">Choose...</option>
            {seats.map((seats) => (
              <option key={seats.id} value={seats.row_letter+seats.seat_num}>
                {seats.row_letter}{seats.seat_num}
              </option>
            ))}
          </select>
          
          
        </div>

        <div className="border-bottom">
          <span className="w-25 d-inline-block form-label mt-4">Price:</span>
          {/*  put price prop here  */}
          <p className="border-0 d-inline-block mx-auto h-25 w-25">{`0.00 €`}</p>
        </div>
        <div>
          <button
            className="btn btn-primary btn-outline-dark mt-4 me-1"
            type="submit"
          >
            Submit
          </button>
          <button
            className="btn btn-warning btn-outline-dark mt-4 ms-1"
            type="reset"
          >
            Reset
          </button>
        </div>
      </form>
      {/*{response && (*/}
      {/*  <div>*/}
      {/*    <pre>{JSON.stringify(response, null, 2)}</pre>*/}
      {/*  </div>*/}
      {/*)}*/}
    </div>
  );
};

Reservation.propTypes = {
  // response: PropTypes.object,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  values: PropTypes.object,
  cinema: PropTypes.array,
  movies: PropTypes.array,
  auditorium: PropTypes.array,
  screenings: PropTypes.array,
  seats: PropTypes.array
  // price: PropTypes.number,
  
  // screening: PropTypes.array,
  // seats: PropTypes.array,
};
