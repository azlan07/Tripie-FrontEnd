import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Pilot from "../../assets/images/pilot.png";
import Medkit from "../../assets/images/medkit.png";
import Meal from "../../assets/images/meal.png";

function WhyUs() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="why-us" id="why-us">
      <div className="container text-center mt-5 mb-5">
        <h5>SPECIAL BENEFIT FOR YOU</h5>
        <h3>Why Should Choose Us?</h3>

        <Row className="mt-3">
          <Slider {...settings}>
            <Col md={4}>
              <Card className="border-0 card-hover">
                <Card.Img
                  variant="top"
                  src={Pilot}
                  className="image-center"
                />
                <Card.Body className="mt-2">
                  <Card.Title>Professional Pilot</Card.Title>
                  <Card.Text className="mt-3">
                    Pilot kami sudah berpengalaman <br /> dalam bidangnya dan sudah <br />
                    bersetifikat nasional maupun <br /> internasional
                  </Card.Text>
                  <a href="/#" className="btn btn-details border-0">
                    View Details &gt;
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 card-hover">
                <Card.Img
                  variant="top"
                  src={Medkit}
                  className="image-center"
                />
                <Card.Body className="mt-2">
                  <Card.Title>Personal Health Kit</Card.Title>
                  <Card.Text className="mt-3">
                    Untuk menjaga kesehatan Anda <br /> kami sudah menyiapkan <br /> personal
                    health kit
                  </Card.Text>
                  <a href="/#" className="btn btn-details border-0">
                    View Details &gt;
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 card-hover">
                <Card.Img
                  variant="top"
                  src={Meal}
                  className="image-center"
                />
                <Card.Body className="mt-2">
                  <Card.Title>Preminum Meals</Card.Title>
                  <Card.Text className="mt-3">
                    Makanan dari kami sudah higienis dan <br /> sangat cocok untuk
                    semua kalangan <br /> serta dimasak oleh chef <br /> professional
                  </Card.Text>
                  <a href="/#" className="btn btn-details border-0">
                    View Details &gt;
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 card-hover">
                <Card.Img
                  variant="top"
                  src={Meal}
                  className="image-center"
                />
                <Card.Body className="mt-2">
                  <Card.Title>Preminum Meals</Card.Title>
                  <Card.Text className="mt-3">
                    Makanan dari kami sudah higienis dan <br /> sangat cocok untuk
                    semua kalangan <br /> serta dimasak oleh chef <br />professional
                  </Card.Text>
                  <a href="/#" className="btn btn-details border-0">
                    View Details &gt;
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="border-0 card-hover">
                <Card.Img
                  variant="top"
                  src={Meal}
                  className="image-center"
                />
                <Card.Body className="mt-2">
                  <Card.Title>Preminum Meals</Card.Title>
                  <Card.Text className="mt-3">
                    Makanan dari kami sudah higienis dan <br /> sangat cocok untuk
                    semua kalangan <br /> serta dimasak oleh chef <br /> professional
                  </Card.Text>
                  <a href="/#" className="btn btn-details border-0">
                    View Details &gt;
                  </a>
                </Card.Body>
              </Card>
            </Col>
          </Slider>
        </Row>
      </div>
    </div>
  );
}

export default WhyUs;
