import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import ServiceCart from '../ServiceCart/ServiceCart';
import img1 from '../../images/sevice/header.jpg';

const Services = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('./service.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div>
            <div>
                <img src={img1} alt="" />
            </div>
            <div className="container">
                <div className="header-margin">
                    <p>OUR SERVICE</p>
                    <h1>Services We Provide</h1>
                </div>
                <Row xs={2} md={3} className="g-4">
                    {
                        items.map(item => <ServiceCart item={item}> </ServiceCart>)
                    }
                </Row>
            </div>
        </div>
    );
};

export default Services;