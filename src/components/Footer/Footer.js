import React from 'react';
import ReactDOM from 'react-dom'
import logo from '../../images/study.png'
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faSearch } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Footer = () => {

    const element = <FontAwesomeIcon icon={faAddressBook} />

    return (
        <div className="container">
            <h1 className="text-center header-margin color1">Contact us</h1>
            <div >
                <div className="card-group">
                    <div className="card fo-card">
                        <div className="card-body">
                            <h3 className="card-title">
                                {/* <img className="logo pe-3" src={logo} alt=""/> */}
                                StudyABC</h3>
                            <hr />
                            <p className="card-text">
                                There anyone who loves pursues not some great to have pleasure.
                            </p>
                            <p style={{ marginBottom: 0 }}>
                                We are immigration company to pulled word and phrases from the humanitarian to come up with winning chunks of lorem.
                            </p>
                        </div>
                        <div className="card-footer d-flex justify-content-start" style={{ paddingTop: 0 }}>
                            <a href="https://www.google.com">
                                <FontAwesomeIcon className="footer-icon" icon={faAddressBook} size="1x" />
                            </a>
                            <a href="https://www.google.com">
                                <FontAwesomeIcon className="footer-icon" icon={faAddressBook} size="1x" />
                            </a>
                            <a href="https://www.google.com">
                                <FontAwesomeIcon className="footer-icon" icon={faAddressBook} size="1x" />
                            </a>
                            <a href="https://www.google.com">
                                <FontAwesomeIcon className="footer-icon" icon={faAddressBook} size="1x" />
                            </a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h3>Visa Types</h3>
                            <hr />
                            <a className="font-style" href="#">- Busienss Visa </a><br />
                            <a className="font-style" href="#">- Student Visa </a><br />
                            <a className="font-style" href="#">- Family Visa </a><br />
                            <a className="font-style" href="#">- Work Visa </a><br />
                            <a className="font-style" href="#">- Immigrate Visa </a><br />
                            <a className="font-style" href="#">- Transit Visa </a><br />
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">
                            <h3 className="card-title">Our Country</h3>
                            <hr />
                            <a className="font-style" href="#">- United States </a><br />
                            <a className="font-style" href="#">- Australia </a><br />
                            <a className="font-style" href="#">- United Kingdom </a><br />
                            <a className="font-style" href="#">- Switzerland </a><br />
                            <a className="font-style" href="#">- Malaysia </a><br />
                            <a className="font-style" href="#">- Singapore </a><br />
                        </div>
                        <div className="card-footer">
                            {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">

                            <h3 className="card-title">Newsletter</h3>
                            <hr />
                            <form class="row g-3">
                                <label >
                                    <input type="text" name="name" />
                                </label>
                                <div class="col-auto">
                                    <button type="submit" class="btn btn-success mb-3">
                                        <FontAwesomeIcon className="" style="" icon={faSearch} size="1x" />
                                    </button>
                                </div>
                            </form>



                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default Footer;