import Image from 'next/image'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMail } from 'react-icons/lu';
import backgroundimage from './components/photos/images-1.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="gradient"></div>
      <div className="backgroundimage"></div>
      {/* <div className="backgroundimage grey"></div> */}
      <div className="slogan">
    
        </div>

      <div className="columns">
        <div className="col-text">
          <h1>A Legacy Started</h1>
          <p>Our father, Randolph Klein, began a successful custom cabinet company in Las Vegas as a
means to satisfy his desire to work with his hands while providing for his family. We decided, as
brothers, to continue that legacy here in the southern Utah area. Since then we have refined our
craftsmanship and expanded our skills. Klein Construction is proud to offer services in new build
construction, HVAC(specializing in mini-split systems) and semi-custom cabinets+installation.
We look forward to working with you. </p>
          </div>
        <div className="col-text">
          <h1>Our Values</h1>
          <p> At Klein Construction our values are what continue to propel us ahead in the construction
industry. Clients of other businesses continue to feel misled, ignored and maxed out financially.
At Klein Construction our personal values overflow into the business. We pride ourselves in
being on time, affordable and honest.</p>
        </div>
        <div className="col-text">
          <h1>Higher Quality Work</h1>
          <p>With over 70 years of combined experience, we are confident in our ability to help you with your
desires and needs.We don’t take construction or installation lightly. We are perfectionists when it
comes to our designs fitting and working together well. Looking flawless and beautiful is the
cherry on top. Small job or big, we put our expertise and passion into it. We’d never build or
install work that we are not proud of, so you can rest assured that you will be proud of it, too.</p>
        </div>
      </div>

      <div className="columns-container">
          <div className="image-with-text image-text-left">
            <Image src="/images/construction-hero.jpg" width="700" height="380" alt="Picture of a house" />
            <div class='image-text'>
              <h1>Contracting</h1>
              <p>Making dreams a reality is what excites us. We approach projects with excitement, experience,
creativity and foresight. Our collaborative planning process thoroughly examines projects from
all perspectives, identifying opportunities for efficiency and proactively anticipating potential
challenges. We go the extra mile when it comes to ensuring safety, functionality and design.</p>
              <Link href="/design"><button className="arrow">→</button></Link>
            </div>
          </div>
  
        
          <div className="image-with-text image-text-right">
            <div class='image-text'>
                <h1>CABINETRY</h1>
                <p>Our range of semi-custom cabinets offers the elegance and sophistication of custom designs at
an affordable price.(Or “We sell affordable, high-quality, semi-custom cabinets. )
The line is high-quality, durable and classy. Our designs and bids are done by Karey (owner) so
you can know that the design will be beautiful, well-thought out, and that the bid will be an
honest one.</p>
                <Link href="/cabinets"><button className="arrow">→</button></Link>
              </div>
            <Image src="/images/cabinets-hero.jpg" width="700" height="380" alt="Picture of the cabinets" />
          </div>
        
        
          <div className="image-with-text image-text-left">
              <Image src="/images/couch.png" width="1000" height="1000" alt="Picture of a house" />
              <div class='image-text'>
                <h1>HVAC</h1>
                <p>We specialize in Mitsubishi and Gree mini-split systems. We install traditional HVAC as well, if
that is what you are looking for.</p>
                <Link href="/hvac"><button className="arrow">→</button></Link>
              </div>
          </div>
        
      </div>

      <div className="final-text">
        <h1>Contact Us</h1>
        <p>Contact us today for a free quote for construction, HVAC, or cabinets</p>
        <div className="contact-icons">
          <Link href="tel:435-668-7774"><BsFillTelephoneFill /> <span>&nbsp;(435) 668 - 7774</span></Link>
          <Link href="mailto:kleinconstruction@gmail.com"><LuMail /> <span>&nbsp;kleinconstruction@gmail.com</span></Link>
        </div>
      </div>
    </main>
  )
}
