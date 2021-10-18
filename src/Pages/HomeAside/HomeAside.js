import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './HomeAside.css'

const HomeAside = () => {
    return (
       <div className='d-flex align-items-center justify-content-center my-5'>
            <div className="bg-primary aside-card py-5">
            <h2>Cheack our </h2>
            <h1>Weekly Time Schedule</h1>
            <p className="py-4">
               With the help of our timetable, You can select the convenient time,
               choose an appropriate doctor, and make an appointment.  
            </p>
            <Row className="p-2">
                <Col xs={6} className="text-start py-4">
                 <h6>Sunday-Thursday</h6>
                 <h6>Friday </h6>
                 <h6>Saturday</h6>
                </Col>
                <Col  className="text-start py-4">
                    <h6> 24 hour</h6>
                    <h6> 9:00 am - 9pm</h6>
                    <h6> 8:00 am - 8pm</h6>
                </Col>
            </Row>
        </div>
       </div>
    );
};

export default HomeAside;