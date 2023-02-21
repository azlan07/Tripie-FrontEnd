import React, { useEffect, useState } from "react";
import { Container, Form, Row, Col, FloatingLabel } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, connect, useDispatch } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import { postIsiDetail } from "../../actions/formAction";
import { getListSchedule } from "../../actions/scheduleAction";
import { whoAmI } from "../../actions/usersAction";
import NavBar from "../LandingPage/navbar";

function FormDetail() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const { getListScheduleResult } = useSelector(
    (state) => state.ScheduleReducer
  );

  const { whoAmIResult } = useSelector((state) => state.UsersReducer);
  // console.log(whoAmIResult)

  const formDetail = useSelector((state) => state.formReducer.formDetail);

  // console.log(getListScheduleResult[0].origin_code)

  const location = useLocation()
  const price = location.state?.price

  // console.log(price)

  // const currentPrice =
  //   getListAirlinesResult &&
  //   getListAirlinesResult
  //     .filter(
  //       (airline) =>
  //         airline.originAirport === formDetail.originAirport &&
  //         airline.destinationAirport === formDetail.destinationAirport &&
  //         airline.flightDate === formDetail.date_pergi
  //     )
  //     .map((airline) => {
  //       return airline.Price;
  //     });

  // const totalPrice = formDetail.tiket * currentPrice;

  const totalPrice = formDetail.tiket * price;
  // console.log(totalPrice);

  const [nama, setNama] = useState("");
  const [HP, setHP] = useState("");

  const filteredSchedule = Array.isArray(getListScheduleResult)
    ? getListScheduleResult.filter(
        (schedule) =>
          schedule.origin_name === formDetail.originAirport &&
          schedule.destination_name === formDetail.destinationAirport &&
          schedule.flight_date.slice(0, 10) === formDetail.date_pergi &&
          schedule.plane_class === formDetail.tipe_class &&
          schedule.price === price
      )
    : [];

  const getScheduleID = filteredSchedule.map((item) => item.id)
  const getScheduleDepar = filteredSchedule.map((item) => item.departure_hour)
  const getScheduleArriv = filteredSchedule.map((item) => item.arrival_hour)

  // console.log(filteredSchedule)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // console.log(typeof formDetail.tiket);

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getListSchedule());
  }, [dispatch]);

  // console.log(formDetail.originAirport);
  // console.log(formDetail.destinationAirport);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(formDetail.originAirport);

    const payload = {
        user_id: whoAmIResult.id,
        schedule_id: getScheduleID,
        origin_name: formDetail.originAirport,
        destination_name: formDetail.destinationAirport,
        plane_class: formDetail.tipe_class,
        total_passenger: formDetail.tiket,
        flight_type: formDetail.tipe,
        flight_date: formDetail.date_pergi,
        flight_back_date: formDetail.date_pulang,
        departure_hour: getScheduleDepar,
        arrival_hour: getScheduleArriv,
        price: totalPrice,
        passenger_name: nama,
        phone_number: HP,
    };

    dispatch(
      postIsiDetail(payload)
    );

    // console.log(payload);

    navigate("/sukses");
  };

  return (
    <div>

      <NavBar />
      <Container className="form-detail mt-3">
        <div className="text-form-detail">
          <h3>Informasi Kontak</h3>
        </div>
        <Row>
          <Col md={7}>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <FloatingLabel
                controlId="floatingInput"
                label="Nama Lengkap"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  value={nama}
                  onChange={(e) => setNama(e.target.value)}
                />
              </FloatingLabel>
              <Row>
                <Col md={12}>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="No Telepon"
                    className="mb-3"
                  >
                    <Form.Control
                      type="number"
                      value={HP}
                      onChange={(e) => setHP(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Lanjutkan
              </button>
            </Form>
          </Col>
          <Col md={5} className="pesanan-anda p-2">
            <div className="text-pesanan-anda text-center">
              <h5>Pesanan Anda</h5>
            </div>
            <hr className="m-0 mb-2" />
            <div className="wrapper-form d-flex">
              <div className="data">
                <p>Jumlah Tiket &nbsp;</p>
                <p>Total Harga</p>
                <p>Tanggal</p>
              </div>
              <div className="value">
                <p>: {formDetail.tiket}</p>
                <p>: {`${price * formDetail.tiket}`}</p>
                <p>: {formDetail.date_pergi}</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    formDetail: state.formReducer.formDetail.formData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormDetail);
