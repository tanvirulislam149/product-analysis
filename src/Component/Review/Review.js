import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./Review.css"

const Review = (props) => {
    const { name, review, rating } = props.reviewer;
    return (
        <div>
            <Col>
                <Card>
                    <Card.Body className='review'>
                        <Card.Title>
                            <h2>{name}</h2>
                        </Card.Title>
                        <Card.Text className='fw-bold'>
                            {review}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className='fw-bold'>
                        Rating: {rating}
                    </Card.Footer>
                </Card>
            </Col>
        </div>
    );
};

export default Review;