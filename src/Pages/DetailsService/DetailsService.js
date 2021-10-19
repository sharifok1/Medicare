import React from 'react';
import { useParams } from 'react-router';

const DetailsService = () => {
    const {serviceId}=useParams();
    console.log(useParams())
   
    return (
        <div>
            <h1>Services no. {serviceId}</h1>
        </div>
    );
};

export default DetailsService;