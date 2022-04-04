import React from 'react';

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='mt-3'> <u>(1)Que:  What is Context API?</u> </h2>
            <h2>Ans: In React, we can send data only from top to bottom. And it is only done by props. You can send data from parent to child by using props. For this, if you want to send data from parent to grandchildren, there is only way to do this is props and by this every component will get the data and then send it to other. This is called PROPS DRILLING. To avoid PROPS DRILLING, Context API can be used. It can send data from any component to another without using props. </h2>
            <h2 className='mt-3'><u>(2)Que: Difference between inline and block elements?</u> </h2>
            <h2>Ans: Some tags take the full width of the browser like heading, paragraph and some tags take only the width of the elements like span, strong. Full width taking tags are called block elements and the tags take only its own size is called inline elements. We can put inline tags in the same line but block elements take the full block and can be put in another line only.</h2>
        </div>
    );
};

export default Blogs;