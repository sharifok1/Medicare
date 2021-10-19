import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import fakeData from "../../Utilities/fakeData";
const DetailsService = () => {
    
    const {serviceId}=useParams();
    console.log(fakeData);
   
    const itemsId = fakeData.find((s)=>s.id===parseInt(serviceId));
    console.log(itemsId)
    const {name,img,sortDes}=itemsId;
   
    return (
        <div className="container">
           <Row md={1} >       
            <Col md={6}>
             <Card className='card-style'>
                 <Card.Img className="img-height img-fluid" variant="top" src={img} />
                </Card>
            </Col>
            <Col md={6}>
                <h1>{name}</h1>
                <p>{sortDes}</p>
                <Link to="/Home">  Go to Home</Link>
            </Col>
           </Row>
        </div>
    );
};

export default DetailsService;