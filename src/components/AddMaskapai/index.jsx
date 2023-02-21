import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addListAirlines } from "../../actions/airlinesAction";
import listClass from "../../list-class";
import { getListAirlines } from "../../actions/airlinesAction";
import { addListSchedule } from "../../actions/scheduleAction";
import swal from "sweetalert";

function AddMaskapai() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("use effect component did mount (airlines)");

    dispatch(getListAirlines());
  }, [dispatch]);

  const [Origin_Airport, setOriginAirport] = useState("");
  const [Origin_Code, setOriginCode] = useState("");
  const [Destination_Airport, setDestinationAirport] = useState("");
  const [flight_Date, setFlightDate] = useState("");
  const [Departure_Hour, setDepatureHour] = useState("");
  const [Arrival_Hour, setArrivalHour] = useState("");
  const [Price, setPrice] = useState();
  const [Plane_class, setTipeClass] = useState("");
  const [Airline_Name, setAirlineName] = useState("");
  const [selectedAirport, setSelectedAirport] = useState("");
  const [selectedAirportCity, setSelectedAirportCity] = useState('')
  const [selectedAirportDes, setSelectedAirportDes] = useState('')
  const [selectedAirportDesCity, setSelectedAirportDesCity] = useState('')

  let options;
  if (Array.isArray(getListAirlinesResult)) {
    options = getListAirlinesResult.map((airline) => ({
      value: airline.Airport_Name,
      label: airline.Airport_Name,
    }));
  } else {
    options = [];
  }

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    const selectedOptionCity = e.target.value;
    setSelectedAirport(selectedOption);
    setSelectedAirportCity(selectedOptionCity);
  };

  const handleChangeDes = (e) => {
    const selectedOptionDes = e.target.value;
    const selectedOptionDesCity = e.target.value;
    setSelectedAirportDes(selectedOptionDes);
    setSelectedAirportDesCity(selectedOptionDesCity);
  }

  const selectedCode =
    getListAirlinesResult &&
    getListAirlinesResult.find((item) => item.Airport_Name === selectedAirport)
      ?.Airport_Code;

  const selectedCodeCity =
    getListAirlinesResult &&
    getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportCity)
      ?.City;

  const selectedCodeDes =
    getListAirlinesResult &&
    getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportDes)
      ?.Airport_Code;

  const selectedCodeDesCity =
    getListAirlinesResult &&
    getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportDesCity)
      ?.City;

  // console.log('Kode asal ' , selectedCode);
  // console.log('Kota asal' , selectedCodeCity)
  // console.log('Kode tujuan' , selectedCodeDes)
  // console.log('Kota tujuan' , selectedCodeDesCity)
  // console.log('bandara asal', selectedAirport);
  // console.log('bandara tujuan', selectedAirportDes);

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = {
      origin_code: selectedCode,
      origin_name: selectedAirport,
      origin_city: selectedCodeCity,
      destination_code: selectedCodeDes,
      destination_name: selectedAirportDes,
      destination_city: selectedCodeDesCity,
      plane_class: Plane_class,
      flight_date: flight_Date,
      airline_name: Airline_Name,
      departure_hour: Departure_Hour,
      arrival_hour: Arrival_Hour,
      price: Price,
    };

    dispatch(addListSchedule(payload));

    swal("SUCCESS", "Jadwal penerbangan berhasil ditambahkan", "success");

    console.log(payload)

    navigate("/dashboard/penerbangan");
  };

  return (
    <div>
      <div className="container mt-5">
        <h3>Tambah Jadwal Penerbangan</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <label htmlFor="Origin_Airport">Bandara Asal</label>
            <select
              name="Origin_Airport"
              className="form-select"
              onChange={handleChange}
              value={selectedAirport}
            >
              <option hidden>Pilih Bandara Asal</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              {/* {getListAirlinesResult &&
                getListAirlinesResult.map((airline) => {
                  return (
                    <option key={airline.id} value={airline.Airport_Code}>
                      {airline.Airport_Name}
                    </option>
                  );
                })} */}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Origin_Airport">Bandara Asal Code</label>
            <input
              type="text"
              className="form-control"
              id="Airline_Code"
              name="Airline_Code"
              value={selectedCode || ''}
              readOnly
              // onChange={(e) => setOriginCode(e.target.value)}
              // {getListAirlinesResult &&
              // getListAirlinesResult.map((airline) => {
              //   return (
              //     value={airline.Airport_Code[airline.Airline_Name]}
              //   )
              // })}
            />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="City">Bandara Asal Kota</label>
            <input
              type="text"
              className="form-control"
              id="City"
              name="City"
              value={selectedCodeCity || ''}
              readOnly
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Destination_Airport">Bandara Tujuan</label>
            <select
              name="Destination_Airport"
              className="form-select"
              onChange={handleChangeDes}
              value={selectedAirportDes}
              // onChange={(e) => setDestinationAirport(e.target.value)}
            >
              <option hidden>Pilih Bandara Tujuan</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
              {/* <option hidden>Pilih Bandara Asal</option>
              {getListAirlinesResult &&
                getListAirlinesResult.map((airline) => {
                  return (
                    <option key={airline.id} value={airline.Airport_Name}>
                      {airline.Airport_Name}
                    </option>
                  );
                })} */}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Origin_Airport">Bandara Tujuan Code</label>
            <input
              type="text"
              className="form-control"
              id="Airline_Code"
              name="Airline_Code"
              value={selectedCodeDes || ''}
              readOnly
              // onChange={(e) => setOriginCode(e.target.value)}
              // {getListAirlinesResult &&
              // getListAirlinesResult.map((airline) => {
              //   return (
              //     value={airline.Airport_Code[airline.Airline_Name]}
              //   )
              // })}
            />
          </div>
          <div className="form-group mt-3">
          <label htmlFor="City">Bandara Tujuan Kota</label>
            <input
              type="text"
              className="form-control"
              id="City"
              name="City"
              value={selectedCodeDesCity || ''}
              readOnly
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Airline_Name">Nama Pesawat</label>
            <input
              type="text"
              className="form-control"
              id="Airline_Name"
              name="Airline_Name"
              onChange={(e) => setAirlineName(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="flight_Date">Tanggal</label>
            <input
              type="date"
              className="form-control"
              id="flight_Date"
              name="flight_Date"
              onChange={(e) => setFlightDate(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Depature_Hour">Jam Berangkat</label>
            <input
              type="time"
              className="form-control"
              id="Departure_Hour"
              name="Departure_Hour"
              onChange={(e) => setDepatureHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Arrival_Hour">Jam Sampai</label>
            <input
              type="time"
              className="form-control"
              id="Arrival_Hour"
              name="Arrival_Hour"
              onChange={(e) => setArrivalHour(e.target.value)}
            />
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Plane_class">Tipe Class</label>
            <select
              name="Plane_class"
              className="form-select"
              onChange={(e) => setTipeClass(e.target.value)}
            >
              <option hidden>Pilih Tipe Class</option>
              {listClass.map((list) => (
                <option key={list.id} value={list.class}>
                  {list.class}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="Price">Price</label>
            <input
              type="number"
              className="form-control"
              id="Price"
              name="Price"
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMaskapai;
