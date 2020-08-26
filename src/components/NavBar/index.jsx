import React, {useState} from 'react'
import './index.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText
  }  from 'reactstrap';

  import CartIcon from '../CartIcon/index.jsx'

  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar className="px-5" color="light" light expand="md" margin="2">
          <NavbarBrand href="/">LaTiendita</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Productos</NavLink>
              </NavItem>
            </Nav>
            <NavbarText className="cart">
                <CartIcon/>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  export default NavBar