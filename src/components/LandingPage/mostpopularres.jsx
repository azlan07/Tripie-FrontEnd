import React, { useEffect } from "react";
import { getListAirlines } from "../../actions/airlinesAction";
import { useSelector, useDispatch } from "react-redux";

function MostPopularRes() {
  const {
    getListAirlinesResult,
  } = useSelector((state) => state.AirlinesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListAirlines());
  }, [dispatch]);

  const sliceAirport = Array.isArray(getListAirlinesResult)
    ? getListAirlinesResult.slice(0, 3)
    : [];

  return (
    <div>
      <div
        id="most-popular"
        className="most-popular d-xxl-none d-md-none d-lg-block d-lg-none d-xl-block d-xl-none d-xxl-block"
      >
        <div className="container mt-3">
          <div className="row justify-content-center">
            <p className="text-title-blue text-center">
              TOP 3 FEATURED AIRPORT
            </p>
            <h2 className="text-title-black text-center">
              Most Popular Destinations
            </h2>
            <p className="text-title-gray text-center">
              The best destination in our opinion is how much customers like it
              in terms of place, price, comfort and of course airport service
            </p>
          </div>
          <div className="row">
            {sliceAirport.map((airport, index) => {
              return (
                <div
                  key={index}
                  className="most-popular-item col-md-auto mt-3"
                  id="most-popular-item-active"
                >
                  <img
                    src={airport.Foto}
                    alt={airport.Foto}
                    className="w-100 h-100"
                  />
                  <div className="most-popular-card">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="">
                            <p className="most-popular-card-star">
                              5.0
                              <span className="most-popular-card-total">
                                (5.2K+)
                              </span>
                            </p>
                            <h3 className="most-popular-card-title">
                              {airport.Airport_Name}
                            </h3>
                            <p className="most-popular-card-location d-flex">
                              {`${airport.Airport_Code}, ${airport.City}`}
                            </p>
                          </div>
                          <a href="/#" className="btn btn-cream rounded-4">
                            &gt;
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <a
            href="/destinations"
            className="btn btn-view d-flex justify-content-center mt-3"
          >
            View All Destination
          </a>
        </div>
      </div>
    </div>
  );
}

export default MostPopularRes;
