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
      <Image src="/images/kitchen.png" width="500" height="500" className="backgroundimage" />
      
      <div className="mini-nav">
        <div onClick={() => {setSelected("")}}className={`link ${selected === "" ? 'selected-nav' : ""}`}>ABOUT</div>
        <div onClick={() => {setSelected("image")}}className={`link ${selected === "image" ? 'selected-nav' : ""}`}>IMAGE-GALLERY</div>
        <div onClick={() => {setSelected("contact")}}className={`link ${selected === "contact" ? 'selected-nav' : ""}`}>CONTACT</div>
      </div>

      {selected === "" &&<> <div className="header-container">
        <div className="header-left-text">
          <h1>Generations of Craftmanship</h1>
          <p>We are a locally owned and operated custom cabinet manufacturer, located in the heart of Salt Lake City, Utah. With a long tradition of fine craftsmanship, Millcreek Cabinet is a well recognized and respected name in the local industry.</p>
        </div>
        <div className="contact-nav">
          <h2>Schedule Appointment</h2>
          <p>All estimates and consultations are free.</p>
          <button className="contact-button">Start Now</button>
        </div>
      </div>

      

      <div className="columns-container">
          <div className="image-with-text image-text-left">
            <Image src="/images/beautiful-house.png" width="1000" height="1000" alt="Picture of a house" />
            <div class='image-text'>
              <p>Few cabinetry and countertop companies are dedicated to the same quality design and superior customer service as Klein Cabinets. Locally owned and over 20 years of experience, we are fully capable of crafting designs that you will love to have in your home or business.</p>
            </div>
          </div>
  
        
          <div className="image-with-text image-text-right">
            <div class='image-text'>
                <p>At Klein Cabinets  we take our customer’s satisfaction very seriously. We do everything we can to provide you with the highest quality products and craft the designs to fit exactly what you’re looking for, you can expect beautiful creations every time.</p>
              </div>
            <Image src="/images/kitchen.png" width="1000" height="1000" alt="Picture of the cabinets" />
          </div>
      </div>

      </> }
      <div className="final-text">
        {selected==="" && <h1>Recent Work</h1>}
        <div className="image-gallery" style={{height: selected==="image" ? "calc(50vw + 20px)" : "25vw"}}>
          <div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/kitchen.png" layout="fill" alt="Picture of the cabinets" />
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
        
        <h1 className="see-more">See more</h1>
      </div>

      {selected==="" && <div className="final-text">
        <h1>Something that is pretty good</h1>
        <p>At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget. At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget.</p>
        <div className="contact-icons">
          <Link href="tel:454-989-6543"><BsFillTelephoneFill /> <span>&nbsp;(454) 989 - 6543</span></Link>
          <Link href="mailto:kleinconstruction@gmail.com"><LuMail /> <span>&nbsp;kleinconstruction@gmail.com</span></Link>
        </div>
      </div>}
    </main>
  )
}
