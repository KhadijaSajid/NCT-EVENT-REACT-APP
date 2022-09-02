import React from 'react';
import "./SchedulePost.css"

const SchedulePost = ({ date, speaker1, info1, time1, speaker2, info2, time2, speaker3, info3, time3 }) => {
    return (
        <div className='post-div'>
            <p className='date'>{date}</p>
            <div className='speaker'>
                <p className='name'>{speaker1}</p>
                <p>{info1}</p>
                <p className='time'>{time1}</p>
            </div>

            <hr />

            <div className='speaker'>

                <p className='name'>{speaker2}</p>
                <p>{info2}</p>
                <p className='time'>{time2}</p>
            </div>

            <hr />

            <div className='speaker'>

                <p className='name'>{speaker3}</p>
                <p>{info3}</p>
                <p className='time'>{time3}</p>
            </div>
        </div>
    )
}

export default SchedulePost;