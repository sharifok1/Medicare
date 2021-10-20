import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeAside from '../HomeAside/HomeAside';
import './LoadData.css'
import Services from '../Services/Services';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeadset, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


const LoadData = () => {
    const [data, setData]=useState([]);
    
    useEffect(()=>{
        const url = 'WebFakeData.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    },[]);
     
    
     
    return (
        <div >
            <div className='container mt-5'>
            <Row sm={1} className={Container}>
                <Col lg={8}>
                    <h1 className="text-secondary service-hed">Our Clinical Services</h1>
                   <Row xs={1} md={3} lg={3} className="g-4">
                   {
                       data.map(service=> <Services
                       key= {service.id}
                       service={service}
                       />)
                   }
                   </Row>
                </Col>
                <Col lg={4}>
                    <HomeAside/>
                </Col>
            
            </Row>
        </div>
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
    );
};

export default LoadData;