import React from 'react'
import '../../src/App.css'
import Logo from '../assets/images.png'
import { Link, NavLink } from 'react-router'
// import { Button, Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'


const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={Logo} alt="Img" width={60} />
            <ul>
                <li>
                    {/* <Link to="/">Home</Link> */}
                    <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/">Home</NavLink>
                </li>
                <li>
                    {/* <Link to="/profile">Profile</Link> */}
                    <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/profile">Profile</NavLink>
                </li>
                <li>
                    {/* <Link to="/dashboard">Dashboard</Link> */}
                    <NavLink className={({ isActive }) => isActive ? 'active-link' : ''} to="/dashboard">Dashboard</NavLink>
                </li>
            </ul>
            {/* <Button variant="danger">Setting1</Button> */}
            <button>Setting</button>


        </div>

        // <Navbar expand="lg" className="bg-body-tertiary">
        //     <Container>
        //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="me-auto">
        //                 <Nav.Link href="#home">Home</Nav.Link>
        //                 <Nav.Link href="#link">Link</Nav.Link>
        //                 <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        //                     <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.2">
        //                         Another action
        //                     </NavDropdown.Item>
        //                     <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        //                     <NavDropdown.Divider />
        //                     <NavDropdown.Item href="#action/3.4">
        //                         Separated link
        //                     </NavDropdown.Item>
        //                 </NavDropdown>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default Navbar
