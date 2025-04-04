import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { PiPhoneCallLight } from "react-icons/pi";
import { PiClockClockwise } from "react-icons/pi";

export default function AppointmentDetails() {
  return (
    <div className="contactbar">
    <Container  className="text-white py-3">
    <Row className="justify-content-center align-items-center  contactbarflex">
  {/* Left Section - Contact Info */}
  <Col md={4} className="mb-2 mb-md-0 d-flex align-items-center justify-content-center border-end border-gray pe-md-4">
  <PiPhoneCallLight size={50} className="me-2" />
  <div className="py-4">
    <h6 className="fw-bold mb-0 pb-2">Need Dental Services?</h6>
    <p className="mb-0 section2p">Call on: (+01) 987 828 745</p>
  </div>
</Col>

{/* Center Section - Opening Hours */}
<Col md={4} className="mb-2 mb-md-0 d-flex align-items-center justify-content-center ">
  <PiClockClockwise size={50} className="me-2" />
  <div className="py-4">
    <h6 className="fw-bold mb-0 pb-2">Opening Hours</h6>
    <p className="mb-0 section2p">Mon to Sat 9:00AM - 9:00PM</p>
  </div>
</Col>


  {/* Right Section - Appointment Button */}
  <Col md={4} className="text-center">
  <div  className="py-4">
    
    <Button variant="primary" className="appointment align-items-center justify-content-center" >
      <span className="butontxt text-white">Make a Appointment</span>
      <div className="arrow ms-2">
        <HiMiniArrowUpRight />
      </div>
    </Button>
  </div>
  </Col>
</Row>

    </Container>
    </div>
  );
}
