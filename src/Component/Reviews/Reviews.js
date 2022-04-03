import React from 'react';
import { Row } from 'react-bootstrap';
import useReview from '../Hook/Hook';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReview();
    const newReviews = reviews.slice(0, 3);
    return (
        <div className='container mb-4'>
            <h1 className='text-danger my-5'>Movie Review (3)</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    newReviews.map(review => <Review key={review.id} reviewer={review}></Review>)
                }
            </Row>
        </div>
    );
};

export default Reviews;