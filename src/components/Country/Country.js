import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import CountryCart from '../CountryCart/CountryCart';
import './Country.css';
import img1 from '../../images/coaching/PhotoShowImage_webdevcode.com_20211004204233.jpg';

const Country = () => {
    const [countries, setcountries] = useState([]);
    useEffect(() => {
        fetch('./country.JSON')
            .then(res => res.json())
            .then(data => setcountries(data));
    }, [])

    return (
        <div >
            <div>
                <img src="https://www.webdevcode.com/wp/eastend/wp-content/uploads/2020/01/breadump-bg-service.jpg" class="img-fluid" alt="..." />
            </div>
            <div className="container">
                <div className="header-margin">
                    <p>POPULAR COUNTRY</p>
                    <h2>Immigration Country</h2>
                </div>

                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        countries.map(country => <CountryCart country={country} ></CountryCart>)
                    }
                </div>
            </div>
            <div>




            </div>


        </div>
    );
};

export default Country;