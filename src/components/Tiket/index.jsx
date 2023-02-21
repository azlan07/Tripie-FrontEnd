import React, { useEffect } from "react";
import { whoAmI } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getIsiDetail } from "../../actions/formAction";
import logo from "../../assets/images/Logo.png";
import { ImBarcode } from "react-icons/im";

function Tiket() {
  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const { getIsiDetailResult, getIsiDetailLoading, getIsiDetailError } =
    useSelector((state) => state.Airlines);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIsiDetail());
  }, [dispatch]);
  
  const location = useLocation()
  const price = location.state?.price

  console.log(price);

  const filteredBooking = Array.isArray(getIsiDetailResult)
    ? getIsiDetailResult.filter(
        (booking) => booking.user_id === whoAmIResult.id &&
                        booking.price === price
      )
    : [];

  console.log(filteredBooking);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <div className="card-header">
            <div className="row">
              <div className="col-md-8">
                <img
                  src={logo}
                  alt="Airline logo"
                  className="card-img-top img-fluid"
                  style={{ maxWidth: "100px" }}
                />
                <h5 className="card-title mt-3">Tripie Airline</h5>
              </div>
              <div className="col-md-4">
                <span>
                  <ImBarcode
                    className="float-end"
                    style={{ fontSize: "100px" }}
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                <h6 className="card-subtitle mb-2 text-muted">
                  Flight Details
                </h6>
                <div className="wrapper-form d-flex">
                  <div className="data">
                    <p>Origin &nbsp; </p>
                    <p>Destination &nbsp;</p>
                    <p>Departure Time &nbsp;</p>
                    <p>Arrival Time &nbsp;</p>
                  </div>
                  {getIsiDetailResult ? (
                  filteredBooking.length > 0 ? (
                    filteredBooking.map((booking) => {
                      return (
                        <div className="value" key={booking.id}>
                        <p>: {booking.origin_name}</p>
                        <p>: {booking.destination_name}</p>
                        <p>: {booking.departure_hour.slice(0, 5)}</p>
                        <p>: {booking.arrival_hour.slice(0, 5)}</p>
                      </div>
                      );
                    })
                  ) : (
                    <h1 className="text-center">Data Kosong</h1>
                  )
                ) : getIsiDetailLoading ? (
                  <h1>Loading</h1>
                ) : (
                  <h1>
                    {getIsiDetailError ? getIsiDetailError : "Data Kosong"}
                  </h1>
                )}
                </div>
              </div>
              <div className="col">
                <h6 className="card-subtitle mb-2 text-muted">
                  Passenger Information
                </h6>
                <table className="table">
                {getIsiDetailResult ? (
                  filteredBooking.length > 0 ? (
                    filteredBooking.map((booking) => {
                      return (
                        <tbody key={booking.id}>
                        <tr>
                          <th scope="row">Name</th>
                          <td>: {booking.passenger_name}</td>
                        </tr>
                        <tr>
                          <th scope="row">No HP</th>
                          <td>: {booking.phone_number}</td>
                        </tr>
                        <tr>
                          <th scope="row">Class</th>
                          <td>: {booking.plane_class}</td>
                        </tr>
                        <tr>
                          <th scope="row">Tanggal</th>
                          <td>: {booking.flight_date.slice(0, 10)}</td>
                        </tr>
                      </tbody>
                      );
                    })
                  ) : (
                    <h1 className="text-center">Data Kosong</h1>
                  )
                ) : getIsiDetailLoading ? (
                  <h1>Loading</h1>
                ) : (
                  <h1>
                    {getIsiDetailError ? getIsiDetailError : "Data Kosong"}
                  </h1>
                )}
                </table>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button className="float-end btn btn-dark" onClick={handlePrint}>
              Print
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tiket;
