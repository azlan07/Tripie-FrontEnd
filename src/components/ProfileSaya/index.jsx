import { React, useState, useEffect } from "react";
import { whoAmI } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import NavProfile from "./NavProfile";
import "../../assets/css/main.css";
import "../../assets/js/script.js";

function Profile() {
  const { id } = useParams();

  const { whoAmIResult } = useSelector((state) => state.UsersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("dispatching getListAirlines action with id: ", whoAmIResult.id);
    dispatch(whoAmI());
  }, [dispatch]);

  useEffect(() => {
    if (whoAmIResult.Role) {
      localStorage.setItem("role", whoAmIResult.Role);
    }
  }, [whoAmIResult]);

  return (
    <div className="dashboard-pg text-grey-blue">
      {/* Navbar */}
      <NavProfile />
      {/* Navbar */}

      <div className="navigation-overlay position-fixed"></div>
      <div className="dashboard-main">
        <div className="container">
          <div className="row my-2">
            <h3 className="fs-4 mb-3">Profile Saya</h3>
            <div className="col">
              <img
                src={whoAmIResult.Foto}
                alt="Foto User"
                className="rounded-circle"
                style={{ maxWidth: "200px" }}
              />
              <form style={{ width: "400px" }}>
                <div className="mt-3 mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    disabled
                    placeholder={whoAmIResult.Email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="namalengkap"
                    disabled
                    placeholder={whoAmIResult.Name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Alamat
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="alamat"
                    disabled
                    placeholder={whoAmIResult.Address}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    No Telepon
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="nohp"
                    disabled
                    placeholder={whoAmIResult.Phone_Number}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    disabled
                    id="password"
                    placeholder="*********"
                  />
                </div>
                <Link to={`/edit-profile/${whoAmIResult.id}`}>
                  <div className="mb-3">
                    <button
                      type="submit"
                      className="btn btn-dark"
                      style={{ width: "400px" }}
                    >
                      Edit Profile
                    </button>
                  </div>
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
