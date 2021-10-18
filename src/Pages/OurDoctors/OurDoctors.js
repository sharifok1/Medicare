import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../DoctorUi/Doctor';

const OurDoctors = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        const url ="DoctorFakeData.json"
        fetch(url)
        .then(res => res.json())
        .then(data =>setData(data))
    },[]);

    return (
        <div className="container py-4">
           <Row xs={1} md={2} lg ={4} className="g-4">
                {
                    data.map(doctor=> <Doctor
                    key={doctor.id}
                    doctorData={doctor}
                    />)
                }
            </Row>
        </div>
    );
};

export default OurDoctors;