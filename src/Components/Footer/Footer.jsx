import React,{useEffect} from 'react'
import './footer.css'
import { FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineYoutube } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

import video2 from '../../Assets/video(2).mp4'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='footer'>
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-Aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-Aos="fade-up" type="text" placeholder='Enter Email Address' />
            <button data-Aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="" className='logo flex'>
                <MdOutlineTravelExplore className='icon' /> Travel.
              </a>
            </div>

            <div data-Aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus deleniti animi consequatur id explicabo excepturi fuga numquam debitis? Voluptate totam amet earum nisi accusantium veritatis, veniam reiciendis non officia?
            </div>

            <div data-Aos="fade-up" className="footerSocials flex">
              <AiOutlineTwitter className='icon' />
              <AiOutlineYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>

          <div className="footerLinks grid">
            <div data-Aos="fade-up"  data-Aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>
            </div>

            <div data-Aos="fade-up" data-Aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivgo
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>
            </div>

            <div data-Aos="fade-up" data-Aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>
            </div>


          </div>
          <div className="footerDiv flex">
              <small>BEST TRAVEL WEBSITE</small>
              <small>COPYRIGHTS RESERVED - RAMMANI 2023</small>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
