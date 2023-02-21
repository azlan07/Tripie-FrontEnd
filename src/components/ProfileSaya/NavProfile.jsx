import { React, useState, useEffect } from "react";
import { whoAmI, notification } from "../../actions/usersAction";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";
import Logo2 from "../../assets/images/Logo.png";

const NavProfile = () => {
  const [id, setId] = useState({});

  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  const { notificationResult, notificationError } = useSelector(
    (state) => state.UsersReducer
  );

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const roleAdmin = localStorage.getItem("role");

  useEffect(() => {
    if (whoAmIResult) {
      setId(whoAmIResult.id);
      dispatch(notification(id));
    }
  }, [whoAmIResult]);

  function handleClick() {
    window.location.reload();
  }

  function handleLogout(e) {
    setIsLoading(true);
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("wishlist");
    localStorage.removeItem("role");
    setIsLoggedIn(false);
    setIsLoading(false);

    navigate("/login");
  }

  return (
    <>
      <nav className="navigation-bar d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="navigation-bar-left col-6 d-flex align-items-center">
              <button
                type="button"
                className="navbar-open-btn text-grey-blue me-3"
              >
                <i className="fas fa-bars"></i>
              </button>
              <div className="navbar-logo">
                <Link to="/">
                  <img src={Logo2} alt="" />
                </Link>
              </div>
            </div>

            <div className="navigation-bar-right col-6 d-flex align-items-center justify-content-end">
              <div className="btn-group dropstart dropdown notification-btn text-grey-blue me-3">
                <a
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {notificationResult &&
                  notificationResult.some(
                    (notif) => notif.status === "unread"
                  ) ? (
                    <i className="fa-solid fa-bell"></i>
                  ) : (
                    <i className="fa-regular fa-bell"></i>
                  )}
                </a>
                <ul className="dropdown-menu" style={{ width: "400px" }}>
                  <li>
                    <h3 className="dropdown-item-text" id="disabledSelect">
                      Notification
                    </h3>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <div className="dropdown-item-text">
                      <table className="table bg-white rounded shadow-sm  table-hover">
                        {notificationResult &&
                          notificationResult.map((notif, index) => {
                            return (
                              <tbody key={notif.id}>
                                <tr
                                  onClick={handleClick}
                                  style={
                                    notif.status === "unread"
                                      ? {
                                          backgroundColor: "#b7b7b7",
                                          border: "none",
                                        }
                                      : {}
                                  }
                                >
                                  <th scope="row">{index + 1}</th>
                                  <td>{notif.message}</td>
                                  <td>
                                    {notif.status === "unread" ? (
                                      <i class="fa-solid fa-check"></i>
                                    ) : (
                                      <i className="fa-solid fa-check-double"></i>
                                    )}
                                  </td>
                                </tr>
                              </tbody>
                            );
                          })}
                      </table>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="btn-group dropdown-center profile-btn">
                <a
                  className="nav-link "
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="me-2">Halo, {whoAmIResult.Name}</i>
                  <i className="fas fa-user"></i>
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to={`/profile`} className="dropdown-item">
                      Profile
                    </Link>
                  </li>
                  {roleAdmin === "Admin" ? (
                    <li>
                      <Link to={`/dashboard`} className="dropdown-item">
                        Dashboard
                      </Link>
                    </li>
                  ) : null}
                  <li>
                    <Link to={`/pesanan-saya`} className="dropdown-item">
                      Pesanan Saya
                    </Link>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navigation-sidebar bg-light-grey">
        <div className="navbar-sb-head d-flex justify-content-between align-items-center px-4">
          <img src={Logo} />
          <button className="navbar-close-btn text-grey-blue">
            <i className="fas fa-arrow-left"></i>
          </button>
        </div>

        <div className="navbar-sb-list p-4">
          <div className="navbar-sb-item mb-5">
            <h5 className="text-uppercase text-grey navbar-sb-item-title fs-12 ls-1">
              from Tripie Team to Indonesia
            </h5>
            <ul className="navbar-sb-links p-0 list-unstyled">
              <li className="navbar-sb-link my-3">
                <Link
                  to={`/profile`}
                  className="text-decoration-none d-flex align-items-center justify-content-between"
                >
                  <div className="text-light-blue d-flex align-items-center">
                    <span className="navbar-sb-icon me-3">
                      <i className="fa-regular fa-circle-user"></i>
                    </span>
                    <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                      Profile Saya
                    </span>
                  </div>
                </Link>
              </li>
              <li className="navbar-sb-link my-3">
                <Link
                  to={`/pesanan-saya`}
                  className="text-decoration-none d-flex align-items-center justify-content-between"
                >
                  <div className="text-light-blue d-flex align-items-center">
                    <span className="navbar-sb-icon me-3">
                      <i className="fa-solid fa-cart-shopping"></i>
                    </span>
                    <span className="navbar-sb-text fs-14 fw-5 text-capitalize">
                      Pesanan Saya
                    </span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavProfile;
