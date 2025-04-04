import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Footer() {
  return (
    <div className="contactbar py-4">
    <footer className="text-light py-4 " style={{fontFamily:'sans-serif'}}>
      <Container>
        <Row className="gy-4 justify-content-between py-4">
          {/* First Div: Image & Description */}
          <Col xs={12} md={6} lg={3} className="d-flex flex-column">
            <img src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/footer-logo.svg" alt="Logo" className="mb-3" style={{ width: "120px" }} />
            <p>
              The goal of our clinic is to provide friendly, caring dentistry and
              the highest level of general, cosmetic, and specialist dental treatments.
            </p>
          </Col>

          {/* Second Div: Quick Links */}
          <Col xs={12} md={6} lg={3} className="d-flex flex-column">
            <h5 className="text-white mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className=" text-decoration-none" style={{color:"white"}}>Home</li>
              <li className=" text-decoration-none"  style={{color:"white"}}>About Us</li>
              <li className=" text-decoration-none"  style={{color:"white"}}>Services</li>
              <li className=" text-decoration-none"  style={{color:"white"}}>Contact</li>
            </ul>
          </Col>

          {/* Third Div: Services */}
          <Col xs={12} md={6} lg={3} className="d-flex flex-column">
            <h5 className="text-white mb-3">Our Services</h5>
            <ul className="list-unstyled">
              <li><a href="about" className=" text-decoration-none"  style={{color:"white"}}>General Dentistry</a></li>
              <li><a href="service" className=" text-decoration-none"  style={{color:"white"}}>Cosmetic Dentistry</a></li>
              <li className=" text-decoration-none"  style={{color:"white"}}>Dental Implants</li>
              <li className=" text-decoration-none"  style={{color:"white"}}>Teeth Whitening</li>
            </ul>
          </Col>

          {/* Fourth Div: Contact Info */}
          <Col xs={12} md={6} lg={3} className="d-flex flex-column">
            <h5 className="text-white mb-3">Contact Us</h5>
            <ul className="list-unstyled ">
              <li>Email: Vishnu@gmail.com</li>
              <li>Phone: +91 9944874776</li>
              <li>Address: No 39, Karuvadi Kupam</li>
            </ul>
          </Col>
        </Row>
        <div className="lining text-center">
             <p className="py-4">All Rights Reserved By vishnu</p>
      </div>

      </Container>
      
    </footer>
    </div>
  );
}
