import React from 'react';
import { Col } from 'react-bootstrap';

const Review = (props) => {
    const { name, review, rating } = props.reviewer;
    return (
        <div>
            <Col>
                <div>
                    <h2 className='fw-bold'>{name}</h2>
                    <p className='fw-bold'>{review}</p>
                    <p className='fw-bold'>Rating: {rating}</p>
                </div>
            </Col >
        </div >
    );
};

export default Review;