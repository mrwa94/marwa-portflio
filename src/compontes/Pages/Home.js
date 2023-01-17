import React from 'react'
import { Container } from 'react-bootstrap'
import About from './About.js'

export default function Home() {
  return (

   <Container className='home'>
    <div className='header-home '>
    <p className='title-home py-2'>Welcome ..</p>
     <h2 className='marwa-class'>I’m Marwa Alsubhi</h2>
     <p className='sub-title-home'>Freelance UX\UI designer && developer</p>
      </div>
     
   <div className='button-home'> 
         <button className='btn-primary' onClick={<About/>}>About me</button>
      </div>
   </Container>
  )
}
