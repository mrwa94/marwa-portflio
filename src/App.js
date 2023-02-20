
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './compontes/Pages/Home.js';
import Logo from './compontes/Logo.js'
import About from './compontes/Pages/About.js';
import Portflio from './compontes/Pages/Portflio.js';
import Services from './compontes/Pages/Services.js';
import Contact from './compontes/Pages/Contact.js';
import {  Routes, Route, Link  } from 'react-router-dom';
import { Col, Row  } from 'react-bootstrap';





function App() {
  return (
    <Row>
      <Col lg="4">
          <div className='Sidebar'>
             <div className='container'>
                  <div className='row'>
                        <Logo/>

        <ui className ="">
        
          <il>
          <Link  className='nav-link px-2 a-sidebar' 
            to='/'> HOME</Link>
          </il>

          <il>
            <Link className='nav-link px-2 a-sidebar' 
             to='/about'> ABOUT ME</Link>
          </il>

          <il>
           <Link   className='nav-link px-2 a-sidebar'  
           to = '/services'> SERVICES  </Link>
          </il>

          <il>
            <Link  className='nav-link px-2 a-sidebar' 
             to='/portflio'>  PORTFLIO</Link>
          </il>

          <il>
            <Link className='nav-link px-2 a-sidebar'  
            to='/contact'> CONTACT ME</Link>
          </il>
        </ui>   
      </div>
      </div>
      </div>
      </Col>

      <Col>
       <Routes>
            <Route path='/'     
                  element = {<Home/>}     />
            <Route path='/about'  
                element = {<About/>}    />
            <Route path='/portflio'   
               element = {<Portflio/>}    />
            <Route path='/services'  
             element = {<Services/>} />
            <Route path='/contact'   
             element = {<Contact/>}  /> 
         </Routes>
     </Col>
  </Row>















    
   
  );
}

export default App;
