import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  Accordion  from "react-bootstrap/Accordion";

export default function Whyus() {
  return (
    <Container fluid className='bg-white py-5'>
    <Container >
    <Row className="d-flex align-items-center">
  {/* Image Column */}
  <Col xs={12} md={6} className="text-center">
    <img 
      src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/how-it-work-img.jpg" 
      className="img-fluid" 
      alt="Dental Care"
    />
  </Col>

  {/* Content Column */}
  <Col xs={12} md={6}>
    <p className="section3h fw-semibold">* WHY CHOOSE US</p>
    <h1 className="fw-bold outerhtext">
      What we Do For<span className="dentalhtext"> Your Teeth</span> 
    </h1>
    <p className="text-muted pelemetsection1">
      It is a long established fact that a reader will be distracted by the readable
      content of a page when looking at its layout. The point of using Lorem Ipsum is
      that it has a more-or-less normal distribution of letters, making it look like
      readable English.
    </p>

    {/* Accordion Section */}
    <Accordion defaultActiveKey="0" className="accordion">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <h5 className="fw-semibold h5cardsection3">1. What services do you offer?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className="text-muted pelemetsection1">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <h5 className="fw-semibold h5cardsection3">2. What conditions can we prefer?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className="text-muted pelemetsection1">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <h5 className="fw-semibold h5cardsection3">3. Expert Care?</h5>
        </Accordion.Header>
        <Accordion.Body>
          <p className="text-muted pelemetsection1">
            It is a long established fact that a reader will be distracted by the readable
            content of a page when looking at its layout.
          </p>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </Col>
</Row>

    </Container>
    </Container>
  );
}
