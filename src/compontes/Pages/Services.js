import React from 'react'
import { Container  , CardGroup, Card  } from 'react-bootstrap'
import ux from '../images/ux.png';
import ios from '../images/ios.png';
import react from '../images/react.png';

export default function Services() {
  return (
    <Container>
      <h5 className='title'> Services</h5>


      <CardGroup>
 {/* frist card for ui / ux desginer */}
      <Card className='card'>
        <Card.Body>
          <Card.Title>UX / UI design</Card.Title>
          <img variant="top" src={ux} className ="img-thumbnail " />
          </Card.Body>
         </Card>

 {/* scend card for ios / swift developer */}
      <Card className='card'>
        <Card.Body>
          <Card.Title>ios swift developer</Card.Title>
          <img variant="top" src={ios} className ="img-thumbnail" />
          </Card.Body>
         </Card>

 {/* third card for front-end  developer */}
      <Card className='card'>
        <Card.Body>
          <Card.Title className=''>Front end developer</Card.Title>
          <img variant="top" src={react} className ="img-thumbnail" />
          </Card.Body>
         </Card> 
    </CardGroup> 
   
    </Container>
  )
}
