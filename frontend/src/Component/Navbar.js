import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { getcurrent, logout } from '../Redux/Action/Action';
import { useNavigate } from 'react-router-dom';

function Navbar1() {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  useEffect(()=>{
dispatch(getcurrent())
  },[])
  const user=useSelector(state=>state.reducer.user)
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Profile">Profile</Nav.Link>

           {user?.name?null:
           <div>
        <Nav.Link href="/Login">Login</Nav.Link>
        <Nav.Link href="/Register">Register</Nav.Link>
           </div>}
           
           {user?.name?<Nav.Link onClick={()=>dispatch(logout(navigate))} >Logout</Nav.Link>:null}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbar1;