import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import CoachinCart from '../CoachingCart/CoachinCart';
import './Coaching.css'
import img1 from '../../images/coaching/PhotoShowImage_webdevcode.com_20211004204233.jpg'

const Coaching = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('./coaching.JSON')
            .then(res => res.json())
            .then(data => setItems(data));
    }, [])

    return (
        <div >
            <div>
                <img src={img1} class="img-fluid" alt="..." />
            </div>
            <div className="container">
                <div className="header-margin ">
                    <p>STUDY FOR ABROAD</p>
                    <h1>Coaching For Immigration</h1>
                </div>

                <Row xs={2} md={3} className="g-4">
                    {
                        items.map(item => <CoachinCart item={item}></CoachinCart>)
                    }
                </Row>
            </div>

        </div>
    );
};

export default Coaching;