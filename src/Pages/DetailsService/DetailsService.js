
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import fakeData from "../../Utilities/fakeData";
import "./DetailsService.css";
const DetailsService = () => {
    
    const {serviceId}=useParams();
  
   
    const itemsId = fakeData.find((s)=>s.id===parseInt(serviceId));
    const {name,img,sortDes}=itemsId;
   
    return (
        <div className="container m-4 p-4">
           <Row md={1} >       
            <Col md={6} className="mt-4">
             <Card className='card-style mt-4'>
                 <Card.Img className="img-height img-fluid " variant="top" src={img} />
                </Card>
            </Col>
            <Col md={6} className="p-4" >
                <h1>{name}</h1>
                <p className="details-des">{sortDes}</p>
               <div className="m-4 p-4">
               <Link to="/Home" ><button className="btn btn-primary">Go to Home</button></Link>
               </div>
            </Col>
           </Row>
        </div>
    );
};

export default DetailsService;