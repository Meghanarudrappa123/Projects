import React from 'react'
import './contact.css';
import linkedin from '../../linkedin.png';
import instagram from '../../instagram.jpg';
import gitHub from '../../gitHub.png';

const Contact = () => {
  return (
    <div className='contactPage'>
    <div id='contact'>
     <h1 className='contactPageTitle'>Contact Me</h1>
     <span className='contactDesc'>Please fill out the form below to discuss any work opportunities.</span>
     <form className='contactForm'>
      <input type='text' className='name' placeholder='Your Name'/>
      <input type='email' className='email' placeholder='Your Email'/>
      <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
      <button type='submit' value='send' className='submitBtn'>Submit</button>
      <div className='links'>
        <a href="https://www.linkedin.com/in/meghana-r-17198a24a/" target="_blank" rel="noopener">
    <img src={linkedin} alt='' className='link'/>
        </a>
        <a href="https://www.instagram.com/meghanarrudrappa/" target="_blank" rel="noopener">
    <img src={instagram} alt='' className='link'/>
        </a>
        <a href="https://github.com/Meghanarudrappa123/projects" target="_blank" rel="noopener">
    <img src={gitHub} alt='' className='link'/>
        </a>
      </div>
     </form>
    </div>
    </div>
  )
}

export default Contact;
