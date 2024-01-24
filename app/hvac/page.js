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
          <h1>Serving the southern Utah area.</h1>
          <p>Few Heating and Air companies are dedicated to the same quality design and superior
customer service as Klein Heating and Air. Mini-split systems provide unique opportunities to
design airflow and comfort in a way that isn’t possible with traditional HVAC, while HVAC offers
upfront affordability and functional airflow. We’d love to help you figure out which would work
best for you.</p>
        </div>
        <div className="contact-nav">
          <h2>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-327-1616"><h2 className="number">(435) 327 - 1616</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
      </div>

      <div className="columns-container-service">
          <div className="servicepagesection">
            <div className="image-sizer">
              <Image class="image" src="/images/hvac8.jpg" width="1000" height="1000" alt="Picture of a house" />
            </div>
            <div class='image-text-service'>
              <p>We specialize in Ductless mini-split systems. With products like Gree, Carrier, or Mitsubishi we
are confident we can find a solution that meets your needs and budget.</p>
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
          <h2>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-327-1616"><h2 className="number">(435) 327 - 1616</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
        <div className="header-left-text">
          <p>At Klein Heating and Air we know customer satisfaction is what businesses are built on, which is
why we take it so seriously. We do everything we can to provide you with the highest quality
services and products to fit seamlessly in your home and everyday life.</p>
        </div>
        </div>
        <div className="contact-icons">
          <Link href="tel:435-327-1616"><BsFillTelephoneFill /> <span>&nbsp;(435) 327 - 1616</span></Link>
          <Link href="mailto:klein.heatingandair.stg@gmail.com"><LuMail /> <span>&nbsp;klein.heatingandair.stg@gmail.com</span></Link>
        </div>
      </div>}
    </main>
  )
}
