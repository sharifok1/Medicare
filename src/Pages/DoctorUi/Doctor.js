import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Doctor.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope,  faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Doctor = ({doctorData}) => {
    const {name, img, email, phone}=doctorData;
    return (
        <div>
           <Col>
            <Card className="card-width">
                <Card.Img variant="top" className="doctor-img" src={img} />
                <Card.Body className="doctor-profile">
                <Card.Title>{name}</Card.Title>
                <Card.Text >
                    <p><FontAwesomeIcon icon={faMobileAlt}/> {phone}</p>
                    <p><FontAwesomeIcon icon={faEnvelope}/> {email}</p>
                </Card.Text>
                </Card.Body>
            </Card>
    </Col> 
        </div>
    );
};

export default Doctor;