import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Services.css";


const Services = ({service}) => {
    const {name,img, sortDes}=service;
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
                        <button>Details</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Services;