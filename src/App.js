import React, { Component} from 'react';

import './App.css';

// import Youtube from './Youtube';
import Navbar from "./NavBar/NavBar";
import SideBar from "./NavBar/SideBar";
// import Footer from "./Footer";


class App extends Component {
  render() {
    return (
     
      <div className="App">
         <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div className="App-header">
         
        <Navbar />  
          
        </div>
      
         {/* <Footer />  */}
      </div>
    );
  }
}

export default App;

