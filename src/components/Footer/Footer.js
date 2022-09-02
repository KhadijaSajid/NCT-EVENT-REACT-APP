import React from 'react';
import './Footer.css';
import facebook from '../../assets/facebook.ico'
import twitter from '../../assets/twitter.ico'
import linkedin from '../../assets/linkedin.ico'
import youtube from '../../assets/youtube_logo.ico'
import { Link } from 'react-router-dom';


const Footer = () => {
    let year = new Date().getFullYear();

    return (
        <div className='footer-mainDiv section-padding'>
            <div className='footer-subdiv1'>
                <Link to="/" className='Link'><p>Home</p></Link>
                <Link to="/speakers" className='Link'><p>Speakers</p></Link>
                <Link to="/schedule" className='Link'><p>Schedule</p></Link>
                <Link to="/blog" className='Link'><p>Blog</p></Link>
                <Link to="/registration" className='Link'><button>Registration</button></Link>
            </div>
            <div className='footer-subdiv2'>
                <div className='footer-copywrite'>
                    <p>Khadija Sajid | @ Copywrite {year} | Disclaimer | Privacy Policy | Sitemap</p>
                </div>
                <div className='footer-icons'>
                    <img src={facebook} alt="facebook" />
                    <img src={twitter} alt="twitter" />
                    <img src={linkedin} alt="linedin" />
                    <img src={youtube} alt="youtube" />

                </div>
            </div>


        </div>
    )
}

export default Footer;