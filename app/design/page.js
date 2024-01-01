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
      <Image src="/images/construction-hero.jpg" alt="hero" width="500" height="500" className="backgroundimage" />
      {/*
      <div className="mini-nav">
        <div onClick={() => {setSelected("")}}className={`link ${selected === "" ? 'selected-nav' : ""}`}>ABOUT</div>
        <div onClick={() => {setSelected("image")}}className={`link ${selected === "image" ? 'selected-nav' : ""}`}>IMAGE-GALLERY</div>
        <div onClick={() => {setSelected("contact")}}className={`link ${selected === "contact" ? 'selected-nav' : ""}`}>CONTACT</div>
      </div>
  */}

      {selected === "" &&<> <div className="header-container">
        <div className="header-left-text">
          <h1>Serving the southern Utah area.</h1>
          <p>From vision→design→build. We would be happy to be there with you from beginning to end.
Contact us for a free estimate.</p>
        </div>
        <div className="contact-nav">
          <h2>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-668-7774"><h2 className="number">(435) 668 - 7774</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
      </div>

      
      <div className="columns-container-service">
          <div className="servicepagesection">
            <div className="image-sizer">
              <Image src="/images/con12.jpg" width="2000" height="2000" alt="Picture of a house" />
            </div>
            <div class='image-text-service'>
              <p>At Klein Construction we know customer satisfaction is what businesses are built on, which is
why we take it so seriously. We do everything we can to provide you with the highest quality
products, designs, and craftsmanship to fit exactly what you’re looking for. With us, you can
expect satisfaction every time.</p>
            </div>
          </div>
          
        </div>


      </> }
      <div className="final-text">
        {selected==="" && <h1 >Recent Work</h1>}
        <div className="image-gallery" style={{height: selected==="image" ? "calc(50vw + 20px)" : "25vw"}}>
          <div className="image-gallery-image">
            <Image src="/images/con6.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/con4.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/con5.jpg" layout="fill" alt="Picture of the cabinets" />
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

      {selected==="" && <div className="final-text">
      <div className="header-container">
        <div className="contact-nav">
          <h2>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-668-7774"><h2 className="number">(435) 668 - 7774</h2></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
        <div className="header-left-text">
        <p>Few construction companies are dedicated to the same quality design and superior customer
service as Klein Cabinets. We care about the quality and class of our builds, and we care about
your experience throughout the building process.</p>
        </div>
        </div>
        <div className="contact-icons">
          <Link href="tel:435-668-7774"><BsFillTelephoneFill /> <span>&nbsp;(435) 668 - 7774</span></Link>
          <Link href="mailto:kleinconstruction@gmail.com"><LuMail /> <span>&nbsp;kleinconstruction@gmail.com</span></Link>
        </div>
      </div>}
    </main>
  )
}
