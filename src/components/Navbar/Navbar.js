import React, { useState } from 'react';
import './Navbar.css';
import { RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const Menu = () => {
        return (
            <>
               <Link to="/" className='Link'><p>Home</p></Link>
                <Link to="/speakers" className='Link'><p>Speakers</p></Link>
                <Link to="/schedule" className='Link'><p>Schedule</p></Link>
                <Link to="/blog" className='Link'><p>Blog</p></Link>
                <Link to="/registration" className='Link'>   <button>Registration</button></Link>
            </>

        )
    }
    const [toggleMenu, setToggleMenu] = useState(false)
    return (
        <div className='Navbar-maindiv section-padding'>
            <div className='Navbar-subdiv1'>
                <p>NCT</p>
            </div>
            <div className='Navbar-subdiv2'>
                <Menu />
            </div>
            <div className='Navbar-toggle'>
                {toggleMenu ?
                    <RiCloseLine color="fff" onClick={() => {
                        setToggleMenu(false)
                    }} />
                    :
                    <RiCloseLine color="fff" onClick={() => {
                        setToggleMenu(true)
                    }} />
                }
                {toggleMenu && (
                    <div className=' Navbar-toggle-design' >
                        <Menu />
                    </div>
                )}

            </div>
        </div>
    )
}

export default Navbar;