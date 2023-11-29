"use client";
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMail } from 'react-icons/lu';

export default function Cabinets() {

  const [selected, setSelected] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="gradient"></div>
      <Image src="/images/hvac-hero.jpg" width="500" height="500" className="backgroundimage" />
      
      {/*<div className="mini-nav">
        <div onClick={() => {setSelected("")}}className={`link ${selected === "" ? 'selected-nav' : ""}`}>ABOUT</div>
        <div onClick={() => {setSelected("image")}}className={`link ${selected === "image" ? 'selected-nav' : ""}`}>IMAGE-GALLERY</div>
        <div onClick={() => {setSelected("contact")}}className={`link ${selected === "contact" ? 'selected-nav' : ""}`}>CONTACT</div>
  </div>*/}
    

      {selected === "" &&<> <div className="header-container">
        <div className="header-left-text">
          <h1>Generations of Craftmanship</h1>
          <p>We are an HVAC company, Klein Heating and Air, proudly serving the St George, Utah area. As a locally owned and operated business, we have established a strong reputation for our fine craftsmanship and dedication to quality.</p>
        </div>
        <div className="contact-nav">
          <h2>Schedule Appointment</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:702-378-1047"><h2 className="number">(702) 378 - 1047</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
      </div>

      <div className="columns-container-service">
          <div className="servicepagesection">
            <div className="image-sizer">
              <Image class="image" src="/images/hvac8.jpg" width="1000" height="1000" alt="Picture of a house" />
            </div>
            <div class='image-text-service'>
            <p>For unparalleled excellence in HVAC services, few companies match the dedication to quality and superior customer service that Klein Heating and Air brings to St. George. With over 20 years of local experience and a commitment to top-notch craftsmanship, we have the expertise to deliver HVAC solutions that you will appreciate for your home or business.</p>            </div>
          </div>
          <div className="servicepagesection">
            <div class='image-text-service'>
              <p>
At Klein Heating and Air in St. George, customer satisfaction is our utmost priority. We go above and beyond to ensure that you receive top-tier products and meticulously crafted designs tailored to your specifications. Count on us for consistently delivering stunning HVAC solutions that meet and exceed your expectations.</p>
            </div>
            <div className="image-sizer">
              <Image src="/images/hvac7.jpg" width="1000" height="1000" alt="Picture of the cabinets" />
            </div>
          </div>
        </div>


      </> }
      <div className="final-text">
        {selected==="" && <h1>Recent Work</h1>}
        <div className="image-gallery" style={{height: selected==="image" ? "calc(50vw + 20px)" : "25vw"}}>
          <div className="image-gallery-image">
            <Image src="/images/hvac1.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/hvac2.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/hvac4.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          {selected ==="image" && <><div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
          </div></>}
        </div>
        {/*<h1 className="see-more">See more</h1>*/}
      </div>

      {selected ==="contact" && <><div className="final-text">
            <p>hi mister chicken</p>
          </div></>}


      {selected==="" && <div className="final-text">
      <div className="header-container">
        <div className="contact-nav">
          <h2>Schedule Appointment</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:702-378-1047"><h2 className="number">(702) 378 - 1047</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
        <div className="header-left-text">
        <h1>Higher Quality Work</h1>
        <p>At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget.</p>
        </div>
        </div>
        <div className="contact-icons">
          <Link href="tel:702-378-1047"><BsFillTelephoneFill /> <span>&nbsp;(702) 378 - 1047</span></Link>
          <Link href="mailto:kleinconstruction@gmail.com"><LuMail /> <span>&nbsp;kleinconstruction@gmail.com</span></Link>
        </div>
      </div>}
    </main>
  )
}
