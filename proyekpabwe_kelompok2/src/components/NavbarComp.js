import React,{Component} from 'react';
import Container from 'react-bootstrap/Container';
import {Navbar, Nav, NavDropdown} from 'react-bootstrap'
import logo_Del from '../Assets/logo_Del.png'
import Dropdown from 'react-bootstrap/Dropdown'
import "../components/NavbarComp.css"

function BasicExample() {
  return (
    <Navbar bg="primary" expand="lg" className="sticky-top" style={{height: '75px', opacity: '0.8'}}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Navbar.Brand href='#home'>
            <img src={logo_Del} alt="logo Del" width="65" height="65" class="d-inline-block" />
            </Navbar.Brand>
            <Navbar.Brand id="letter-space" href='#home' className="text-light py-3">
                Sarjana Informatika  
            </Navbar.Brand>
          </Nav>
          <Nav id="letter-space">
            <Nav.Link href="#home" className='text-light px-4'>Beranda</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Kegiatan</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Prestasi</Nav.Link>
            <Nav.Link href="#link" className='text-light px-4'>Hubungi Kami</Nav.Link>
            <Dropdown className='px-4'>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Tentang Kita
                </Dropdown.Toggle>
                <Dropdown.Menu >
                    <NavDropdown.Item href="#/action-1">Visi Misi</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-2">Staff Dosen</NavDropdown.Item>
                    <NavDropdown.Item href="#/action-3">Struktur Organisasi</NavDropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;