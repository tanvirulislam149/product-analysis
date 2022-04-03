import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../Hook/Hook';
import Review from '../Review/Review';

const AllReview = () => {
    const [reviews] = useReview();

    return (
        <div className='container mb-4'>
            <h1 className='text-danger my-3'>Movie Review</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    reviews.map(review => <Review key={review.id} reviewer={review}></Review>)
                }
            </Row>
        </div>
    );
};

export default AllReview;