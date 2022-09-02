import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Blog.css'
import BlogPost from '../../components/BlogPost/BlogPost'
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import blog4 from '../../assets/blog4.jpg'
import blog5 from '../../assets/blog5.jpg'
import blog6 from '../../assets/blog6.jpg'
import blog7 from '../../assets/blog7.jpg'
import blog8 from '../../assets/blog8.jpg'
import blog9 from '../../assets/blog9.jpg'

const Blog = () => {
  return (
    <div>
      <Navbar />
      <div className='section-margin blog-heading'>
        <p className='blog-latest'>Latest News</p>
        <p className='blog-sub'>Do not miss anything</p>
      </div>

      <div className='blog-flex'>

        <BlogPost img={blog1} date="10th November" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog2} date="25th March" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog3} date="31st July" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />

      </div>

      <div className='blog-flex'>
        <BlogPost img={blog4} date="18th December" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog5} date="3rd March" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog6} date="22nd April" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />

      </div>
      <div className='blog-flex blog3'>
        <BlogPost img={blog7} date="1st Feburary" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog8} date="8th August" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />
        <BlogPost img={blog9} date="6th June" info="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." />

      </div>
      <Footer />
    </div>
  )
}

export default Blog