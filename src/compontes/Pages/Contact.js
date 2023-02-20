import React , {useRef} from 'react'
import twitter from '../images/twitter.png'
import github from '../images/github.png'
import gmail from '../images/gmail.png'
import linkedin from '../images/linkedin.png'
import { Container , Form , Button } from 'react-bootstrap'
import emailjs from '@emailjs/browser';
 

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tjmuxjd', 'template_t1rr1yc', form.current, 'koL8y8VAapdoOUUw8')
      .then((result) => {
         
          console.log('message sent')
      }, (error) => {
         
          console.log('error ..!!');
      });
  };
  return (
    <Container>
      <h5 className='title'> Contact me</h5>
      
      <ui className ="contact-header">
      <il>
        <a className='contact-link' href=''>
          <img className='contact-img'src={gmail}  alt='contactt'/>
        </a>
      </il>
      <il>
      <a className=' ' href='https://www.linkedin.com/in/mrwa94'>
          <img className='contact-img'src={linkedin} alt ="linkedin"  />
        </a>
      </il>
      <il>
      <a className=' ' href='https://github.com/mrwa94'>
          <img className='contact-img'src={github} alt ="github"/>
        </a>
      </il>
      <il>
      <a className='' href='https://twitter.com/94_mrwa' >
          <img className='contact-img'src={twitter}  alt='contact'/>
        </a>
      </il>
      </ui>
      <p>______________________________________ OR _________________________________</p>
      
      <Form ref={form}  className='shadow ' onSubmit={sendEmail} >
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label> Name </Form.Label>
        <Form.Control type="text" placeholder="Enter your name" className='shadow' name='user_name' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter your email" className='shadow ' name='user_email' />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicMessage">
        <Form.Label>Message</Form.Label>
         <textarea placeholder='message' className='shadow message' name='message'></textarea>
      </Form.Group>
        
        

      <div className='text-center'>
      <Button type="submit" className='btn-primary'>
        Send
      </Button>
      </div>
     
    </Form>
    </Container>
    
  )
}
