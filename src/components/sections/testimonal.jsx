import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { TbDental } from "react-icons/tb";

export default function Testimonial() {
  return (
    <Container fluid className="py-5 bg-white">
      <Container className="text-center">
        {/* Heading */}
        <div  data-aos="fade-down"> 

        <p className="section3h fw-semibold">* TESTIMONIAL</p>
        <h1 className="fw-bold outerhtext">
          What our<span className="dentalhtext"> Clients Say</span>
        </h1>
        <p className="text-muted">
          We are committed to sustainability, eco-friendly initiatives.
        </p>
        </div>

        <Row className="align-items-center mt-5">
          {/* Left Side - Image */}
          <Col xs={12} md={6} className="text-md-end">
            <img 
              src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/how-it-work-img.jpg" 
              className="img-fluid" 
              alt="How it works"
              data-aos="fade-up" />
          </Col>

          <Col xs={12} md={6} className="d-flex justify-content-center">
            <div style={{ maxWidth: "100%", width: "500px" }}> {/* Ensures the carousel fits within column */}
              <Carousel controls={true} indicators={true} interval={3000}> 
                
                {/* Testimonial Item */}
                {[1, 2, 3].map((_, index) => (
                  <Carousel.Item key={index}>
                    <div className="p-4 text-start">
                      <TbDental size={50} />
                      <p className="pslider py-3 fw-semibold">
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quibusdam odit vero voluptatum quos culpa! Officiis, 
                        itaque excepturi illum laboriosam vitae velit id ipsum 
                        praesentium et? Illum ipsum praesentium quia tenetur."
                      </p>

                      {/* Profile Section */}
                      <div className="d-flex align-items-center mt-3">
                        <img 
                          src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/team-2.jpg" 
                          alt="Vishnu" 
                          className="rounded-circle" 
                          style={{ width: "40px", height: "40px", objectFit: "cover" }}
                        />
                        <div className="text-start ms-2">
                          <h6 className="mb-0 fw-bold">Vishnu</h6>
                          <p className="text-muted mb-0" style={{ fontSize: "14px" }}>Student</p>
                        </div>
                      </div>
                    </div>
                  </Carousel.Item>
                ))}

              </Carousel>
            </div>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}
