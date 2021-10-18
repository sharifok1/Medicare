import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import DetailsService from '../DetailsService/DetailsService';
import "./Services.css";


const Services = (props) => {
    const {name,img, sortDes}=props.service;

    // detais handler function//
     const detailsHandler = (service)=>{
        
        console.log(service)
    }
    return (
        <div>
           <Col>
             <Card className='card-style'>
                 <Card.Img className="img-height" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className='text-style'>
                            {sortDes.slice(0,50)}...
                        </Card.Text>
                        <Link to="/DetailsService" onClick={()=>detailsHandler(props.service)}>Details</Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
        
    );
};

export default Services;