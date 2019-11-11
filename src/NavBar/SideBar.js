import React from 'react';
import { slide as Menu } from "react-burger-menu";

export default props => {
    return (
      // Pass on our props
      <Menu {...props}>
        <a className="menu-item" href="/">
          Home
        </a>
  
  
        <a className="menu-item" href="/youtube">
          YouTube
        </a>
  
        <a className="menu-item" href="/more">
         More
        </a>

        <a className="menu-item" href="/test">
       Test
        </a>

              </Menu>
    );
  };