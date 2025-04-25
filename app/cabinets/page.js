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
      <div className="backgroundimage" id="cabinethero">
      <div className="gradient" id="gradient">
          <div className="slogan">
            DESIGN<br></br>
            BUILD<br></br>
            INSTALL<br></br>
            <Link href="#first-section" id="getStarted">GET STARTED</Link>
          </div>
        </div>
      </div>
      {/* <div className="backgroundimage grey"></div> */}
      
      <h1 id='help'>WE CAN HELP</h1>
      <div className="columns">
      
        <div className="col-text">
          <h1>Design</h1>
          <p>{`Our cabinet designs are as unique as your space. We work with you to create a
           custom design that fits your style, needs, and budget—ensuring your cabinets look
            great and function perfectly in your home.`}
          </p>
          </div>
        <div className="col-text">
          <h1>Build</h1>
          <p> {`We offer durable, stylish prefab cabinets that are ready when you are. 
          With a variety of finishes and configurations, our cabinets combine quality 
          materials with convenience—giving you a polished look without the wait.`}</p>
        </div>
        <div className="col-text">
          <h1>Install</h1>
          <p>{`Our team ensures seamless, professional cabinet installation,
           paying attention to every detail for a perfect fit. We handle all aspects of the installation process, 
          leaving you with beautifully finished cabinets that are ready to use.`}</p>
        </div>
      </div>
      <div className='columns'>
          <div className='long-image' id='cabinet-long'></div>
          <div className='short-image' id='cabinet-short'></div>
        </div>
        <div className='perks'>
        <div className='perkBox'>
            <h3>Good Communication</h3>
            <p>{`We prioritize clear communication to keep you informed throughout your cabinet project.
             From design to installation, we ensure you understand your options, timelines,
              and costs—delivering reliable service every step of the way.`}</p>
          </div>
          <div className='perkBox'>
            <h3>No Hidden Fees</h3>
            <p>{`With us, you won’t find any hidden fees. We believe in transparent pricing for
             your cabinet needs, so you can trust that you're getting the best value with no
              surprises—just honest, upfront costs.`}</p>
          </div>
          <div className='perkBox'>
            <h3>Timely Service</h3>
            <p>{`We value your time. That's why we ensure timely, efficient cabinet service,
             completing your project on schedule. Whether it's installation or custom work,
              we arrive on time and get the job done quickly and professionally.`}</p>
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
