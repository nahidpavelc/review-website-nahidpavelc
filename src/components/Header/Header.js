import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/study.png';
import './Header.css';

const Header = () => {
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                <a className="navbar-brand " href="#">
                    <img className="logo pe-3" src={logo} alt="" />
                    StudyABC
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="d-flex justify-content-end">
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a><NavLink className="nav-link" to="/Home"> Home</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a><NavLink className="nav-link" to="/coaching"> Coaching</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a><NavLink className="nav-link" to="/Service">Services</NavLink></a>
                            </li>
                            <li className="nav-item">
                                <a><NavLink className="nav-link" to="/Country">Country</NavLink></a>
                            </li>
                            <a></a>
                            <li className="nav-item">
                                <a><NavLink className="nav-link" to="/about"> About us</NavLink></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Header;