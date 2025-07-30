import React from 'react'
import './skill.css';
import FrontEnd from '../../FrontEnd.jpg';
import BackEnd from '../../BackEnd.jpg';
import DataBases from '../../DataBases.png';
import Deployment from '../../Deployment.png';


const Skill = () => {
  return (
   <section id="skills">
      <span className='skillTitle'>What I do</span>
      <span className='skillDesc'>As a Java Full Stack Developer, i can build complete web applications from end to end. meant i handle everything from what users see to how the application functions behind the scenes. I have a strong understanding of design and a keen eye for detail. I am proficient in Java, HTML, CSS, JavaScript and React, as well as design software such as canva, photoshop, Adobe.</span>
      <div className='skillBars'>
         <div className='skillBar'>
          <img src={FrontEnd} alt='FrontEnd' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>FrontEnd Design</h2>
              <p>I'll create the user interface (UI) with HTML, CSS, and JavaScript. i also use frameworks like React to build dynamic and interactive web pages.</p>
          </div>
        </div>  
         <div className='skillBar'>
          <img src={BackEnd} alt='BackEnd' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>BackEnd Design</h2>
              <p>I'll develop the server-side logic using Java and frameworks like Spring Boot and Hibernate. This involves managing databases, building APIs for communication, and ensuring the application runs smoothly and efficiently.</p>
          </div>
        </div>  
         <div className='skillBar'>
          <img src={DataBases} alt='DataBases' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>DataBase Management</h2>
              <p>I'll work with databases like MySQL, PostgreSQL, or MongoDB to store and manage the application's data. I'll design schemas, write queries, and ensure data integrity.</p>
          </div>
        </div>  
         <div className='skillBar'>
          <img src={Deployment} alt='Deployment' className='skillBarImg'/>
          <div className='skillBarText'>
              <h2>Deployment</h2>
              <p>I'll be involved in deploying and maintaining applications, often using tools like Docker and Kubernetes for containerization and scalability. 
                 I'll use the version control systems like Git to manage my code.</p>
          </div>
        </div>  
        </div>    
   </section>
  )
}

export default Skill;
