import Image from 'next/image'
import Link from 'next/link';
import { BsFillTelephoneFill } from "react-icons/bs";
import { LuMail } from 'react-icons/lu';
import backgroundimage from './components/photos/images-1.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="gradient"></div>
      <div className="backgroundimage">
      <div className="slogan">
            NEW BUILDS<br></br>
            ADD-ONS<br></br>
            REMODELS<br></br>
            <div id="getStarted">GET STARTED</div>
        </div>
      </div>
      {/* <div className="backgroundimage grey"></div> */}
      
      <h1 id='help'>WE CAN HELP</h1>
      <div className="columns">
      
        <div className="col-text">
          <h1>New Builds</h1>
          <p>Enjoy the comfort and efficiency of a brand-new home, tailored to your style and needs. 
            These homes offer open layouts, smart features, and the latest in energy-saving design. 
            Casitas offer added flexibility—ideal for guests, rentals, home offices, or multigenerational living.
          </p>
          </div>
        <div className="col-text">
          <h1>Add-ons</h1>
          <p> Enhance your home with custom add-ons that bring more function, style, and value. 
            Whether it’s an extra room, expanded patio, or modern upgrades, the right additions 
            can transform your space to better fit your lifestyle and needs.</p>
        </div>
        <div className="col-text">
          <h1>Remodels</h1>
          <p>Breathe new life into your space with a custom remodel. Whether it’s a kitchen refresh, 
            bathroom upgrade, or full-home transformation, remodeling gives you the chance to modernize,
            personalize, and make your home truly yours.</p>
        </div>
      </div>
      <div className='columns'>
          <div id='long-image'></div>
          <div id='short-image'></div>
        </div>
        <div className='perks'>
          <div className='perkBox'>
            <h3>Full Cost Disclosure</h3>
            <p>You will know what every trade is going to cost before the build process starts.
               Allowance items are yours to control.</p>
          </div>
          <div className='perkBox'>
            <h3>Full Cost Disclosure</h3>
            <p>You will know what every trade is going to cost before the build process starts.
               Allowance items are yours to control.</p>
          </div>
          <div className='perkBox'>
            <h3>Full Cost Disclosure</h3>
            <p>You will know what every trade is going to cost before the build process starts.
               Allowance items are yours to control.</p>
          </div>
        </div>

        <div className='contactForm'>
          <div className='info'>
            <h3 id='contact'>Contact Us</h3>
          <Link className='btmlnk' href="tel:435-668-7774"><BsFillTelephoneFill /> <span>&nbsp;(435) 668 - 7774</span></Link>
          <Link className='btmlnk' href="mailto:klein.construction.stg@gmail.com"><LuMail /> <span>&nbsp;klein.construction.stg@gmail.com</span></Link>
          </div>
          <div className='form'>
              <p className='half'>First Name</p>
              <p className='half'>Last Name</p>
              <input className='half type' type="text" id="fname" name="fname" placeholder="First Name"></input>
              <input className='half type' type="text" id="lname" name="lname" placeholder="Last Name"></input>
              <p className='half'>Email</p>
              <p className='half'>Phone Number</p>
              <input className='half type' type="text" id="fname" name="fname" placeholder="Email"></input>
              <input className='half type' type="text" id="lname" name="lname" placeholder="+1 (435) 000-0000"></input>
              <p className='full'>What services are you looking for?</p>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">New Build</label>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">Remodel</label>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">Add-on</label>
              <input type="radio" id="html" name="fav_language" value="HTML"></input>
              <label for="html">Other</label>
              <p className='full'>How can we help?</p>
              <textarea id="w3review" name="w3review">
              </textarea>
          </div>
        </div>
    </main>
  )
}
