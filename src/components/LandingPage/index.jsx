import React, { useEffect } from "react";
import NavBar from "./navbar";
import MostPopular from "./mostpopular";
import Home from "./home";
import SearchAir from "./searchair";
import WhyUs from "./whyus";
import Footer from './footer'
import '../../App.css'

function LandingPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#fafafa";
  }, []);

  return (
    <div>
      <NavBar />
      <Home />
      <SearchAir />
      <WhyUs />
      <MostPopular />
      <Footer />
    </div>
  );
}

export default LandingPage;
