import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const Notfound = () => {
    return (
        <div className="page404">
            <h3>
                Sorry!! page are not avilable thats you are <br />
                trying to access
            </h3>
            <p>
            <Link to="/LoadData">
            <button className="btn btn-primary go-to-home">Go to Home</button>
            </Link>
            </p>
           
        </div>
    );
};

export default Notfound;