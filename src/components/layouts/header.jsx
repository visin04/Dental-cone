import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { scroller } from "react-scroll";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function Header() {
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 20,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <>
      <Navbar expand="lg" className="mb-3 custom-navbar">
        <Container>
          {/* Left-Aligned Logo */}
          <Navbar.Brand href="#">
            <img
              src="https://demo.awaikenthemes.com/dentaire/wp-content/uploads/2024/07/logo.svg"
              alt="Logo"
              height="50" // Adjust logo height if needed
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {/* Centered Navigation with Underline on Hover */}
              <Nav className="mx-auto d-flex custom-nav-links">
                <Nav.Link onClick={() => scrollToSection("home")} href="#home">
                  Home
                  <div className="nav-underline"></div>
                </Nav.Link>

                {/* Dropdown for Services */}
                <NavDropdown
                  title={
                    <>
                      <span>Services</span> <IoIosArrowDown />
                      <div className="nav-underline"></div>
                    </>
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="custom-dropdown"
                  onClick={() => scrollToSection("service")}
                >
                  <NavDropdown.Item
                    href="#service1"
                    onClick={() => scrollToSection("service")}
                  >
                    Service 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#service2"
                    onClick={() => scrollToSection("service")}
                  >
                    Service 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#service3"
                    onClick={() => scrollToSection("service")}
                  >
                    Service 3
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Dropdown for Pages */}
                <NavDropdown
                  title={
                    <>
                      <span>Pages</span> <IoIosArrowDown />
                      <div className="nav-underline"></div>
                    </>
                  }
                  id="navbarScrollingDropdown"
                  drop="end"
                  className="custom-dropdown"
                >
                  <NavDropdown.Item
                    href="#page1"
                    onClick={() => scrollToSection("insurance")}
                  >
                    Page 1
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#page2"
                    onClick={() => scrollToSection("insurance")}
                  >
                    Page 2
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#page3"
                    onClick={() => scrollToSection("insurance")}
                  >
                    Page 3
                  </NavDropdown.Item>
                </NavDropdown>

                {/* Non-dropdown items */}
                <Nav.Link href="#about">
                  About Us
                  <div className="nav-underline"></div>
                </Nav.Link>
                <Nav.Link href="#contact" onClick={() => scrollToSection("contact")}>
                  Contact Us
                  <div className="nav-underline"></div>
                </Nav.Link>
              </Nav>

              {/* Right-Aligned Search */}
              <Form className="d-flex align-items-center">
                <Button
                  variant="primary"
                  className="appointment d-flex align-items-center justify-content-center"
                >
                  <span className="butontxt text-white">Book Appointment</span>
                  <div className="arrow">
                    <HiMiniArrowUpRight />
                  </div>
                </Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Small Line Below Navbar */}
      <div className="nav-bottom-line"></div>
    </>
  );
}
