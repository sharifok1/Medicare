import React from 'react';
import './Header.css';
import bannerImg from './banner.jpg'

const Header = () => {
    return (
        <div>
            {/* navbar///================ */}
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                  <h1>MediCare</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <button>Home</button>
                        </li>
                        <li className="nav-item">
                        <button>Happy Clinets</button>
                        </li>
                    </ul>
                    <div className="d-flex">
                     <button>log in</button>
                    </div>
                    </div>
                </div>
                </nav>
            </div>

            {/* baner======================= */}
            <div className="banner row" >
                <div className="col-md-6 col-sm-4">
                </div>
                <div className="baner-txt col-md-6 col-sm-8">
                <h3>Your Health is our priority</h3>
                <h1>MediCare Helth Service</h1>
                <h5>It is the great opportunity to receive high-Quality medical help</h5>
                </div>
            </div>
        </div>
    );
};

export default Header;