import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import { HiMiniArrowUpRight } from "react-icons/hi2";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const containerStyle = {
    width: "100%",
    height: "100%",
    minHeight: "400px",
    borderRadius: "20px",
  };
  
  
  const center = {
    lat: 11.9139,  // Pondicherry latitude
    lng: 79.8145,  // Pondicherry longitude
};

export default function Contact() {
  return (
    <Container className='py-4' id='contact'>
      <Row>
        <Col className='py-4'  xs={12} md={6} > <LoadScript  className="map" googleMapsApiKey="AIzaSyBAaV16k9o1WbvmI4x_whrgSMqc4hk2q04">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} className="py-4 map">
        <Marker position={center} />
      </GoogleMap>
    </LoadScript></Col>
        <Col className='py-4 pl-4'  xs={12} md={6} >
        <div  data-aos="fade-down">
        <h6 className="section3h">* CONTACT NOW</h6>

          <h1 className="fw-bold outerhtext">
            <span className="dentalhtext">Get Free Proffesional</span><br />  consaltation
          </h1>
        </div>
          <div className="d-flex align-items-center gap-2">
            <IoLocationOutline size={35} /> {/* Adjust size if needed */}
            <p className="pelemetsection2 mb-0 py-4">No 39 Karuvadi Kupam</p>
            </div>
            <div className="d-flex align-items-center gap-2">
            <IoCallOutline size={35} />{/* Adjust size if needed */}
            <p className="pelemetsection2 mb-0 py-4">+91 9944874776</p>
            </div>
            <div className="d-flex align-items-center gap-2">
            <MdOutlineEmail  size={35} /> {/* Adjust size if needed */}
            <p className="pelemetsection2 mb-0 py-4">vishnuvr22001@gmail.com</p>

            </div>
            <div className='py-4'>

            <Button variant="primary" className="appointment align-items-center justify-content-center">
          <span className="butontxt text-white">Make a Appointment</span>
         <div className="arrow ms-2">
        <HiMiniArrowUpRight />
         </div>
    </Button>
            </div>
       </Col>
      </Row>
    
    </Container>
  );
}

