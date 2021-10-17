import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeAside from '../../HomeAside/HomeAside';
import Services from '../Services/Services';

const LoadData = () => {
    const [data, setData]=useState([]);
    useEffect(()=>{
        const url = 'WebFakeData.json';
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data));
    },[])
    return (
        <div className='container mt-5'>
            <Row sm={1} className={Container}>
                <Col md={8}>
                   <Row xs={1} md={2} lg={3} className="g-4">
                   {
                       data.map(service=> <Services
                       key= {service.id}
                       service={service}
                       />)
                   }
                   </Row>
                </Col>
                <Col md={4}>
                    <HomeAside/>
                </Col>
            
            </Row>
        </div>
    );
};

export default LoadData;