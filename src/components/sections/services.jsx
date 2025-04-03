import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { TbDental, TbDentalBroken, TbDentalOff } from "react-icons/tb";

export default function Service() {
  return (
    <Container className="my-5 py-4" id="service">
      {/* Heading Section */}
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h6 className="section3h">* OUR SERVICES</h6>
          <h1 className="fw-bold outerhtext">
            <span className="dentalhtext">High Quality</span> Service For You
          </h1>
          <p className="pelemetsection1">
            We are committed to sustainability and eco-friendly initiatives.
          </p>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="mt-4 justify-content-center">
        {/* Card 1 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 p-3 flex-fill cardsection4">
            <Card.Body>
              <TbDental size={60} />
              <Card.Title className="mt-3 h5cardsection3">Comprehensive Dental Care</Card.Title>
              <Card.Text className="psection4card">
                Providing a full range of dental treatments tailored to your needs.
              </Card.Text>
              <span className="readmores fw-bold">
                Read More <HiMiniArrowUpRight className="arrowread" />
              </span>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
     
        <Card className="shadow border-0 p-3 flex-fill cardsection4">
            <Card.Body >
              <TbDentalBroken size={60} />
              <Card.Title className="mt-3 h5cardsection3">Emergency Services</Card.Title>
              <Card.Text className="psection4card">
                Immediate care for dental emergencies with expert solutions.
              </Card.Text>
              <span className="readmores fw-bold">
                Read More <HiMiniArrowUpRight className="arrowread" />
              </span>
            </Card.Body>
          </Card>
       
          
        </Col>

        {/* Card 3 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 p-3 flex-fill cardsection4">
            <Card.Body>
              <TbDentalOff size={60} />
              <Card.Title className="mt-3 h5cardsection3">Preventive Dentistry</Card.Title>
              <Card.Text className="psection4card">
                Preventive treatments to keep your teeth healthy and strong.
              </Card.Text>
              <span className="readmores fw-bold">
                Read More <HiMiniArrowUpRight className="arrowread" />
              </span>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 4 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 p-3 flex-fill cardsection4">
            <Card.Body>
              <TbDentalOff size={60} />
              <Card.Title className="mt-3 h5cardsection3">Advanced Technology</Card.Title>
              <Card.Text className="psection4card">
                Using state-of-the-art technology for precise dental treatments.
              </Card.Text>
              <span className="readmores fw-bold">
                Read More <HiMiniArrowUpRight className="arrowread" />
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
      {/* Additional Text Below Cards */}
      <Row className="justify-content-center text-center mt-4">
  <Col md={8} className="text-center adaptive-text">
    <p className="pelemetsection1">
      We believe in using the latest technology and techniques to ensure the best outcomes for our patients.
    </p>
    <div className="d-flex justify-content-center">
      <Button variant="primary" className="appointment d-flex align-items-center justify-content-center">
        <span className="butontxt text-white">Book Appointment</span>
        <div className="arrow">
          <HiMiniArrowUpRight />
        </div>
      </Button>
    </div>
  </Col>
</Row>

    </Container>
  );
}