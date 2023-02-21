import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  LandingPage,
  PilihPenerbangan,
  IsiDetail,
  About,
  Experience,
  ProfileSaya,
  EditProfile,
  PesananSaya,
  Sukses,
  DashboardAdmin,
  Register,
  Destinations,
  Login,
  Protected,
  DashboardDetail,
  AddMaskapai,
  EditMaskapai,
  DaftarPesanan,
  Wishlist,
  DashboardPenerbangan,
  Tiket,
  ProtectedAdmin,
  Unauthorized,
} from "./components";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const reduxDevToolsExtension = false;

const composeEnhancers = composeWithDevTools({});

const store = createStore(
  reducers,
  compose(
    applyMiddleware(thunk),
    reduxDevToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route
            path="/pilih-penerbangan"
            element={
              <Protected>
                <PilihPenerbangan />
              </Protected>
            }
          />
          <Route
            path="/isi-detail"
            element={
              <Protected>
                <IsiDetail />
              </Protected>
            }
          />
        </Routes>
        <Routes>
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
        <Routes>
          <Route path="/experience" element={<Experience />} />
        </Routes>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
        <Routes>
          <Route path="/sukses" element={
            <Protected>
              <Sukses />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route exact path="/dashboard" element={
            <ProtectedAdmin>
              <DashboardAdmin />
            </ProtectedAdmin>
          } />
          <Route
            exact
            path="/dashboard/penerbangan"
            element={
              <ProtectedAdmin>
                <DashboardPenerbangan />
              </ProtectedAdmin>
          }
          />
          <Route
            exact
            path="/dashboard/penerbangan/detail/:id"
            element={
              <ProtectedAdmin>
                <DashboardDetail />
              </ProtectedAdmin>
          }
          />
          <Route
            exact
            path="/dashboard/penerbangan/edit/:id"
            element={
              <ProtectedAdmin>
                <EditMaskapai />
              </ProtectedAdmin>
          }
          />
          <Route
            path="/dashboard/penerbangan/create"
            element={
              <ProtectedAdmin>
                <AddMaskapai />
              </ProtectedAdmin>
          }
          />
          <Route path="/dashboard/daftar-pesanan" element={
            <ProtectedAdmin>
              <DaftarPesanan />
            </ProtectedAdmin>
          } />
        </Routes>
        <Routes>
          <Route exact path="/profile" element={
            <Protected>
              <ProfileSaya />
            </Protected>
          } />
          <Route exact path="/edit-profile/:id" element={
            <Protected>
              <EditProfile />
            </Protected>
          } />
          <Route exact path="/pesanan-saya" element={
            <Protected>
              <PesananSaya />
            </Protected>
          } />
          <Route exact path="/pesanan-saya/tiket" element={
            <Protected>
              <Tiket />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/wishlist" element={
            <Protected>
              <Wishlist />
            </Protected>
          } />
        </Routes>
        <Routes>
          <Route path="/unauthorized" element={<Unauthorized />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
