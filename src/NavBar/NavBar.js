
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
import YouTubeSearch from "../Youtube/YouTubeSearch"
import 'bootstrap/dist/css/bootstrap.min.css';



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
                <NavLink tag={Link} to ="/" >Home</NavLink>
              </NavItem>
         
              <NavItem>
                <NavLink tag={Link} to="/youtube/"  >Youtube</NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/youtubesearch/"  >YouTube Search</NavLink>
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
                    Nothing
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Nothing
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

            <Route path="/youtubesearch">
            <YouTubeSearch />
            </Route> 
        </Switch>
       
      </div>





    );  
 




      
  }


  
  

export default NavBar;