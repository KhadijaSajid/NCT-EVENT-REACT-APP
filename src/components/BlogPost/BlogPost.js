import React from 'react';
import "./BlogPost.css"


const BlogPost = ({ img, date, info }) => {
    return (
        <div className='section-margin blogpost-div'>
            <div>
                <img className='blog-img' src={img} />
            </div>
            <div className='blog-pad'>
                <p className='blog-date'>{date}</p>
                <p className='blog-info'>{info}</p>
            </div>
        </div>
    )
}

export default BlogPost;