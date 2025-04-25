"use client";
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMail } from 'react-icons/lu';
import Contact from '../components/Contact';
import TestimonialSlider from '../components/TestimonialSlider';


export default function Cabinets() {

  const [selected, setSelected] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<div className="background-video-container">
          <video autoPlay muted loop playsInline className="background-video">
            <source src="/images/herovideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="gradient">
          <div className="slogan">
            NEW BUILDS<br></br>
            ADD-ONS<br></br>
            REMODELS<br></br>
            <Link href="#first-section" id="getStarted">GET STARTED</Link>
          </div>
        </div>
      </div>*/}
      <div className="backgroundimage" id="hvachero">
      <div className="gradient" id="gradient">
          <div className="slogan">
            EFFICIENT<br></br>
            FLEXIBLE<br></br>
            FUNCTIONAL<br></br>
            <Link href="#first-section" id="getStarted">GET STARTED</Link>
          </div>
        </div>
      </div>
      {/* <div className="backgroundimage grey"></div> */}
      
      <h1 id='help'>WE SPECIALIZE IN DUCTLESS MINI-SPLITS</h1>
      <div className="columns">
      
        <div className="col-text">
          <h1>Energy Efficient</h1>
          <p>{`Mini-split systems deliver heating and cooling right where you need it—without
             the energy loss of traditional ductwork. With zoned temperature control and inverter
              technology, they use less power while keeping your home comfortable year-round.`}
          </p>
          </div>
        <div className="col-text">
          <h1>Design Flexibility</h1>
          <p> {`Mini-splits offer sleek, low-profile units that blend seamlessly into any 
          space—no bulky ducts or vents required. With options for wall-mounted, ceiling, 
          or floor units, they give you the freedom to design your home your way, without compromising comfort.`}</p>
        </div>
        <div className="col-text">
          <h1>Dual Functionality</h1>
          <p>{`Mini-split systems offer year-round comfort with both heating and cooling built into one efficient unit.
           Whether it’s summer heat or winter chill, they keep your space comfortable without the need for separate systems.`}</p>
        </div>
      </div>
      <div className='columns'>
          <div className='long-image' id='hvac-long'></div>
          <div className='short-image' id='hvac-short'></div>
        </div>
        <div className='perks'>
          <div className='perkBox'>
            <h3>Good Communication</h3>
            <p>{`We prioritize clear communication to keep you informed throughout your HVAC service.
             From installation to repairs, we ensure you understand your options, timelines, and
              costs—providing reliable service every step of the way.`}</p>
          </div>
          <div className='perkBox'>
            <h3>No Hidden Fees</h3>
            <p>{`With us, what you see is what you get. We believe in transparent pricing with no hidden fees,
             so you can trust that you're getting the best value for your HVAC services. No surprises—just honest,
              upfront costs every time.`}</p>
          </div>
          <div className='perkBox'>
            <h3>Timely Service</h3>
            <p>{`We understand the importance of your time. That's why we prioritize prompt, efficient HVAC service,
             ensuring your needs are met on schedule. Whether it's an emergency repair or routine maintenance,
              we arrive on time and get the job done quickly and effectively.`}</p>
          </div>
        </div>
        <div className='columns-white'>
          <div className="column">
            <h2>The Owners</h2>
            <div id='short-image-owners'></div>
          </div>
          <div className="column">
            <h2>What people are saying</h2>
              <TestimonialSlider/>
          </div>
        </div>

        <div className='contactForm'>
          <div className='info'>
            <h3 id='contact'>Contact Us</h3>
          <Link className='btmlnk' href="tel:435-668-7774"><BsFillTelephoneFill /> <span>&nbsp;(435) 668 - 7774</span></Link>
          <Link className='btmlnk' href="mailto:klein.construction.stg@gmail.com"><LuMail /> <span>&nbsp;klein.construction.stg@gmail.com</span></Link>
          </div>
          <Contact/>
          
        </div>
    </main>
  )
}
