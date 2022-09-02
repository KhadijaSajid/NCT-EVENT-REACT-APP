import React from 'react';
import './TicketPricing.css'

const Ticket = ({ name, price, deets1, deets2, deets3, deets4, deets5, deets6, deets7, deets8 }) => {
    return (
        <div className='ticket'>
            <p className='day'>{name}</p>
            <div className='price-div'>
                <p>{price}</p>
            </div>
            <div className='details'>
                <p>{deets1}</p>
                <p>{deets2}</p>
                <p>{deets3}</p>
                <p>{deets4}</p>
                <p>{deets5}</p>
                {/* <p>{deets6}</p>
                <p>{deets7}</p>
                <p>{deets8}</p> */}
            </div>

            <button>Get Your Ticket </button>

        </div>
    )
}

export default Ticket;