import * as React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import style from '../Navbar/navbar.module.css';

function Navigation() {
  return (
    <>
    <Navbar id={style.barra}>
      <Link to="/">
        <img src="/assets/img/logo.png" width="220" height="70" alt="logo"/>
      </Link>
      <Nav>
        <Container id={style.items}>
        <Nav.Link><Link to="/como-funciona" class="text-reset">Como funciona</Link></Nav.Link>
        <Nav.Link><Link to="/propietario" class="text-reset">Soy propietario</Link></Nav.Link>
        <Nav.Link><Link to="/rentar" class="text-reset">¿Quiero rentar?</Link></Nav.Link>
        <Nav.Link><Link to="/signup_in" class="text-reset">Mi cuenta</Link></Nav.Link>
        </Container>
      </Nav>
    </Navbar>
    </>
  );
}

export default Navigation;
