import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export default function About() {

  
  return (
    
     

    <Container className='about-div'>
      <h5 className='title'>About me </h5>
      <ul  className='about-body'>
        <li className='about-list'>I graduated from Taibah university in computer sciencs. </li>
        <li className='about-list'>I joined Hemma comp from the Saudi Digital Academy to develop a mobile app.</li>
        <li className='about-list'>I have a professional certificate in App development with Swift Associate.</li>
        <li className='about-list'>I have a more courses in UX design .</li>
        <li className='about-list'>And I have a course in React js from meta.</li>
      </ul>


     <div className='about-button'>

      {/* To dowanload cv like as pdf and move to services */}
      <Link className = 'primary-link about-button' to ="/"  > 
       <button className='btn-primary' > Download CV</button>
       </Link>

       <Link className = 'primary-link about-button' to ='/services'  > 
       <button className='btn-primary' > Services</button>
       </Link>
       </div>
    </Container>
    
  )
}
