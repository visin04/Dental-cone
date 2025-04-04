import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { SiTicktick } from "react-icons/si";
import { HiMiniArrowUpRight } from "react-icons/hi2";

export default function About() {
  return (
    <Container fluid className="section3" >

 
    <Container className="py-5 " id="about">
      <Row className="d-flex align-items-center gap-5 flex-md-nowrap flex-wrap">
        {/* Left Side - Overlapping Images */}
        <Col md={5} className="d-flex justify-content-center">
          <div className="image-container">
            <img
              src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/about-us-img-1.jpg"
              alt="Dental 1"
              className="img-fluid main-img"
              data-aos="fade-down" />
            <img
              src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/about-us-img-2.jpg"
              alt="Dental 2"
              className="img-fluid overlay-img"
              data-aos="fade-up" />
          </div>
        </Col>

        {/* Right Side - About Us */}
        <Col md={6}>
        <div  data-aos="fade-down">

          <h6 className="section3h">* ABOUT US</h6>
          <h1 className="fw-bold outerhtext">
            <span className="dentalhtext">Your Journey</span> to a Healthier Smile Begins Here 
          </h1>
        </div>
          <p className="pelemetsection1">
            The goal of our clinic is to provide friendly, caring dentistry and the highest level
            of general, cosmetic, and specialist dental treatments. With dental practices
            throughout the world.
          </p>
          <Row className="list-unstyled">
            {/* Left Side */}
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <SiTicktick className="me-2 text-primary" />
                  <h5 className="section3h5">Experienced Team</h5>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <SiTicktick className="me-2 text-primary" />
                  <h5 className="section3h5">Comprehensive Services</h5>
                </li>
              </ul>
            </Col>

            {/* Right Side */}
            <Col md={6}>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <SiTicktick className="me-2 text-primary" />
                  <h5 className="section3h5">State-Of-The-Art Technology</h5>
                </li>
                <li className="d-flex align-items-center mb-2">
                  <SiTicktick className="me-2 text-primary" />
                  <h5 className="section3h5">Emergency Dental Services</h5>
                </li>
              </ul>
            </Col>
          </Row>

          <Button variant="primary" className="appointment d-flex align-items-center justify-content-center">
                          <span className="butontxt text-white">Book Appointment</span>
                          <div className="arrow">
                            <HiMiniArrowUpRight />
                          </div>
                        </Button>
        </Col>
      </Row>
    </Container>
    </Container>
  );
}
