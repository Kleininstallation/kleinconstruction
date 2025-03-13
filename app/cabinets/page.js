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
      <Image src="/images/cabinets-hero.jpg" width="500" height="500" className="backgroundimage" />
      
      <div className="mini-nav">
        <div onClick={() => {setSelected("")}}className={`link ${selected === "" ? 'selected-nav' : ""}`}>ABOUT</div>
        <div onClick={() => {setSelected("image")}}className={`link ${selected === "image" ? 'selected-nav' : ""}`}>IMAGE-GALLERY</div>
        <div onClick={() => {setSelected("contact")}}className={`link ${selected === "contact" ? 'selected-nav' : ""}`}>CONTACT</div>
      </div>

      {selected === "" &&<> <div className="header-container">
        <div className="header-left-text">
          <h1>Serving the southern Utah area.</h1>
          <p>We pride ourselves in knowing cabinets inside and out and being the best installers in the south.
Family and locally owned with over 70 years of combined experience, our quality products,
designs and installs are ones you will love to have in your home or business.</p>
        </div>
        <div className="contact-nav">
          <h2 className="contactbutton" onClick={() => {setSelected("contact")}}>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-668-7774"><h2 className="number">(435) 668 - 7774</h2></Link>
          <Link href="mailto:klein.cabinets.stg@gmail.com"> <span className="number">klein.cabinets.stg@gmail.com</span></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
      </div>


        <div className="columns-container-service">
          <div className="servicepagesection">
            <div className="image-sizer">
              <Image src="/images/hero.jpg" width="1000" height="1000" alt="Picture of a house" />
            </div>
            <div class='image-text-service'>
              <p>At Klein Cabinets we know customer satisfaction is what businesses are built on, which is why
we take it so seriously. We do everything we can to provide you with the highest quality
products, designs, and installation to fit exactly what you’re looking for. With us, you can expect
satisfaction every time</p>
            </div>
          </div>
          
        </div>


      </> }
      <div className="final-text">
        {selected==="" && <><h1>Recent Work</h1>
        <div className="image-gallery">
        <div className="image-gallery-image">
            <Image src="/images/cab4.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cabnice2.webp" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab9.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          </div>
        </>}
        <div className="image-gallery">
          {selected ==="image" && <>
          <div className="image-gallery-image">
            <Image src="/images/cabnice1.webp" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cabnice2.webp" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cabnice3.webp" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab1.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab2.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab3.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab4.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab5.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab6.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab7.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab8.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab9.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab10.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab11.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab12.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab13.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab14.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab15.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab16.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab17.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab18.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab19.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab20.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab21.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab22.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab23.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab24.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab25.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab26.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab27.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab28.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab29.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab30.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab31.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab32.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab33.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab34.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab35.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab36.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab37.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab38.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          <div className="image-gallery-image">
            <Image src="/images/cab39.jpg" layout="fill" alt="Picture of the cabinets" />
          </div>
          </>}
        </div>
        {/*<h1 className="see-more">See more</h1>*/}
      </div>
      {selected ==="contact" && <><div className="final-text">
            <h2 className="step">Step 1.</h2>
              <p className="steptext">Call or send us an email (Attach plans or drawings if you have them)</p>
            <div className="contact-icons stepicons">
              <Link href="tel:435-668-7774"><BsFillTelephoneFill /> <h2 className="stepnumber">&nbsp;(435) 668 - 7774</h2></Link>
              <Link href="mailto:klein.cabinets.stg@gmail.com"><LuMail />  <span className="stepemail">&nbsp;klein.cabinets.stg@gmail.com</span></Link>
            </div>
            <h2 className="step">Step 2.</h2>
              <p className="steptext">Our team will reach out/respond within 2 business days</p>
            <h2 className="step">Step 3.</h2>
              <p className="steptext">Consultation and field measure</p>
            <h2 className="step">Step 4.</h2>
              <p className="steptext">Cabinet Production and Installation 4-6 weeks</p>
          </div></>}

      {selected==="" && <div className="final-text">
      <div className="header-container">
        <div className="contact-nav">
          <h2 ClassName="contactbutton" onClick={() => {setSelected("contact")}}>Get Started</h2>
          <p>All estimates and consultations are free.</p>
          <Link href="tel:435-668-7774"><h2 className="number">(435) 668 - 7774</h2></Link>
          <Link href="mailto:klein.cabinets.stg@gmail.com"> <span className="number">klein.cabinets.stg@gmail.com</span></Link>
          {/*<button className="contact-button">Start Now</button>*/}
        </div>
        <div className="header-left-text">
          <p>Few cabinetry companies are dedicated to the same quality design and superior customer
service as Klein Cabinets. We would love to work with you on getting the cabinets and design
you are looking for.</p>
        </div>
        </div>
        <div className="contact-icons">
          <Link href="tel:435-668-7774"><BsFillTelephoneFill /> <span>&nbsp;(435) 668 - 7774</span></Link>
          <Link href="mailto:klein.cabinets.stg@gmail.com"><LuMail /> <span>&nbsp;klein.cabinets.stg@gmail.com</span></Link>
        </div>
      </div>}
    </main>
  )
}
