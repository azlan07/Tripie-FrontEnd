import React from 'react'
import Navbar from '../LandingPage/navbar'
import Footer from '../LandingPage/footer'
import Background from "../../assets/images/background.png";
import './About.css'

function About() {
  return (
    <>
      <Navbar />
      <div className="atas">
        <img src={Background} alt="" className="background-image" />
        <div className="card overlaying-card shadow-lg rounded">
          <h3 className='text-center p-3'>
            ABOUT
          </h3>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default About