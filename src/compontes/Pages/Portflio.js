
import React from 'react';
import {Card ,CardGroup , Carousel  } from 'react-bootstrap';
import img1 from '../images/twitter.png';
import img2 from '../images/twitter.png';


export default function Portflio() {
  return (
    
    <div>
      <h5 className='title'> Portflio</h5>

      

    <Carousel>
      <Carousel.Item className=''>
      <Card className='card'>
        <Card.Body>
          <Card.Title>UX / UI design</Card.Title>
          <img variant="top" src={img1} className ="img-thumbnail contact-img" alt='uxx' />
          </Card.Body>
         </Card>
        

      </Carousel.Item>

      <Carousel.Item>
      <Card className='card'>
        <Card.Body>
          <Card.Title>UX / UI design</Card.Title>
          <img variant="top" src={img1} className ="img-thumbnail contact-img"alt='uiii' />
          </Card.Body>
         </Card>
      </Carousel.Item>
      
      <Carousel.Item>
      <Card className='card'>
        <Card.Body>
          <Card.Title>UX / UI design</Card.Title>
          <img variant="top" src={img1} className ="img-thumbnail contact-img"  alt='ux'/>
          </Card.Body>
         </Card>
      </Carousel.Item>

    </Carousel>


    
    







    </div>
    
  );
}
