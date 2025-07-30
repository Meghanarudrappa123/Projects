import React from 'react';
import './intro.css';
import bg from '../../professional_picture.png'
import btnImg from '../../hireMe.jpg'
import {Link} from 'react-scroll';
const Intro = () => {
  return (
  <section id='intro'>
    <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm <span className='introName'>Meghana R</span><br/> Full-Stack Java Developer</span>
        <p className='introPara'>I am skilled in Full-stack Java developer with the experience in creating visually appealing and user-friendly websites, 
          and full-stack development projects.</p>
        <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>

    </div>
    <img src={bg} alt='profile' className='bg'/>
  </section>
  )
}

export default Intro;
