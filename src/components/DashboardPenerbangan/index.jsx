import Navbar from "../../admin/NavbarAdmin";
import React, { useEffect } from "react";
import {
  getListAirlines,
  deleteListAirlines,
} from "../../actions/airlinesAction";
import {
  getListSchedule,
  deleteListSchedule,
} from "../../actions/scheduleAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import swal from "sweetalert";

function Maskapai() {
  const { getListScheduleResult } = useSelector(
    (state) => state.ScheduleReducer
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListSchedule());
  }, [dispatch]);

  const handleClick = (id) => {
    swal({
      title: "Are you sure?",
      text: "File will be deleted permanent",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(deleteListSchedule(id));
        swal("Poof! Data has been deleted", {
          icon: "success",
        });
      } else {
        swal("Data is safe");
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="container mt-5 maskapai">
        <div className="row">
          <div className="col-6">
            <h3 className="fs-4 mb-3">Penerbangan</h3>
          </div>
          <div className="col-6">
            <Link to="/dashboard/penerbangan/create">
              <button className="btn btn-primary float-end">
                Tambah Penerbangan
              </button>
            </Link>
          </div>
        </div>
        <div className="row my-2">
          <div className="col" style={{ width: "100%", overflowX: "auto" }}>
            <table className="table bg-white rounded shadow-sm  table-hover">
              <thead>
                <tr>
                  <th scope="col" width="50">
                    No
                  </th>
                  <th scope="col">Kode Asal</th>
                  <th scope="col">Bandara Asal</th>
                  <th scope="col">Kode Tujuan</th>
                  <th scope="col">Bandara Tujuan</th>
                  <th scope="col">Kelas</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Jam Berangkat</th>
                  <th scope="col">Jam Sampai</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {getListScheduleResult &&
                getListScheduleResult.map((schedule, index) => {
                  return (
                    <tbody key={schedule.id}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td>{schedule.origin_code}</td>
                        <td>{schedule.origin_name}</td>
                        <td>{schedule.destination_code}</td>
                        <td>{schedule.destination_name}</td>
                        <td>{schedule.plane_class}</td>
                        <td>{schedule.flight_date.slice(0, 10)}</td>
                        <td>{schedule.departure_hour.slice(0, 5)}</td>
                        <td>{schedule.arrival_hour.slice(0, 5)}</td>
                        <td>
                          Rp.
                          {schedule.price.toLocaleString().replaceAll(",", ".")}
                        </td>
                        <td>
                          <Link
                            to={{
                              pathname:
                                "/dashboard/penerbangan/edit/" + schedule.id,
                            }}
                          >
                            <button className="btn btn-primary">Edit</button>
                          </Link>
                          <button
                            className="btn btn-danger"
                            onClick={() => handleClick(schedule.id)}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  );
                })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Maskapai;
