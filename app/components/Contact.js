'use client'; // Add this at the top for client-side components in Next.js

import { useState } from 'react';

export default function Contact() {
    const [show, setShow] = useState(true);  // Initialize show state

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "c4f4f9ac-ffa7-4858-9ed5-030769b8e551");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            console.log(result);
            setShow(false);  // Update state to show thank you message
        }
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
      {show ? (
          <div id='first-section' className='form'>
              <p className='half'>First Name</p>
              <p className='half'>Last Name</p>
              <input required className='half type' type="text" id="fname" name="fname" placeholder="First Name"></input>
              <input className='half type2' type="text" id="lname" name="lname" placeholder="Last Name"></input>
              <p className='half'>Email</p>
              <p className='half'>Phone Number</p>
              <input className='half type' type="email" id="email" name="email" placeholder="Email"></input>
              <input className='half type2' type="text" id="phone number" name="phone number" placeholder="+1 (435) 000-0000"></input>
              <p className='full'>What services are you looking for?</p>
              
              <input type="radio" id="new build" name="new build" value="New Build"></input>
              <p className="margin-right">New Build</p>
             
              <input type="radio" id="Remodel" name="Remodel" value="Remodel"></input>
              <p className="margin-right">Remodel</p>
              
              <input type="radio" id="Add-on" name="Add-on" value="Add-on"></input>
              <p className="margin-right">Add-on</p>

              <input type="radio" id="Other" name="Other" value="Other"></input>
              <p className="margin-right">Other</p>
              
              <p className='full'>How can we help?</p>
              <textarea className='full' id="text-area" name="Message">
              </textarea>
              <button type='submit' className="submit-button">Submit</button>
          </div>
      ) : (
          <div className="Thanks">Thank you! Your submission has been sent!</div>
      )}
      </form>
    </>
  );
}