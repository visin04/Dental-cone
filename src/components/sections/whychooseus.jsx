import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function WhyChooseUs() {
  return (
    <Container fluid className="py-5 ">
      <Container className="text-center">
     <div  data-aos="fade-down">
        <p className="section3h fw-semibold">* WHY CHOOSE US</p>
        <h1 className="fw-bold outerhtext">
        Diagnosis of <span className="dentalhtext">Dental Diseases</span>  
          </h1>
        <p className="text-muted">
          We are committed to sustainability, eco-friendly initiatives.
        </p>
     </div>

        <Row className="align-items-center mt-5 py-4">
          {/* Left Side */}

          <Col xs={12} md={4} className="text-md-end" data-aos="fade-down">
            <div className="mb-4">
              <h5 className="fw-bold">Experienced Doctor</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
              
            </div>
            <div className="mb-4">
              <h5 className="fw-bold">Personalized Care</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="fw-bold">Flexible Payment Options</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
            </div>
          </Col>

          {/* Image in Center */}
          <Col xs={12} md={4} className="text-center" >
            <div className="position-relative d-inline-block"  style={{ maxWidth: "250px" }} data-aos="fade-up" >
              <img src={"https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/why-choose-us-img.png"} alt="Tooth" className="img-fluid"/>
              <div className="position-absolute top-50 start-50 translate-middle bg-white rounded-circle border shadow-lg" style={{  zIndex: "-1" }}></div>
            </div>
          </Col>

          {/* Right Side */}
          <Col xs={12} md={4} className="text-md-start mr-3">
          <div  data-aos="fade-down">

            <div className="mb-4">
              <h5 className="fw-bold">Emergency Services</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="fw-bold">Positive Patient Reviews</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="fw-bold">Latest Technology</h5>
              <p className="text-muted">
                The goal of our clinic is to provide friendly, caring dentistry.
              </p>
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
