import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import "./Registration.css"
import Ticket from '../../components/TicketPricing/TicketPricing'
import Event from '../../assets/eventForm.jpg'

const Resgistration = () => {
  return (
    <div>
      <Navbar />
      <div className='section-margin head'>
        <p className='headp'>Program Pricing</p>
        <p className='subhead'> There arge many variations ohf passages of sorem gp ilable, but the majority have ssorem gp iluffe.</p>
      </div>
      <div className='ticket-price section-margin'>

        <Ticket name="Day 1" price="$10"
          deets1="lorem kahs  aiqy epj"
          deets2="ewfew kahs hsta  aiqy epj djkhkj"
          deets3=" sfsdf hsta  aiqy epj"
          deets4="fefwe efef kh aiqy epj"
          deets5="efwe kahs fwefwe  fkgjf aiqy epj"

        />

        <Ticket name="Day 1-2" price="$25"
          deets1="lorem kahs  aiqy epj"
          deets2="ewfew kahs hsta  aiqy epj djkhkj"
          deets3=" sfsdf hsta  aiqy epj"
          deets4="fefwe efef kh aiqy epj"
          deets5="efwe kahs fwefwe  fkgjf aiqy epj"

        />

        <Ticket name="Day 1-3" price="$50"
          deets1="lorem kahs hsta  aiqy epj"
          deets2="ewfew afs hsta  epj"
          deets3="lorem sfsdf hffssta  aiqy epj"
          deets4="afaf efef hsta  aiqy epj"
          deets5="efwe kahs fwefwe war aiqy epj"
        />



      </div>
      <br />
      <br />
      <br />

      <div className='section-margin'>
        <p className='head'>Registration</p>
        <p className='subhead'>Register Now!!</p>
        <div className='form-flex'>

          <div className='form'>
            <form >
              <p>Name: </p>
              <input type="text" placeholder='Name'></input>
              <br />
              <p>Email Address: </p>
              <input type="email" placeholder='Email'></input>
              <br />

              <p>Phone number: </p>
              <input type="number" placeholder='phone number'></input>
              <br />

              <p>Day Package</p>

              <select name='Package' >
                <option value="day1">Day1</option>
                <option value="day2">Day2</option>
                <option value="day3">Day3</option>

              </select>

              <br />

              <p>Number of people</p>

              <select name='people' >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>

              </select>

              <br />

              <p>Suggestions/Queries: </p>
              <textarea placeholder='Any suggestions are welcomed'></textarea>

              <br />

              <button className='submit'>Submit</button>
            </form>
          </div>


          <div className='img-div'>
            <img className='image' alt='event' src={Event} />
          </div>
        </div>
      </div>
      <br />
      <br />

      <Footer />

    </div>
  )
}

export default Resgistration