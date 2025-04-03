import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export default function Stat() {
  return (
    <Container fluid className="bg-white py-5" > {/* Increased padding */}
      <Container className="bg-white py-5" id="insurance"> {/* Increased padding */}
        <Row className="justify-content-center">
          {/* Stat 1 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <h1 className="fw-bold">75+</h1>
            <h5 className="fw-semibold h5cardsection3">Insurance Covered</h5>
            <hr className="w-100 mx-auto" />
            <p className="text-muted pelemetsection1">
              Our team loves dental trivia. Did you know that tooth enamel.
            </p>
          </Col>

          {/* Stat 2 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <h1 className="fw-bold">2K</h1>
            <h5 className="fw-semibold h5cardsection3">Realized Projects</h5>
            <hr className="w-100 mx-auto" />
            <p className="text-muted pelemetsection1">
              Our team loves dental trivia. Did you know that tooth enamel.
            </p>
          </Col>

          {/* Stat 3 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <h1 className="fw-bold">22K</h1>
            <h5 className="fw-semibold h5cardsection3">Happy Customers</h5>
            <hr className="w-100 mx-auto" />
            <p className="text-muted pelemetsection1">
              Our team loves dental trivia. Did you know that tooth enamel.
            </p>
          </Col>

          {/* Stat 4 */}
          <Col xs={12} sm={6} md={3} className="mb-4">
            <h1 className="fw-bold">18+</h1>
            <h5 className="fw-semibold h5cardsection3">Experience Doctors</h5>
            <hr className="w-100 mx-auto" />
            <p className="text-muted pelemetsection1">
              Our team loves dental trivia. Did you know that tooth enamel.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
