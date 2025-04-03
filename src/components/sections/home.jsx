import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { GoStarFill } from "react-icons/go";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [dob, setDob] = useState("");
  
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!name.trim()) tempErrors.name = "Name is required";
    if (!email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      tempErrors.phone = "Phone number must be 10 digits";
    }
    if (!service) tempErrors.service = "Please select a service";
    if (!dob) tempErrors.dob = "Please select a date";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // Returns true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      toast.success("🎉 Appointment booked successfully!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });

   
      setName("");
      setEmail("");
      setPhone("");
      setService("");
      setDob("");
    } else {
      toast.error("❌ Please fill all fields correctly!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      <Container className="my-5 py-4 " id="home">
        <Row className="align-items-center">
      
          <Col lg={6} md={12} className="text-left">
            <h1 className="fw-bold outerhtext">
              Experience <span className="dentalhtext">Dental Excellence</span> with a <br />
              Gentle Touch
            </h1>
            <p className="text-muted pelemetsection1">
              It is a long established fact that a reader will be distracted by the readable
              content of a page when looking at its layout.
            </p>
            <Button variant="primary" className="appointment d-flex align-items-center justify-content-center">
              <span className="butontxt text-white">Make an Appointment</span>
              <div className="arrow">
                <HiMiniArrowUpRight />
              </div>
            </Button>
            <div className="lining"></div>
            <p className="mt-3 mb-0 pelemetsection1">
              Google Rating: <span style={{ color: "gold", fontSize: "14px" }}>
                5.0 <GoStarFill /> <GoStarFill /> <GoStarFill /> <GoStarFill />
              </span> Based on 492 Reviews
            </p>
          </Col>

          {/* Right Section (Form) */}
          <Col lg={6} md={12} className="d-flex justify-content-center">
            <div className="shadow-lg p-4" style={{ width: "100%", maxWidth: "450px", borderRadius: '28px' }}>
              <h3 className="fw-bold text-center mb-3 outerhtext">
                <span className="dentalhtext">Book</span> Appointment
              </h3>
              <p className="text-center text-muted">
                Easily schedule your appointment by filling out our simple form
              </p>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Control 
                    type="text" 
                    placeholder="Enter Name"    
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    className="felement" 
                  />
                  {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
                </Form.Group>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="email" 
                        placeholder="Enter Email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} 
                        className="felement" 
                      />
                      {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="text" 
                        placeholder="Phone Number"  
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} 
                        className="felement" 
                      />
                      {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Select 
                        className="felement"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        <option value="">--Please choose an option--</option>
                        <option value="General Checkup">General Checkup</option>
                        <option value="Cleaning & Whitening">Cleaning & Whitening</option>
                        <option value="Orthodontics">Orthodontics</option>
                      </Form.Select>
                      {errors.service && <span style={{ color: "red" }}>{errors.service}</span>}
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Control 
                        type="date" 
                        className="felement"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                      />
                      {errors.dob && <span style={{ color: "red" }}>{errors.dob}</span>}
                    </Form.Group>
                  </Col>
                </Row>

                {/* Centering Button & Adding Space Above */}
                <div className="d-flex justify-content-center mt-4">
                  <Button variant="primary" className="appointment d-flex align-items-center justify-content-center" type="submit">
                    <span className="butontxt text-white">Book Appointment</span>
                    <div className="arrow">
                      <HiMiniArrowUpRight />
                    </div>
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}
