import React from 'react';
import { Card, Col } from 'react-bootstrap';

const ServiceCart = (props) => {

    const { name, img } = props.item;

    return (
        <div>
            <div className="container">
                <Col>
                    <Card>
                        <Card.Img variant="top" src={img} />
                        <Card.Body>
                            <Card.Title>{name}</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </div>
        </div>
    );
};

export default ServiceCart;