import React,{useEffect} from "react";
import "./home.css";
import videoo from "../../pics/videoo.mp4";
import { GrLocation } from "react-icons/gr";
import { HiFilter } from "react-icons/hi";
import { FiFacebook } from "react-icons/fi";
import { SiTripadvisor } from "react-icons/si";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaTwitter} from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={videoo} muted autoPlay loop type="video.mp4"></video>

      <div className="homeContent Container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">Our packages</span>
          <h1 data-aos="fade-up" className="homeTitle">Search your Holidays</h1>
        </div>

        <div data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search Your Destination: </label>
            <div className="input flex">
              <input type="text" placeholder="Where would you like to go" />
              <GrLocation className="icon" />
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">Select Your Date:</label>
            <div className="input flex">
              <input type="date" />
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max Price:</label>
              <h3 className="total">$5000</h3>
            </div>
            <div className="input flex">
              <input type="range" max="5000" min="1000" />
            </div>
          </div>

          <div classname="searchOptions flex">
              
              <button className="filter"><HiFilter/> MORE FILTERS</button>
          </div>
        
        </div>
      
        <div data-aos="fade-up" className="homeFooterIcons flex">
          <div className="rightIcons">
            <FiFacebook className="icon"/>
            <AiOutlineInstagram className="icon"/>
            <SiTripadvisor className="icon"/>
            <FaTwitter className="icon"/>
          </div>

          
        </div>
      </div>
    </section>
  )
};

export default Home;
