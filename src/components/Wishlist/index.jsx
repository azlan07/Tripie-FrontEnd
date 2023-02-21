import React, { useEffect, useState } from "react";
import NavBar from "../LandingPage/navbar";

function Wishlist() {
  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("wishlist");
    if (data) {
      setWishlist(JSON.parse(data));
    }
  }, [wishlist]);

  return (
    <div className="container">
      <NavBar />
      <div className="container top">
        <h1 className="text-center mt-2 mb-5">Wishlist Destination</h1>
        <div className="row">
          {wishlist &&
            wishlist.map((item) => {
              return (
                <div className="col-md-4" key={item.id}>
                  <div className="card mb-3">
                      <img
                        src={item.Foto}
                        className="card-img-top"
                        alt={item.Foto}
                        style={{ maxWidth: "450px", maxHeight: "200px" }}
                      />
                    <div className="card-body">
                      <p>{item.Airport_Name}</p>
                      <p>{item.City}</p>
                      <p className="text-secondary">{item.Description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
