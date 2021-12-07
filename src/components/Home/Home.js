import React from 'react';
import ReactDOM from "react-dom";
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Card, Carousel, Col, ListGroup, ListGroupItem, Row } from 'react-bootstrap';
import slide1 from '../../images/Home/slide (2).jpg';
import slide2 from '../../images/Home/slide.jpg';
import slide3 from '../../images/Home/slide (2).jpg';
import pro1 from '../../images/Home/profile1.jpg'
import pro2 from '../../images/Home/profile.jpg'

const Home = () => {

    return (
        <div>
            {/* slide */}
            <div>
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Education Overseas</h2>
                            <p>We are partner with global university of CANADA</p>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Aboard Immigration</h2>
                            <p>Immigration Consultation for Aboard Education</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slide3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Welcome to the Eastend agency</h2>
                            <p>Since 1980 we are experts
                                in Immigration  Visa
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            {/* About us */}
            <div className="container container-mar d-flex justify-content-around">

                <div class="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <img
                                class="img-fluid rounded-start"
                                src="https://images.unsplash.com/photo-1432611185496-76ccd1dc5efe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                                alt="new"
                            />
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <small>About us</small>
                                <h2 class="card-title" style={{ color: '#3A3934' }}>Eastend Visa Consulting</h2>
                                <p class="card-text">There anyone who loves or pursues nor desires to obtain pain of itself, bet it is pain, but because occasionally can non dis nostra integer eleifend eros nulla senectus</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-circle-right"></i> Our Mission</h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}> <i class="fas fa-chevron-circle-right"></i> Our Strategy</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/* Service  */}
            <div className="container">

                <p className="text-center">OUR SERVICE</p>
                <h1 className="ser-txt">Service We Provide</h1>
                <div class="row row-cols-1 row-cols-md-4 g-4">

                    <div class="col">
                        <div class="card h-100">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-1958631-1653042.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-success">Success</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-1958631-1653042.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-success">Success</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-1958631-1653042.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-success">Success</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100">
                            <img src="https://cdni.iconscout.com/illustration/premium/thumb/business-startup-1958631-1653042.png" class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                            </div>
                            <div class="card-fo">
                                <button type="button" class="btn btn-outline-success">Success</button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/*Provide Experts */}
            <div className="container container-mar d-flex justify-content-around">

                <div class="card mb-3 bo-remove" style={{ width: '540px;', }}>
                    <div class="row g-0">
                        <div class="col-md-6">
                            <div class="card-body">
                                <small>WHY CHOOSE US</small>
                                <h2 class="card-title" style={{ color: '#3A3934' }}>Eastend Visa Consulting</h2> <hr />
                                <p class="card-text">We Provide Experts To Create Great Value For Your Visa</p>

                                <h4 style={{ color: '#3A3934' }}> <i class="fas fa-chevron-right"></i>  Real Time Status </h4>
                                <p>Mission lorem people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-right"></i> Experience Expert Team</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                                <h4 style={{ color: '#3A3934' }}><i class="fas fa-chevron-right"></i> Live Chat With Our Team</h4>
                                <p>Strategy ispurm people you are testing with will bring up questions that lorem. They will give you ispurm of similar things they use that might help you.</p>

                            </div>
                        </div>
                        <div class="col-md-6">
                            <img
                                class="img-fluid rounded-start"
                                src="https://images.unsplash.com/photo-1536158614364-49b81421db1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
                                alt="new"
                            />
                        </div>
                    </div>
                </div>

            </div>

            {/* Customare  */}
            <div className="container">
                <p className="text-center">TESTIMONIAL</p>
                <h1 className="ser-txt">Customer Feedback</h1>

                <div className="container">
                    <div class="row row-cols-1 row-cols-md-3 g-4">

                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h2><i class="fas fa-users"></i></h2>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="card-img-top img-round" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Jhon Adam</h5>
                                    <p class="card-text">Ucraine</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h2><i class="fas fa-users"></i></h2>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="card-img-top img-round" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Jhon Adam</h5>
                                    <p class="card-text">Ucraine</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 text-center card-shadow">
                                <h2><i class="fas fa-users"></i></h2>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content.This content is a little bit longer.</p>
                                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80" class="card-img-top img-round" alt="..." />
                                <div class="card-body">
                                    <p class="color2">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                    </p>
                                    <h5 class="card-title">Jhon Adam</h5>
                                    <p class="card-text">Ucraine</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* visa  */}
            <div className="container container-mar justify-content-center">
                <div className="text-center header-margin">
                    <p>POPULAR COUNTRY</p>
                    <h1>Immigration Country!</h1>
                </div>

                <div class="row row-cols-1 row-cols-md-6 g-3">
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/153-united-states-of-america_new.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/262-united-kingdom.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/130-australia.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/206-canada.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2020/01/097-switzerland.png" class="card-img-top" alt="..." />
                        </div>
                    </div>
                    <div class="col">
                        <div class="card">
                            <img src="https://webdevcode.com/wp/eastend-demo/wp-content/uploads/2019/12/141-singapore.png" class="card-img-top" alt="..." />
                        </div>
                    </div>

                </div>
            </div>





        </div >
    );
};
export default Home;