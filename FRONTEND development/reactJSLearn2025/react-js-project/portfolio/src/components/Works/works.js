import React from 'react'
import './works.css';
import Portfolio1 from '../../Portfolio1.jpg'
import portfolio7 from '../../portfolio7.jpg'
import portfolio3 from '../../portfolio3.jpg'
import portfolio4 from '../../portfolio4.jpg'
import portfolio5 from '../../portfolio5.jpg'
import portfolio6 from '../../portfolio6.jpg'
const Works = () => {
  return (
   <section id='works'>
      <h2 className='worksTitle'>My Portfolio</h2>
      <span className='worksDesc'>"I take pride in paying attention to 
        the smallest details and making sure that my work is pixel 
        perfect. I am excited to bring my skills and experience to help
     bussinesses achieve their goals and create a strong online presence."</span>
     <div className='worksImgs'>
      <img src={Portfolio1} alt='' className='worksImg'/>
      <img src={portfolio7} alt='' className='worksImg'/>
      <img src={portfolio3} alt='' className='worksImg'/>
      <img src={portfolio4} alt='' className='worksImg'/>
      <img src={portfolio5} alt='' className='worksImg'/>
      <img src={portfolio6} alt='' className='worksImg'/>
     </div>
     <button className='worksBtn'>See more</button>
   </section>
  );
}

export default Works;
