import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { TbDental, TbDentalBroken, TbDentalOff } from "react-icons/tb";

export default function Team() {
  return (
    <Container className="my-5 py-4 text-center">
      {/* Heading Section */}
      <Row className="justify-content-center text-center">
        <Col md={8}>
          <h6 className="section3h">* OUR TEAM</h6>
          <h1 className="fw-bold outerhtext">
            <span className="dentalhtext">Our Friendly</span> Dentist Team
          </h1>
          <p className="pelemetsection2">
          We are committed to sustainability. eco-friendly initiatives.
          </p>
        </Col>
      </Row>

      {/* Cards Section */}
      <Row className="mt-4 justify-content-center">
        {/* Card 1 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 flex-fill cardsection4  meo"  style={{ backgroundColor: "transparent", border: "none" }}>
            <Card.Body className="p-0">
                <div>
                    <img src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/team-2.jpg" className="imgcard"/>
                </div>
              <span className="readmores">
               <h4 className="h4ofsection8 pt-4">Dr.Shiva</h4>  
               <p className="pelemetsection2">All Rounder</p>
              </span>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 2 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 flex-fill cardsection4  meo"  style={{ backgroundColor: "transparent", border: "none" }}>
            <Card.Body className="p-0">
                <div>
                    <img src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/team-1.jpg" className="imgcard"/>
                </div>
              <span className="readmores ">
               <h4 className="h4ofsection8 pt-4 ">Dr.Antony</h4>  
               <p className="pelemetsection2">Care & it</p>
              </span>
            </Card.Body>
          </Card>
        </Col>

        {/* Card 3 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 flex-fill cardsection4 meo"  style={{ backgroundColor: "transparent", border: "none" }}>
            <Card.Body className="p-0">
                <div>
                    <img src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/team-2.jpg" className="imgcard"/>
                </div>
              <span className="readmores ">
               <h4 className="h4ofsection8 pt-4 ">Dr.Vasanth</h4>  
               <p className="pelemetsection2">App Specialist</p>
              </span>
            </Card.Body>
          </Card>
        </Col>
        {/* Card 4 */}
        <Col xs={12} sm={6} lg={3} className="mb-4 d-flex">
          <Card className="shadow border-0 flex-fill cardsection4  meo"  style={{ backgroundColor: "transparent", border: "none" }}>
            <Card.Body className="p-0">
                <div>
                    <img src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/team-1.jpg" className="imgcard"/>
                </div>
              <span className="readmores">
               <h4 className="h4ofsection8 pt-4 pt-4">Dr.Ganapathy</h4>  
               <p className="pelemetsection2">Frontend Specialist</p>
              </span>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      

    </Container>
  );
}