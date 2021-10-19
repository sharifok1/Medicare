import { faClinicMedical, faEnvelope, faFirstAid, faHeadset, faHeartbeat, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './About.css'

const AboutUs = () => {
    return (
        <div >
           <div className="container">
           <Row >
           <Col md={6} className="text-start mt-5">
               <h4>We provided</h4>
                 <h2>Total Helth Care</h2>
                <p>We provide a vast range of medical services, so every person could have the opportunity to receive high-quality medical help.
                      Caring Doc Medical Clinic is committed to providing the highest quality patient care. Our dedication to excellence, compassion and innovation is rooted in our devotion to the art and science of healing, which supports every aspect of our mission.
                     We do our best to help you and provide the highest level of health care.
                </p>
                    <h6>We do our best to help you and provide the highest level of health care.</h6>
                   <Link to="/LoadData"> <button className="seeMore">See Our Services</button></Link>
               </Col>
               <Col md={6} className="mt-5 pt-5" >
                   <img className="img-fluid" src="https://image.freepik.com/free-photo/female-doctor-holding-out-hand-isolated-white_186202-5046.jpg" alt="" />
               </Col>
               
           </Row>
           </div>
        <div className='container py-4'>
            <Row>
                <Col xs={12} md={4} lg={4}>
                   <h1 className="text-primary"><FontAwesomeIcon icon={faClinicMedical}/></h1>
                   <h3>Quality and Safety</h3>
                   <p>We are very aware about our services quality. And always maintenance high security</p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                <h1 className="text-primary"><FontAwesomeIcon icon={faHeartbeat}/></h1>
                    <h3>Dignity and Respect</h3>
                    <p>Our main target provide best service and respects to our clients.so every person could have the opportunity to receive high-quality medical help </p>
                </Col>
                <Col xs={12} md={4} lg={4}>
                <h1 className="text-primary"><FontAwesomeIcon icon={faFirstAid}/></h1>
                <h3>Responsibility</h3>
                <p>We provide a vast range of medical services, so every person could have the opportunity to receive high-quality medical help</p>
                </Col>
                
            </Row>
        </div>
           <div>
           <footer className="foter-style">
                <Row>
                    <Col md={5}>
                        <h3>MediCare Helth Service</h3>
                      <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Road-9/B, Sector-5, Uttara, Dhaka</p> 
                      <p><FontAwesomeIcon icon={faEnvelope}/> Official: medicareHelthBd71@gmail.com</p> 
                      <p><FontAwesomeIcon icon={faHeadset}/> Help line: 01851515***</p> 
                        </Col>
                    <Col md={3}>
                        <h4>About Us</h4>
                        <p>Our Success</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col md={4}><h4>Pay With</h4>
                        <img className="img-fluid payment-card" src="https://utshobbd.com/wp-content/uploads/2019/12/payment.jpg" alt="" />
                    </Col>
                    
                </Row>
                <p className="foter-txt">Copyright © 2021 MediCare Helth Service</p>
            </footer>
           </div>

        </div>
    );
};

export default AboutUs;