import React from 'react';
import Reviews from '../Reviews/Reviews';
import "./Home.css"

const Home = () => {
    return (
        <div>
            {/* Banner Section  */}
            <section className='d-flex justify-content-around m-5'>
                <div className='p-5 m-5'>
                    <h1 className='pt-5 text-danger fw-bold'>Spiderman-No Way Home</h1>
                    <h4>Here you can see the reactions of people after watching the movie <span className='text-danger'>Spiderman-No Way Home</span></h4>
                </div>
                <div>
                    <img className='poster' src="https://m.media-amazon.com/images/M/MV5BZWMyYzFjYTYtNTRjYi00OGExLWE2YzgtOGRmYjAxZTU3NzBiXkEyXkFqcGdeQXVyMzQ0MzA0NTM@._V1_FMjpg_UX1000_.jpg" alt="" />
                </div>
            </section>

            <Reviews></Reviews>
        </div>
    );
};

export default Home;