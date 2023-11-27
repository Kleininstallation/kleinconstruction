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
          <h1>PLAN</h1>
          <p>We approach projects with creativity and foresight – Every groundbreaking development begins with a clear path to success. Our collaborative planning process thoroughly examines projects from all perspectives, identifying opportunities for efficiency and proactively anticipating potential challenges.</p>
        </div>
        <div className="col-text">
          <h1>BUILD</h1>
          <p>At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget.</p>
        </div>
        <div className="col-text">
          <h1>MANAGE</h1>
          <p>We confidently oversee projects – Our in-depth understanding and experience with each endeavor enable us to expertly manage properties from inception to completion, providing our clients with a sense of assurance and peace of mind.</p>
        </div>
      </div>

      <div className="columns-container">
          <div className="image-with-text image-text-left">
            <Image src="/images/construction-hero.jpg" width="700" height="380" alt="Picture of a house" />
            <div class='image-text'>
              <h1>DESIGN-BUILD</h1>
              <p>We approach projects with creativity and foresight – Every groundbreaking development begins with a clear path to success. Our collaborative planning process thoroughly examines projects from all perspectives, identifying opportunities for efficiency and proactively anticipating potential challenges.</p>
              <Link href="/design"><button className="arrow">→</button></Link>
            </div>
          </div>
  
        
          <div className="image-with-text image-text-right">
            <div class='image-text'>
                <h1>CABINETRY</h1>
                <p>We approach projects with creativity and foresight – Every groundbreaking development begins with a clear path to success. Our collaborative planning process thoroughly examines projects from all perspectives, identifying opportunities for efficiency and proactively anticipating potential challenges.</p>
                <Link href="/cabinets"><button className="arrow">→</button></Link>
              </div>
            <Image src="/images/cabinets-hero.jpg" width="700" height="380" alt="Picture of the cabinets" />
          </div>
        
        
          <div className="image-with-text image-text-left">
              <Image src="/images/couch.png" width="1000" height="1000" alt="Picture of a house" />
              <div class='image-text'>
                <h1>HVAC</h1>
                <p>We approach projects with creativity and foresight – Every groundbreaking development begins with a clear path to success. Our collaborative planning process thoroughly examines projects from all perspectives, identifying opportunities for efficiency and proactively anticipating potential challenges.</p>
                <Link href="/hvac"><button className="arrow">→</button></Link>
              </div>
          </div>
        
      </div>

      <div className="final-text">
        <h1>Higher Quality Work</h1>
        <p>At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget. At our core, we construct with integrity – Building is our passion, and each project is a reflection of our commitment. Taking full ownership and pride in our work, we strive for excellence, constantly aiming to surpass expectations and deliver top-notch projects that are completed on schedule and within budget.</p>
        <div className="contact-icons">
          <Link href="tel:454-989-6543"><BsFillTelephoneFill /> <span>&nbsp;(454) 989 - 6543</span></Link>
          <Link href="mailto:kleinconstruction@gmail.com"><LuMail /> <span>&nbsp;kleinconstruction@gmail.com</span></Link>
        </div>
      </div>
    </main>
  )
}
