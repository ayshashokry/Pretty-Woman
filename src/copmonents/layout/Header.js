import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

// Bootstrap
import { Image } from "react-bootstrap";
import { Nav, Navbar } from "react-bootstrap";

// Images
import logo from "../../img/logo.png";

export default class Header extends Component {
  constructor() {
    super();
    this.scrollContact = this.scrollContact.bind(this);
  }

  scrollContact = e => {
    e.preventDefault();
    this.props.handleScrollContact();
  };

 
  render = () => {
  
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" className="navbar-dark pt-1">
          <Navbar.Brand>
            <Link className="" to="/">
              <Image src={logo} alt="logo" className="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="" style={{    alignItems: "flex-end"}}>
              {" "}
              <Link className="navbar-brand prettynav" to="/">
                HOME
              </Link>
              <Link
                className="navbar-brand prettynav"
                onClick={this.scrollContact}
                to="/"
              >
                CONTACT
              </Link>
              <div className="dropdown navbar-brand prettynav">
                PRODUCTS
                <div className="dropdown-content">
                  <NavLink exact activeStyle={styling} to="/products/Face">
                    Face
                  </NavLink>
                  <NavLink exact activeStyle={styling} to="/products/Eyes">
                    Eyes
                  </NavLink>
                  <NavLink exact activeStyle={styling} to="/products/Lips">
                    Lips
                  </NavLink>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  };
}

const styling = {
  color: "white",
  fontWeight: "bold",
  fontSize: "32px",
  textDecoration: "none"
};
