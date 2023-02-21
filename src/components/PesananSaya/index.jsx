import React, { useEffect, useState } from "react";
import { whoAmI, editListUsers } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import { getIsiDetail } from "../../actions/formAction";
import NavProfile from "../ProfileSaya/NavProfile";

function Pesanan() {
  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const { getIsiDetailResult, getIsiDetailLoading, getIsiDetailError } =
    useSelector((state) => state.Airlines);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [value, setValue] = useState(null);

  const handleClick = (price) => {
    setValue(price);
  };

  useEffect(() => {
    // console.log("dispatching who login action with id: ", whoAmIResult.id);
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getIsiDetail());
  }, [getIsiDetail]);

  useEffect(() => {
    if (value) {
      navigate("/pesanan-saya/tiket", { state: { price: value } });
    }
  }, [value, navigate]);

  const filteredBooking = Array.isArray(getIsiDetailResult)
    ? getIsiDetailResult.filter(
        (booking) => booking.user_id === whoAmIResult.id
      )
    : [];

  // console.log(filteredBooking);

  return (
    <div className="dashboard-pg text-grey-blue">
      {/* Navbar */}
      <NavProfile />
      {/* Navbar */}

      <div className="navigation-overlay position-fixed"></div>

      <div className="dashboard-main">
        <div className="container">
          <div className="row my-5">
            <h3 className="fs-4 mb-3">Daftar Pesanan</h3>
            <div className="col" style={{ width: "100%", overflowX: "auto" }}>
              <table className="table bg-white rounded shadow-sm  table-hover">
                <thead>
                  <tr>
                    <th scope="col" width="50">
                      No
                    </th>
                    <th scope="col">Dari</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Tipe</th>
                    <th scope="col">Tiket</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">E-Ticket</th>
                  </tr>
                </thead>

                {getIsiDetailResult ? (
                  filteredBooking.length > 0 ? (
                    filteredBooking.map((booking, index) => {
                      return (
                        <tbody key={booking.id}>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{booking.origin_name}</td>
                            <td>{booking.destination_name}</td>
                            <td>{booking.flight_type}</td>
                            <td>{booking.total_passenger}</td>
                            <td>{booking.flight_date.slice(0, 10)}</td>
                            <td>
                              {/* <Link to='/pesanan-saya/tiket'> */}
                              <button
                                className="btn btn-dark"
                                onClick={() => handleClick(booking.price)}
                              >
                                View
                              </button>
                              {/* </Link> */}
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <tbody>
                      <tr>
                        <td colSpan="7">
                          <p className="text-center">Tidak Pernah Pesan</p>
                        </td>
                      </tr>
                    </tbody>
                  )
                ) : getIsiDetailLoading ? (
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <h1 className="text-center">Loading</h1>
                      </td>
                    </tr>
                  </tbody>
                ) : (
                  <tbody>
                    <tr>
                      <td colSpan="7">
                        <h1>
                          {getIsiDetailError
                            ? getIsiDetailError
                            : "Data Kosong"}
                        </h1>
                      </td>
                    </tr>
                  </tbody>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pesanan;
