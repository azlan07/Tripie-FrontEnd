import React from 'react'
import Navbar from '../LandingPage/navbar'
import Footer from '../LandingPage/footer'
import Background from "../../assets/images/background.png";
import './Experience.css'

function Experience() {
  return (
    <>
      <Navbar />
      <div>
        <div className="atas">
          <img src={Background} alt="" className="background-image" />
          <h2 className='header'>" Experience world class,
            no matter how short your journey " 
          </h2>
          <div className="card overlaying-card">
            <p className="text-center shadow-lg rounded-3 p-3">
              Our Boeing 737-8 aircraft will transform your flight experience, even on shorter journeys. Whether you are flying Business Class or Economy Class, indulge in our new features on board, including seats designed for enhanced comfort, state-of-the-art in-flight entertainment, and a delectable choice of cuisine.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-6">
              <iframe src="https://www.youtube.com/embed/Z82c5c9n2mA" frameborder="0" allow=" autoplay;" allowfullscreen width="360" height="194"></iframe>
            </div>
            <div className="col-md-6">
              <h2>Exceptional choices of cuisine</h2>
              <p>With a wide variety of sumptuous dishes on rotation, savour new main courses even if you fly the same route often. On Business Class, you can also Book the Cook for fine dining at 30,000 feet. To enjoy your preferred choice, make your meal reservation 1 week to 24 hours before departure.</p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Immersive in-flight experience</h2>
              <p>Enjoy a cinematic experience with a full seatback touchscreen in-flight entertainment system with personalised content recommendations and bookmark features for a seamless KrisWorld experience across flights.</p>
            </div>
            <div className="col-md-6">
              <iframe src="https://www.youtube.com/embed/Z82c5c9n2mA" frameborder="0" allow=" autoplay;" allowfullscreen width="360" height="194"></iframe>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <iframe src="https://www.youtube.com/embed/Z82c5c9n2mA" frameborder="0" allow=" autoplay;" allowfullscreen width="360" height="194"></iframe>
            </div>
            <div className="col-md-6">
              <h2>Arrive refreshed, at work or at rest</h2>
              <p>Our Business Class takes comfort to another level with seats that recline into fully-flat beds over six feet long. Stretch out, relax, unwind. No matter how short your journey. </p>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <h2>Thoughtful design</h2>
              <p>From contoured cushions for back support, the latest in-flight entertainment on seatback touchscreen monitors, to our award-winning service, your Economy Class experience is comfort redefined.</p>
            </div>
            <div className="col-md-6">
              <iframe src="https://www.youtube.com/embed/Z82c5c9n2mA" frameborder="0" allow=" autoplay;" allowfullscreen width="360" height="194"></iframe>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-6">
              <iframe src="https://www.youtube.com/embed/Z82c5c9n2mA" frameborder="0" allow=" autoplay;" allowfullscreen width="360" height="194"></iframe>
            </div>
            <div className="col-md-6">
              <h2>Explore the Boeing 737-8 virtually</h2>
              <p>Best enjoyed in landscape mode, explore the airy interior and experience for yourself the delightful meals, flat bed, in-flight entertainment and more.From the airy 737 Boeing Sky Interior, to full HD in-flight entertainment and the latest connectivity system, experience it all.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Experience
