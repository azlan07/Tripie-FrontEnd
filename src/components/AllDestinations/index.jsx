import React, { useEffect, useState } from "react";
import NavBar from "../LandingPage/navbar";
import { useDispatch, useSelector } from "react-redux";
import { getListAirlines } from "../../actions/airlinesAction";
import { Link } from "react-router-dom";
import { FaHeart } from 'react-icons/fa';
import swal from "sweetalert";

function AllDestinations() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);
  const dispatch = useDispatch();

  const [colors, setColors] = useState({});

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const handleAddToWishlist = (airline) => {
    let existingData = localStorage.getItem("wishlist");
    if (existingData === null) {
      existingData = [];
    } else {
      existingData = JSON.parse(existingData);
    }
    const index = existingData.findIndex((item) => item.id === airline.id);
    if (index === -1) {
      existingData.push(airline);
      setColors({ ...colors, [airline.id]: 'red' });
    } else {
      existingData.splice(index, 1);
      setColors({ ...colors, [airline.id]: 'black' });
    }
    localStorage.setItem("wishlist", JSON.stringify(existingData));
    console.log(existingData);
  };

  return (
    <div className="container">
      <NavBar />
      <div className="container top">
        <h1 className="text-center mt-2 mb-5">All Destination</h1>
        <div className="row">
          {getListAirlinesResult ? (
            getListAirlinesResult.map((airline) => {
              return (
                <div className="col-md-4" key={airline.id}>
                  <div className="card mb-3">
                    <img
                      src="images/Destination.png"
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h4>{airline.originAirport}</h4>
                      <p>{airline.desc}</p>
                      <Link
                        to={"/detail-destination/" + airline.id}
                        className="btn btn-dark"
                        style={{ width: "250px", marginRight: "15px" }}
                      >
                        View Detail
                      </Link>
                        <FaHeart 
                        id="wishlist"
                        onClick={() => handleAddToWishlist(airline)}
                        style = {{ color: colors[airline.id], fontSize: '30px' }}  
                      />
                    </div>
                  </div>
                </div>
              );
            })
          ) : getListAirlinesLoading ? (
            <h1>Loading</h1>
          ) : (
            <h1>
              {getListAirlinesError ? getListAirlinesError : "Data Kosong"}
            </h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllDestinations;
