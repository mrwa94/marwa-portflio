import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import About from './About.js'
import {Link} from 'react-router-dom'
export default function Home() {
 
  
  
  return (
  
       <Container className='home'>
        

         <div className='header-home '>
            <p className='title-home py-2'>Welcome ..</p>
              <h2 className='marwa-class'>I’m Marwa Alsubhi</h2>
                 <p className='sub-title-home'>Freelance UX\UI designer && developer</p>
          </div>
   
   <div className='button-home'> 
    {/* To move to other compontes  */}
      <Link className = 'primary-link' to ="/About"  > 
       <button className='btn-primary' > About me</button>
       </Link>
     
   </div>
   </Container>
  )
}
