// import React, { useState } from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getListAirlines,
//   getDetailListAirlines,
// } from "../../actions/airlinesAction";
// import {
//   editListSchedule,
// } from "../../actions/scheduleAction";
// import { useParams, useNavigate } from "react-router-dom";
// import swal from "sweetalert";
// import listClass from "../../list-class";

// function EditMaskapai() {
//   const [data, setData] = useState({});
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { id } = useParams();

//   const {
//     getListAirlinesResult,
//   } = useSelector((state) => state.AirlinesReducer);

//   // const [flight_Date, setFlightDate] = useState("");
//   // const [Departure_Hour, setDepatureHour] = useState("");
//   // const [Arrival_Hour, setArrivalHour] = useState("");
//   // const [Price, setPrice] = useState();
//   // const [Plane_class, setTipeClass] = useState("");
//   // const [Airline_Name, setAirlineName] = useState("");
//   // const [selectedAirport, setSelectedAirport] = useState("");
//   // const [selectedAirportCity, setSelectedAirportCity] = useState('')
//   // const [selectedAirportDes, setSelectedAirportDes] = useState('')
//   // const [selectedAirportDesCity, setSelectedAirportDesCity] = useState('')

//   // useEffect(() => {
//   //   console.log("dispatching getListAirlines action with id:", id);
//   //   dispatch(getDetailListAirlines(id));
//   // }, [dispatch, id]);

//   useEffect(() => {
//     dispatch(getListAirlines());
//   }, [dispatch]);

//   const handleChange = (e) => {
//     setData({
//       ...data,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // let options;
//   // if (Array.isArray(getListAirlinesResult)) {
//   //   options = getListAirlinesResult.map((airline) => ({
//   //     value: airline.Airport_Name,
//   //     label: airline.Airport_Name,
//   //   }));
//   // } else {
//   //   options = [];
//   // }

//   // const handleChange = (e) => {
//   //   const selectedOption = e.target.value;
//   //   const selectedOptionCity = e.target.value;
//   //   setSelectedAirport(selectedOption);
//   //   setSelectedAirportCity(selectedOptionCity);
//   // };

//   // const handleChangeDes = (e) => {
//   //   const selectedOptionDes = e.target.value;
//   //   const selectedOptionDesCity = e.target.value;
//   //   setSelectedAirportDes(selectedOptionDes);
//   //   setSelectedAirportDesCity(selectedOptionDesCity);
//   // }

// //   const selectedCode =
// //   getListAirlinesResult &&
// //   getListAirlinesResult.find((item) => item.Airport_Name === selectedAirport)
// //     ?.Airport_Code;

// // const selectedCodeCity =
// //   getListAirlinesResult &&
// //   getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportCity)
// //     ?.City;

// // const selectedCodeDes =
// //   getListAirlinesResult &&
// //   getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportDes)
// //     ?.Airport_Code;

// // const selectedCodeDesCity =
// //   getListAirlinesResult &&
// //   getListAirlinesResult.find((item) => item.Airport_Name === selectedAirportDesCity)
// //     ?.City;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // const payload = {
//     //   origin_code: selectedCode,
//     //   origin_name: selectedAirport,
//     //   origin_city: selectedCodeCity,
//     //   destination_code: selectedCodeDes,
//     //   destination_name: selectedAirportDes,
//     //   destination_city: selectedCodeDesCity,
//     //   plane_class: Plane_class,
//     //   flight_date: flight_Date,
//     //   airline_name: Airline_Name,
//     //   departure_hour: Departure_Hour,
//     //   arrival_hour: Arrival_Hour,
//     //   price: Price,
//     // };
    
//     // dispatch(editListSchedule(id, payload));

//     swal({
//       title: "Are you sure want edit?",
//       text: "File will be updated",
//       icon: "info",
//       buttons: true,
//       dangerMode: true,
//     }).then((willDelete) => {
//       if (willDelete) {
//         dispatch(editListSchedule(id, data));
//         swal("Poof! Data has been updated", {
//           icon: "success",
//         });
//         navigate("/dashboard");
//       } else {
//         swal("Data is safe");
//       }
//     });
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Edit Jadwal Penerbangan</h3>
//       {/* <form onSubmit={handleSubmit}>
//           <div className="form-group mt-3">
//             <label htmlFor="Origin_Airport">Bandara Asal</label>
//             <select
//               name="Origin_Airport"
//               className="form-select"
//               onChange={handleChange}
//               value={selectedAirport}
//             >
//               <option hidden>Pilih Bandara Asal</option>
//               {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}

//             </select>
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Origin_Airport">Bandara Asal Code</label>
//             <input
//               type="text"
//               className="form-control"
//               id="Airline_Code"
//               name="Airline_Code"
//               value={selectedCode || ''}
//               readOnly

//             />
//           </div>
//           <div className="form-group mt-3">
//           <label htmlFor="City">Bandara Asal Kota</label>
//             <input
//               type="text"
//               className="form-control"
//               id="City"
//               name="City"
//               value={selectedCodeCity || ''}
//               readOnly
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Destination_Airport">Bandara Tujuan</label>
//             <select
//               name="Destination_Airport"
//               className="form-select"
//               onChange={handleChangeDes}
//               value={selectedAirportDes}
//               // onChange={(e) => setDestinationAirport(e.target.value)}
//             >
//               <option hidden>Pilih Bandara Tujuan</option>
//               {options.map((option) => (
//                 <option key={option.value} value={option.value}>
//                   {option.label}
//                 </option>
//               ))}
              
//             </select>
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Origin_Airport">Bandara Tujuan Code</label>
//             <input
//               type="text"
//               className="form-control"
//               id="Airline_Code"
//               name="Airline_Code"
//               value={selectedCodeDes || ''}
//               readOnly
//               // onChange={(e) => setOriginCode(e.target.value)}
//               // {getListAirlinesResult &&
//               // getListAirlinesResult.map((airline) => {
//               //   return (
//               //     value={airline.Airport_Code[airline.Airline_Name]}
//               //   )
//               // })}
//             />
//           </div>
//           <div className="form-group mt-3">
//           <label htmlFor="City">Bandara Tujuan Kota</label>
//             <input
//               type="text"
//               className="form-control"
//               id="City"
//               name="City"
//               value={selectedCodeDesCity || ''}
//               readOnly
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Airline_Name">Nama Pesawat</label>
//             <input
//               type="text"
//               className="form-control"
//               id="Airline_Name"
//               name="Airline_Name"
//               onChange={(e) => setAirlineName(e.target.value)}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="flight_Date">Tanggal</label>
//             <input
//               type="date"
//               className="form-control"
//               id="flight_Date"
//               name="flight_Date"
//               onChange={(e) => setFlightDate(e.target.value)}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Depature_Hour">Jam Berangkat</label>
//             <input
//               type="time"
//               className="form-control"
//               id="Departure_Hour"
//               name="Departure_Hour"
//               onChange={(e) => setDepatureHour(e.target.value)}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Arrival_Hour">Jam Sampai</label>
//             <input
//               type="time"
//               className="form-control"
//               id="Arrival_Hour"
//               name="Arrival_Hour"
//               onChange={(e) => setArrivalHour(e.target.value)}
//             />
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Plane_class">Tipe Class</label>
//             <select
//               name="Plane_class"
//               className="form-select"
//               onChange={(e) => setTipeClass(e.target.value)}
//             >
//               <option hidden>Pilih Tipe Class</option>
//               {listClass.map((list) => (
//                 <option key={list.id} value={list.class}>
//                   {list.class}
//                 </option>
//               ))}
//             </select>
//           </div>
//           <div className="form-group mt-3">
//             <label htmlFor="Price">Price</label>
//             <input
//               type="number"
//               className="form-control"
//               id="Price"
//               name="Price"
//               onChange={(e) => setPrice(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="btn btn-primary mt-3">
//             Edit
//           </button>
//       </form> */}

//       <form onSubmit={handleSubmit}>
//         <div className="form-group mt-3">
//           <label htmlFor="Origin_Airport">Bandara Asal</label>
//           <select
//             name="origin_name"
//             className="form-select"
//             onChange={handleChange}
//             defaultValue={data.origin_name}
//           >
//             <option hidden>Pilih Bandara Asal</option>
//             {getListAirlinesResult &&
//               getListAirlinesResult.map((airline) => {
//                 return (
//                   <option key={airline.id} value={airline.origin_name}>
//                     {airline.origin_name}
//                   </option>
//                 );
//               })}
//           </select>
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="Destination_Airport">Bandara Tujuan</label>
//           <select
//             name="destination_name"
//             className="form-select"
//             onChange={handleChange}
//             defaultValue={data.destination_name}
//           >
//             <option hidden>Pilih Bandara Tujuan</option>
//             {getListAirlinesResult &&
//               getListAirlinesResult.map((airline) => {
//                 return (
//                   <option key={airline.id} value={airline.Airport_Name}>
//                     {airline.Airport_Name}
//                   </option>
//                 );
//               })}
//           </select>
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="Airline_Name">Nama Pesawat</label>
//           <input
//             type="text"
//             className="form-control"
//             id="airline_name"
//             name="airline_name"
//             onChange={handleChange}
//             defaultValue={data.airline_name}
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="flight_Date">Tanggal</label>
//           <input
//             type="date"
//             className="form-control"
//             id="flight_date"
//             name="flight_date"
//             onChange={handleChange}
//             defaultValue={data.flight_date}
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="depature_hour">Jam Berangkat</label>
//           <input
//             type="time"
//             className="form-control"
//             id="departure_hour"
//             name="depature_hour"
//             onChange={handleChange}
//             defaultValue={data.depature_hour}
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="arrival_hour">Jam Sampai</label>
//           <input
//             type="time"
//             className="form-control"
//             id="arrival_hour"
//             name="arrival_hour"
//             onChange={handleChange}
//             defaultValue={data.arrival_hour}
//           />
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="Plane_class">Tipe Class</label>
//           <select
//             name="plane_class"
//             className="form-select"
//             onChange={handleChange}
//             defaultValue={data.plane_class}
//           >
//             <option hidden>Pilih Tipe Class</option>
//             {listClass.map((list) => (
//               <option key={list.id} value={list.class}>
//                 {list.class}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="form-group mt-3">
//           <label htmlFor="Price">Price</label>
//           <input
//             type="number"
//             className="form-control"
//             id="price"
//             name="price"
//             onChange={handleChange}
//             defaultValue={data.price}
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mt-3">
//           Edit
//         </button>
//       </form>
//     </div>
//   );
// }

// export default EditMaskapai;

import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListAirlines,
  getDetailListAirlines,
} from "../../actions/airlinesAction";
import {
  editListSchedule,
} from "../../actions/scheduleAction";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import listClass from "../../list-class";

function EditMaskapai() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const {
    getListAirlinesResult,
  } = useSelector((state) => state.AirlinesReducer);

  // useEffect(() => {
  //   console.log("dispatching getListAirlines action with id:", id);
  //   dispatch(getDetailListAirlines(id));
  // }, [dispatch, id]);

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    swal({
      title: "Are you sure want edit?",
      text: "File will be updated",
      icon: "info",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        dispatch(editListSchedule(id, data));
        swal("Poof! Data has been updated", {
          icon: "success",
        });
        navigate("/dashboard/penerbangan");
      } else {
        swal("Data is safe");
      }
    });
  };

  return (
    <div className="container mt-5">
      <h3>Edit Jadwal Penerbangan</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label htmlFor="origin_name">Bandara Asal</label>
          <select
            name="origin_name"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.origin_name}
          >
            <option hidden>Pilih Bandara Asal</option>
            {getListAirlinesResult &&
              getListAirlinesResult.map((airline) => {
                return (
                  <option key={airline.id} value={airline.Airport_Name}>
                    {airline.Airport_Name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="destination_name">Bandara Tujuan</label>
          <select
            name="destination_name"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.destination_name}
          >
            <option hidden>Pilih Bandara Tujuan</option>
            {getListAirlinesResult &&
              getListAirlinesResult.map((airline) => {
                return (
                  <option key={airline.id} value={airline.Airport_Name}>
                    {airline.Airport_Name}
                  </option>
                );
              })}
          </select>
        </div>
        <div className="form-group mt-3">
          <label htmlFor="airline_name">Nama Pesawat</label>
          <input
            type="text"
            className="form-control"
            id="airline_name"
            name="airline_name"
            onChange={handleChange}
            defaultValue={data.airline_name}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="flight_date">Tanggal</label>
          <input
            type="date"
            className="form-control"
            id="flight_date"
            name="flight_date"
            onChange={handleChange}
            defaultValue={data.flight_date}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="departure_hour">Jam Berangkat</label>
          <input
            type="time"
            className="form-control"
            id="departure_hour"
            name="departure_hour"
            onChange={handleChange}
            defaultValue={data.departure_hour}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="arrival_hour">Jam Sampai</label>
          <input
            type="time"
            className="form-control"
            id="arrival_hour"
            name="arrival_hour"
            onChange={handleChange}
            defaultValue={data.arrival_hour}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="Plane_class">Tipe Class</label>
          <select
            name="plane_class"
            className="form-select"
            onChange={handleChange}
            defaultValue={data.plane_class}
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
          <label htmlFor="Price">price</label>
          <input
            type="number"
            className="form-control"
            id="price"
            name="price"
            onChange={handleChange}
            defaultValue={data.price}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditMaskapai;
