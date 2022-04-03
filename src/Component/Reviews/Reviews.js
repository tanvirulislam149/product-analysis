import React from 'react';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import useReview from '../Hook/Hook';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews] = useReview();
    const newReviews = reviews.slice(0, 3);
    const navigate = useNavigate();
    const allReview = () => {
        const path = "/allReview";
        navigate(path);
    }
    return (
        <div className='container mb-4'>
            <h1 className='text-danger my-5'>Movie Review (3)</h1>
            <Row xs={1} md={3} className="g-4">
                {
                    newReviews.map(review => <Review key={review.id} reviewer={review}></Review>)
                }
            </Row>
            <button onClick={allReview} className='btn btn-danger fw-bold'>See All Reviews</button>
        </div>
    );
};

export default Reviews;