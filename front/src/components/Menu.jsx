import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom/esm/react-router-dom';

export default function Menu() {
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand  as={NavLink} to='/' >ProAtividade</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} activeClassName='active'  to='/cliente/lista' >Clientes</Nav.Link>
                        <Nav.Link as={NavLink} activeClassName='active' to='/atividade/lista' >Atividades</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown align='end' title="Leandro" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                Perfil
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Configurações
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Sair
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
