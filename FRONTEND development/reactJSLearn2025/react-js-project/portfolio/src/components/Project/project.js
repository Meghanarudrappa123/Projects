import React from 'react'
import './project.css';
// import image from '../../bankingManagement.webp'

const project= [
  {
    id:1,
    title:'Project-1: Banking Management Application',
    description:'We will build a Java project called Bank management system as well as ATM Simulator System in this project series.It operates in a manner similar to a typical ATM.  The functionality of this ATM Simulator System includes depositing, withdrawing, opening banking accounts, producing mini statements, changing pins, and more.',
    Technologies:'Java (Swing & AWT), MySQL (workbench database)', 
    // image:'../../bankingManagement.webp',
    link:'https://github.com/Meghanarudrappa123/megha/tree/master/HTML_CSS_JS_Project'
  },
   {
    id:2,
    title:'Project-2: Employee Management System',
    description:'This is a simple, concise and single page web application, We’ll developed a CRUD feature like Add, delete, update and list employee.  ',
    Technologies:'Java SpringBoot3, React, MySQL',
    // image:'../../employeeManagement.jpg',
    link:'https://github.com/Meghanarudrappa123/megha/tree/master/HTML_CSS_JS_Project'
  },
 ];

function Project(){
  return(
    <div className='projectPage'>
    <div className='projects'>
      <h2 className='projectHead'>My Projects</h2>
      {project.map((project)=>(
        <div key={project.id} className='project'>
          <h3 className='projectTitle'>{project.title}</h3> 
          <p className='projectDesc'>{project.description}</p>
          <p className='projectTechno'>{project.Technologies}</p>
          {/* <img src={image} alt={project.title} className='projectImg'/> */}
          <a href={project.link} target='_blank' rel='noopener noreferrer' className='projectView'>
            View Project
          </a>
          </div>
      ))}
    </div>
    </div>
  )
}
export default Project;


  