import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import{Link} from "react-router-dom"
import "./Navbar.css";

let NavbarNotes = (props) => (
  <div>
    <Navbar color="faded" light expand="md" className="navbar-custom">
      <NavbarBrand href="#">{props.brand}</NavbarBrand>
      <NavbarToggler onClick={props.toggle}/>
      <Collapse navbar isOpen={props.isOpen}>
        <Nav className="ml-auto" navbar>
          {props.links.map((item, index) => (
            <NavItem key={item.name + index}>
              <Link to={item.url}>{item.name}</Link>
            </NavItem>
          ))
}

        </Nav>
      </Collapse>
    </Navbar>
  </div>
)

export default NavbarNotes;
