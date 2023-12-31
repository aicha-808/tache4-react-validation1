import { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import '../App.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const NavBar = () => {

  const [scrolle, setScrolle] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // ecoutons le scrolle de la page
  useEffect (() => {
    const scroller = () => {
      if (window.scrollY > 50) {
        setScrolle(true);
      } else{
        setScrolle(false)
      }
    }
    window.addEventListener('scroll', scroller);
    return ()  => window.removeEventListener('scroll', scroller)
  },[])
  
  const onActiveLink = (value) => {
    setActiveLink(value);
  }

    return(
      
        <Navbar expand="lg" className={scrolle? "scrolle" : ""}>
      <Container >
        <Navbar.Brand href="#about">
          <span className="w-semibold h1 text-light logo">Sunnyside</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        {/* <span className="Navbar-toggle-icon "></span> */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#about" className={activeLink === 'about'? "active navbar.link": 'navbar-link'}
            onClick={() => onActiveLink('home')}>About</Nav.Link>
            <Nav.Link href="#services" className={activeLink === 'services'? "active navbar.link text-dark" : 'navbar-link'}
            onClick={() => onActiveLink('services')}>Services</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects'? "active navbar.link": "navbar-link"}
            onClick={() => onActiveLink('pojects')}>Projects</Nav.Link>
          </Nav>
            <button className="btn bg-light rounded-5 py-2 px-3" onClick={() => alert('contacter...')}>Contact</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}