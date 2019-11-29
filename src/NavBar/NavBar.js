
import React, { useState, } from 'react';

import {
 
  Switch,
  Route,
  Link } from "react-router-dom";

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';


import Youtube from '../Youtube/Youtube2';
import Home from '../Home';



  const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
     
             <div>
            <Navbar color="light" light expand="md">
          <NavbarBrand href="/"> </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <Link  activeOnlyWhenExact={true} to ="/" activeClassName="selectedLink">Home</Link>
              </NavItem>
         
              <NavItem>
                <Link to="/youtube/"  >Youtube</Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="#" target ="_blank">Nothing</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    Test 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/youtube">
            <Youtube />
            </Route>
        </Switch>
       
      </div>





    );  
 




      
  }


  
  

export default NavBar;