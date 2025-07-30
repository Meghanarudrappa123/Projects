import React from 'react';
import './navbar.css';
import logo from '../../logo1.png';
import contactImg from '../../contactImg.png'
import {Link} from 'react-scroll';
// import menu from '../../menu.'


const NavBar=()=> {
  return (
    <nav className='navbar'>
      <img src={logo} alt='logo' className='logo'/>
      <div className='desktopMenu'>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-90} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'>Projects</Link>
      </div>
     <button className='desktopMenubtn'onClick={()=>{
      document.getElementById('contact').scrollIntoView({behavior:'smooth'});
     }}>
         <img src={contactImg} alt='' className='desktopMenuImg'/>
          Contact Me
     </button>
     {/* <img src={menu} alt='Menu' className='mobMenu'/>
      <div className='desktopMenu'>
       <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem'>Home</Link>
        <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-50} duration={500} className='desktopMenuListItem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className='desktopMenuListItem'>Portfolio</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-150} duration={500} className='desktopMenuListItem'>Projects</Link>
      </div> */}
    </nav>
  )
}

export default NavBar;
