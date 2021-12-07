import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import './CoachingCart.css';
import './CoachingCart.css';

const CoachinCart = (props) => {
    // console.log(props.item) //Show item 
    const { name, img, url } = props.item;

    return (
        <div>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <a href={url} type="button" class="btn btn-success">Learn More</a>
            </Card.Body>
        </div>
    );
};

export default CoachinCart;