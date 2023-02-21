import React from "react";

function Footer() {
  return (
    <div className="footer" id="footer">
      <footer>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-3">
              <p>
                Jalan Hati Hati di Jalan
              </p>
              <p>tripie@gmail.com</p>
              <p>081-233-334-808</p>
            </div>
            <div className="col-md-2 navigation">
              <p>
                <a href="#our-services">Experience</a>
              </p>
              <p>
                <a href="#why-us">Destination</a>
              </p>
              <p>
                <a href="#testimonial">About</a>
              </p>
              <p>
                <a href="#faq">FAQ</a>
              </p>
            </div>
            <div className="col-md-4">
              <p>Connect with us</p>
              <div className="icon-footer">
                {/* <a href="https://www.facebook.com/">
                  <img src="" alt="fb" />
                </a>
                <a href="https://www.instagram.com/ntrioooo/">
                  <img src="" alt="ig" />
                </a>
                <a href="https://twitter.com/inobraaain/">
                  <img src="" alt="twt" />
                </a>
                <a href="https://mail.google.com/mail/">
                  <img src="" alt="mail" />
                </a>
                <a href="https://www.twitch.tv/">
                  <img src="" alt="twitch" />
                </a> */}
              </div>
            </div>
            <div className="col-md-3">
              <p>Copyright Tripie 2022</p>
              {/* <a href="https://www.binaracademy.com/">
                <img src="" alt="logo" />
              </a> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
