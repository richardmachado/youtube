import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";



import "./Footer.css"

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Contact</h5>
            <p>
             Richard Machado
            </p>
            <p>
                San Diego, CA
            </p>
          </MDBCol>
          {/* <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/signup" target="_blank" rel="noopener noreferrer"> Signup</a>
              </li>
              <li className="list-unstyled">
                <a href="/about">Youtube</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">More</a>
              </li>
              
              
            </ul>
          </MDBCol> */}
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://kind-poincare-ae2204.netlify.com/"> Richard-Machado </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;