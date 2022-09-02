import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Speakers.css'
import woman1 from "../../assets/woman1.jpg"
import woman2 from "../../assets/woman2.jpg"
import woman3 from "../../assets/woman3.jpg"
import man1 from "../../assets/man1.jpg"
import man2 from "../../assets/man2.jpg"
import man3 from "../../assets/man3.jpg"
import twitter from '../../assets/twitter.ico'
import linkedin from '../../assets/linkedin.ico'
import facebook from '../../assets/facebook.ico'




const Speakers = () => {
  return (
    <div className='Speakers-mainDiv' >
      <Navbar />

      <div className='section-padding'>
        <p className='speakers-p'>The Most Important Speakers</p>
        <p className='speakers-p1'>There arge many variations ohf passages of sorem gpsum ilable,
          but the majority have suffered alteration in.</p>
      </div>

      <div className='speakers-flex1 section-padding'>
        <div className="img-relative">
          <img className='img img1' src={woman3} alt="woman" />
          <div className='para-overlay '>
            <p className='para-name'>Antartica georgia</p>
            <p>Founder</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>

        <div className="img-relative">
          <img className='img img1' src={man1}  alt="man"  />
          <div className='para-overlay '>
            <p className='para-name'>Walter White</p>
            <p>Co- Founder</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>


        <div className="img-relative">
          <img className='img img1' src={woman1}  alt="woman"  />
          <div className='para-overlay '>
            <p className='para-name'>Han Son Yan</p>
            <p>Co-Founder</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>




      </div>

      <div className='speakers-flex1 section-padding'>

        <div className="img-relative">
          <img className='img img1' src={man2}  alt="man" />
          <div className='para-overlay '>
            <p className='para-name'>Bat Cunning</p>
            <p>Manager</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>



        <div className="img-relative">
          <img className='img img1' src={man3}  alt="man"  />
          <div className='para-overlay '>
            <p className='para-name'>Simon Ben</p>
            <p>Writer</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>



        <div className="img-relative">
          <img className='img img1' src={woman2}  alt="woman"  />
          <div className='para-overlay '>
            <p className='para-name'>Karen White</p>
            <p>Publisher</p>
            <p className='para-deets'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi atque recusandae doloribus sapiente id vel ipsum earum quos soluta laborum, nam accusantium vero non enim iure veniam, assumenda tempore
            </p>
            <div>
              <img src={twitter} alt="twitter" />
              <img src={facebook} alt="facebook" />
              <img src={linkedin} alt="linkedin" />
            </div>

          </div>
        </div>




      </div>
      <br /><br /><br />

      <p className='speakers-presence'>Looking forward to your presence!!</p>

      <Footer />
    </div>
  )
}

export default Speakers