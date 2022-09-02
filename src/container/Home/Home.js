import React from 'react';
import "./Home.css"
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const Home = () => {
    return (
        <div className='Home-maindiv'>
            <Navbar />
            <Header />


            <div className='Home-About section-margin'>
                <div className='Home-Conf'>
                    <p>The Biggest Conference in Town</p>
                </div>
                <div className='Home-Conf2'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                        Lorem ipsum dolor sit, abus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.
                    </p>

                </div>

            </div>
            <br /> 
            <p className='when-where section-margin'>When & Where</p>

            <div className='Home-Location section-margin'>
                <div className='Home-location-details'>
                    <div className='Home-flex'>
                        <div className='heading'><p>Venue: </p></div>
                        <div className='content'><p>Effile Tower Park </p></div>

                    </div>
                    <div className='Home-flex'>
                        <div className='heading'><p>Address: </p></div>
                        <div className='content'><p>Champ de Mars, 5 Av. Anatole France, 75007 Paris, France Champ De Mars </p></div>

                    </div>
                    <div className='Home-flex'>
                        <div className='heading'><p>Date: </p></div>
                        <div className='content'> <p>19th-21st September 2022</p></div>

                    </div>
                    <div className='Home-flex'>
                        <div className='heading'><p>Time: </p></div>
                        <div className='content'><p> 9:00am-6:00pm</p></div>

                    </div>
                 


                </div>
                <div>
                    <iframe title='map' className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10499.966498430253!2d2.2944813!3d48.8583701!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2s!4v1661094873604!5m2!1sen!2s" ></iframe>

                </div>

            </div>
<br /><br />

            <Footer />
        </div>
    )

};

export default Home;
