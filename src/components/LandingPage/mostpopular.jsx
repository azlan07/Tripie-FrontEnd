import React, { useState, useEffect } from "react";
// import '../App.css'
// import _ from 'lodash'
import MostPopularRes from "./mostpopularres";
import { AiFillStar, AiOutlineArrowRight } from "react-icons/ai";
import { getListAirlines } from "../../actions/airlinesAction";
import { useSelector, useDispatch } from "react-redux";

function MostPopular() {
  const {
    getListAirlinesResult,
  } = useSelector((state) => state.AirlinesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const [isHovering, setIsHovering] = useState(false);
  const [isHover, setIsHover] = useState(false);

  function handleHover() {
    setIsHover(true);
  }

  function handleHoverLeave() {
    setIsHover(false);
  }

  function handleMouseEnter() {
    setIsHovering(true);
  }

  function handleMouseLeave() {
    setIsHovering(false);
  }

  const filteredAirport = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.filter((airport) => airport.id === 1)
    : [];

  const displayBan = filteredAirport.map((airport, index) => {
    return (
      <div
        key={index}
        className={`most-popular-item ${
          isHover !== isHovering ? "col-3" : "col-6"
        }`}
        id="most-popular-item-active"
      >
        <img src={airport.Foto} alt={airport.Foto} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <AiFillStar
                      style={{ fontSize: "18px", marginBottom: "2px" }}
                    />
                    <span className="most-popular-card-total">(5.2K+)</span>
                  </p>
                  <h3 className="most-popular-card-title">{airport.Airport_Name}</h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.Airport_Code}, ${airport.City}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const filteredAirport2 = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.filter((airport) => airport.id === 2)
    : [];

  const displayBan1 = filteredAirport2.map((airport, index) => {
    return (
      <div
        key={index}
        className={`most-popular-item ${isHovering ? "col-6" : "col-3"}`}
        id="most-popular-item-active"
        onMouseEnter={(e) => handleMouseEnter(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <img src={airport.Foto} alt={airport.Foto} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <AiFillStar
                      style={{ fontSize: "18px", marginBottom: "2px" }}
                    />
                    <span className="most-popular-card-total">(5.2K+)</span>
                  </p>
                  <h3 className="most-popular-card-title">{airport.Airport_Name}</h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.Airport_Code}, ${airport.City}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  const filteredAirport3 = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.filter((airport) => airport.id === 3)
    : [];

  const displayBan2 = filteredAirport3.map((airport, index) => {
    return (
      <div
        key={index}
        className={`most-popular-item ${isHover ? "col-6" : "col-3"}`}
        id="most-popular-item-active"
        onMouseEnter={(e) => handleHover(e)}
        onMouseLeave={(e) => handleHoverLeave(e)}
      >
        <img src={airport.Foto} alt={airport.Foto} className="w-100 h-100" />
        <div className="most-popular-card">
          <div className="card">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div className="">
                  <p className="most-popular-card-star">
                    5.0
                    <AiFillStar
                      style={{ fontSize: "18px", marginBottom: "2px" }}
                    />
                    <span className="most-popular-card-total">(5.2K+)</span>
                  </p>
                  <h3 className="most-popular-card-title">{airport.Airport_Name}</h3>
                  <p className="most-popular-card-location d-flex">
                    {`${airport.Airport_Code}, ${airport.City}`}
                  </p>
                </div>
                <a href="/#" className="btn btn-cream rounded-4">
                  <AiOutlineArrowRight />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div id="most-popular" className="most-popular d-none d-sm-block">
        <div className="container mt-3">
          <div className="row align-items-center">
            <div className="col-4">
              <p className="text-title-blue">TOP 3 FEATURED AIRPORT</p>
              <h2 className="text-title-black">Most Popular Destinations</h2>
              <p className="text-title-gray">
                The best destination in our opinion is how much customers like
                it in terms of place, price, comfort and of course airport
                service
              </p>
              <a href="/destinations" className="btn btn-view">
                View All Destination
              </a>
            </div>
            <div className="col-8">
              <div className="row">
                {displayBan}
                {displayBan1}
                {displayBan2}
              </div>
            </div>
          </div>
        </div>
      </div>
      <MostPopularRes />
    </>
  );
}

export default MostPopular;
