import React,{useEffect} from 'react'
import './main.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import agra from '../../pics/agra.jpg'
import bali from '../../pics/bali.jpg'
import bohol from '../../pics/Bohol.jpg'
import calgary from '../../pics/calgary.jpg'
import Salisbury from '../../pics/Salisbury.jpg'
import venice from '../../pics/venice.jpg'
import paris from '../../pics/paris.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc:agra,
    destTitle:"Taj Mahal",
    location:"India",
    grade:"Wonders of the world",
    fees:"$200",
    description:`Explore the Taj Mahal, an enchanting UNESCO World Heritage Site in Agra, India. 
    Marvel at its symmetrical beauty, intricate marble craftsmanship, and romantic history. 
    Immerse yourself in its serene gardens and reflective pools, capturing the essence of this timeless wonder. 
    A must-visit destination for an unforgettable travel experience.`
  },
  {
    id:2,
    imgSrc:bali,
    destTitle:"Handara Gate",
    location:"Indonesia",
    grade:"Exotic Places",
    fees:"$400",
    description:`Handara Gate is a breathtaking landmark located in Bali, Indonesia. 
    Nestled amidst lush greenery, this iconic gate features traditional Balinese architecture 
    and serves as a picturesque entrance to the Handara Golf & Resort. 
    With its stunning backdrop and cultural significance, 
    Handara Gate is a must-visit destination for a memorable travel experience.`
  },
  {
    id:3,
    imgSrc:bohol,
    destTitle:"Chocolate Hills",
    location:"Philippines",
    grade:"Rediscover Beauty",
    fees:"$350",
    description:`The Chocolate Hills, located in Bohol, Philippines, are an extraordinary natural wonder. 
    his unique geological formation consists of more than 1,000 cone-shaped hills that turn brown 
    during the dry season, resembling delicious chocolate mounds. A sight to behold, the Chocolate 
    Hills offer a mesmerizing landscape that captivates and delights travelers from around the world.`
  },
  {
    id:4,
    imgSrc:calgary,
    destTitle:"Banff National Park",
    location:"Canada",
    grade:"Relax",
    fees:"$1200",
    description:`Banff National Park, nestled in the Canadian Rockies, is a breathtaking wilderness haven. 
    With towering mountains, turquoise glacial lakes, and abundant wildlife, it's a paradise for 
    outdoor enthusiasts. Hike through ancient forests, spot grizzly bears, or soak in hot springs. 
    Banff National Park offers a majestic escape into nature's awe-inspiring beauty.`
  },
  {
    id:5,
    imgSrc:paris,
    destTitle:"Eiffel Tower",
    location:"France",
    grade:"UNESCO World Heritage Sites",
    fees:"$480",
    description:`The Eiffel Tower, an iconic symbol of Paris, France, 
    stands tall and proud as a testament to architectural brilliance. 
    Its intricate iron lattice design and panoramic views of the 
    city make it a must-visit attraction. From the vibrant Champs 
    de Mars at its base to the enchanting lights that illuminate 
    it at night, the Eiffel Tower promises an unforgettable 
    experience in the heart of the City of Love.`
  },
  {
    id:6,
    imgSrc:Salisbury,
    destTitle:"Stonehenge",
    location:"England",
    grade:"UNESCO World Heritage Sites",
    fees:"$500",
    description:`Stonehenge, a mystical prehistoric monument in England, 
    holds an enigmatic allure for visitors. 
    These ancient standing stones, 
    arranged in a mysterious formation, 
    evoke a sense of wonder and fascination. 
    With its rich history and captivating aura, 
    Stonehenge invites you to step into the past, 
    igniting curiosity and awe at this timeless marvel of human ingenuity.`
  },
  {
    id:7,
    imgSrc:venice,
    destTitle:"venice",
    location:"Italy",
    grade:"Explore",
    fees:"$500",
    description:`Venice, the enchanting city built on water in Italy, 
    is a true masterpiece of beauty and romance. Its iconic canals, 
    elegant gondolas, and exquisite architecture create a dreamlike atmosphere. 
    Explore the narrow alleys, visit historic landmarks like St. 
    Mark's Square and the Doge's Palace, 
    and immerse yourself in the Venetian culture and art. 
    Venice promises an unforgettable experience that transports you to a world of timeless charm and allure.`
}
  
]





const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])

  return (
    <section className='main container section'>
      <div className="secTitle">
        <h2 data-aos="fade-right"className='title'> Most Visited Destinations</h2>
      </div>
      <div className="secContent grid">
        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                <div key={id}  data-aos="fade-up" className='singleDestination'>
                  
                  <div className="imageDiv">
                    <img src={imgSrc} alt={destTitle}/>
                  </div>
                  <div className="cardInfo">
                    <h4 className='destTitle'>{destTitle}</h4>
                    <span className='continent flex'>
                      <HiOutlineLocationMarker className='icon'/>
                      <span classname="name">{location}</span>
                    </span>

                    <div className="fees flex">
                      <div className="grade">
                        <span>{grade}</span>
                      </div>
                      <div className="price">
                        <h5>{fees}</h5>
                      </div>
                    </div>
                    <div className="desc">
                      <p>{description}</p>
                    </div>
                    <button className="btn flex">DETAILS <HiOutlineClipboardCheck classname="icon"/></button>
                  </div>
                
                </div>

              )

          })
        }


      </div>
    </section>
  )
}

export default Main