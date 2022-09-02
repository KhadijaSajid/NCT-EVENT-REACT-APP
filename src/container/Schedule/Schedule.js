import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import SchedulePost from '../../components/SchedulePost/SchedulePost'
import './Schedule.css'


const Schedule = () => {
  const [dayOne, setDayOne] = useState(true);
  const [dayTwo, setDayTwo] = useState(false);
  const [dayThree, setDayThree] = useState(false);

  const dayOneTrue = () => {
    setDayOne(true)
    setDayTwo(false)
    setDayThree(false)
  }
  const dayTwoTrue = () => {
    setDayOne(false)
    setDayTwo(true)
    setDayThree(false)
  }
  const dayThreeTrue = () => {
    setDayOne(false)
    setDayTwo(false)
    setDayThree(true)
  }

  return (
    <div>
      <Navbar />

      <div className='section-margin'>
        <p className='head'>Schedule</p>
        <p className='subhead'>Do not miss anything!</p>


      </div>
      <div className='section-margin schedule-div'>
        <div className='schedule-days'>
          <p onClick={dayOneTrue}>Day1</p>
          <p onClick={dayTwoTrue}>Day2</p>
          <p onClick={dayThreeTrue}>Day3</p>

        </div>
        <div>

          {dayOne ? <SchedulePost date="19th Sept 2022" speaker1="Walter White" info1="Amet consectetur  Lorem ipsum dolor sit,adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time1="9:30am - 11:30am"
            speaker2="Antartica georgia" info2="Modi atque recusandae Lorem ipsum dolor sit, amet consectetur adipisicing elit.  doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time2="12:30 - 2:30pm"
            speaker3="Han Son Yan" info3="consectetur Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time3="3:00 - 5:30pm" />

            : dayTwo ? <SchedulePost date="20th Sept 2022 " speaker1="Antartica georgia" info1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time1="12:30 - 2:30pm"
              speaker2="Bat Cunning" info2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time2="2:30 - 4:30pm"
              speaker3="Simon Ben" info3="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A.s" time3="5:00 - 6:30pm" />

              : dayThree ? <SchedulePost date="21st Sept 2022" speaker1="Han Son Yan" info1="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time1="9:30 - 10:30am"
                speaker2="Karen White" info2="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time2="11:30 - 1:30pm"
                speaker3="Walter White" info3="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore! A." time3="2:30 - 5:00pm" />

                : null
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Schedule;