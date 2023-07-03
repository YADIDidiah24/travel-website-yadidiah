import React,{useEffect} from 'react'
import './footer.css'
import video2 from '../../pics/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaTripadvisor } from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type='video/mp4'></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div data-aos="fade-up" className="inputDiv flex">
              <input type='text' placeholder='Your Email Address? '/>
              <button data-aos="fade-up" className='btn flex' type='submit'>
                SEND <FiSend classname="icon"/>
              </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#'className='logo flex'>
                <MdOutlineTravelExplore className='icon'/>Travel...
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              <h2>Discover Your Next Adventure</h2>
                <p>Explore the world with our curated collection of destinations and travel experiences.</p>
            
              <h2>Stay Connected</h2>
                <p>Subscribe to our newsletter to receive the latest travel deals,
                  destination guides, and insider tips.</p>
            
              
                <h2>Contact Us</h2>
                <p>Have any questions or need assistance? Our dedicated customer support team is here to help. 
                  </p>
            
              
                <h2>Follow Us</h2>
                <p>Stay connected with us on social media to get a glimpse of breathtaking destinations, 
                  travel inspiration, and real-life travel stories. </p>
            </div>

            <div data-aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillInstagram className='icon'/>
              <FaTripadvisor className='icon'/>

            </div>
          </div>
          <div data-aos="fade-up" className="footerLinks grid">
            <div className="linkGroup">
              <span className="groupTitle">OUR AGENCY</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Services
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Insurance
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Agency
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Tourism
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Payment
              </li>

            </div>

            <div className="linkGroup">
              <span className="groupTitle">PARTNERS</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Bookings
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Car Rental
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Hostel Rooms
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Hotels
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Trivago
              </li>

            </div>

            <div className="linkGroup">
              <span className="groupTitle">LAST MINUTE</span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                London
              </li>
              
              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Dubai
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Berlin
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Africa
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                Oceania
              </li>

            </div>
          </div>

          <div className="footerDiv flex">
            <small>TRAVEL WEBSITE</small>
            <small>COPYRIGHT - YADIDIAH KANAPARTHI 2023</small>
          </div>
        </div>

        
      </div>
    </section>
  )
}

export default Footer