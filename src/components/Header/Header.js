import React from 'react'
import './Header.css'
import Event from '../../assets/event.jpg'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div className='Header-maindiv'>

                <img src={Event} />
                <div className='absolute'>
                    <p className='p' >NCT</p>
                    <Link to="/registration">
                        <button className='button'>Book your seat</button>
                    </Link>
                </div>
            </div>
        </div>
    )

}

export default Header;