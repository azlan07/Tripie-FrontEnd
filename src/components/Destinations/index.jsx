import React, { useEffect, useState } from "react";
import Navbar from "../LandingPage/navbar";
import Footer from "../LandingPage/footer";
import Background from "../../assets/images/background.png";
import "./Destinations.css";
import { getListAirlines } from "../../actions/airlinesAction";
import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Destinations() {
  const {
    getListAirlinesResult,
    getListAirlinesLoading,
    getListAirlinesError,
  } = useSelector((state) => state.AirlinesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);
  
  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const [colors, setColors] = useState({});

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
    // console.log(existingData);
  };

  return (
    <>
      <Navbar />
      <div className="atas">
        <img src={Background} alt="" className="background-image" />
        <div className="card overlaying-card shadow-lg">
          <h3 className="text-center p-3">DESTINATIONS</h3>
          <p className="text-center rounded-3 p-3 ">
            Travel the world with Tripie from bustling metropolitans to tranquil
            highlands, Tripie can take you to over a hundred of cities
            throughout the world. Discover our top destinations here, and be
            inspired.
          </p>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <Link to='/wishlist' target="_blank">
            <button className="btn btn-dark px-5">
              Wishlist
            </button>
          </Link>
        </div>
        <div className="row mt-4">
        {getListAirlinesResult ? (
            getListAirlinesResult.map((airline) => {
              return (
                <div className="col-md-4" key={airline.id}>
                  <div className="card mb-3">
                    <img
                      src={airline.Foto}
                      className="card-img-top"
                      alt={airline.Foto}
                      style={{ maxWidth: '450px', maxHeight: '200px' }}
                    />
                    <div className="card-body">
                      <p>{airline.Airport_Name} ({airline.Airport_Code})</p>
                      <p className="text-secondary">{airline.City}</p>
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
      <Footer />
    </>
  );
}

export default Destinations;
