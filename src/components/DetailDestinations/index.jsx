import React, { useState, useEffect } from "react";
import NavBar from '../LandingPage/navbar';
import { useParams } from "react-router-dom";
import destination from "../../assets/images/Destination.png";


function DeatailDestinations() {
    const { id } = useParams();
    const [destinations, setDestinations] = useState(null);

    useEffect(() => {
        fetch(`https://6390373c0bf398c73a805426.mockapi.io/price_list/${id}`)
            .then((resp) => resp.json())
            .then((data) => setDestinations(data));
    }, []);

    if (destinations === null) {
        return <h1 className="text-center">Lagi Loading Cuyy...</h1>;
    }

    return (

        <div className="container">
            <NavBar />
            <div className="container top">
                {/* <div>
                    <h2>Detail Page</h2>
                    <p>id : {destinations.id}</p>
                    <p>Destinasi : {destinations.destinationAirport}</p>
                </div> */}

                <h1 className='text-center mt-2 mb-5'>Detail Destination</h1>
                <div className="row">
                    <div className="col-md">
                        <img src={destination} className="card-img-top" />
                    </div>
                    <div className="col-md px-5 py-5">
                        <h2 className='mb-5'>{destinations.destinationAirport}</h2>
                        <p className='mb-5'>
                            {destinations.desc}
                        </p>
                        <button type="submit" class="btn btn-dark" style={{ width: "250px", marginRight: "20px" }}>Bookmark</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeatailDestinations