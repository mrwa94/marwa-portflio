
import React from 'react';
import 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../compontes/Logo.js'




export default function Sidebar() {

  return (
    <div className='Sidebar'>

      <div className='container'>
        <div className='row'>
      
       <Logo/>

        
          <ui className ="">
            <il>
              <a  className='nav-link px-2' href='#Home'> HOME</a>
            </il>
            <il>
              <a  className='nav-link px-2'  href='#Home'>ABOUT ME</a>
            </il>
            <il>
              <a  className='nav-link px-2'  href='#Home'>PORTFLIO</a>
            </il>
            <il>
              <a  className='nav-link px-2'  href='#Home'>SERVERS</a>
            </il>
            <il>
              <a  className='nav-link px-2'  href='#Home'>CONTACT ME</a>
            </il>
          </ui>

        </div>

      </div>

 
  
   
   

  </div>
  )
}
