import React  from "react";
import {useState} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./CategoryList.module.css";
import * as Icon from "react-bootstrap-icons";

const CategoryList = () => {

  const [hovered , setHovered] = useState(false);


  const handleMenuHoverIn = ()=>{
    setHovered(!hovered);
  }

  const handleMenuHoverOut = ()=>{
    setHovered(false);
  }


  const dropDownMenu = hovered ? "show" : "";
  console.log(dropDownMenu);

  return (
    <>
      <Navbar expand="lg" id="categoryList" onMouseEnter={handleMenuHoverIn} onMouseLeave={handleMenuHoverOut}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Icon.List style={{ fontSize: "1.5rem" }} />
            <Nav className="ms-auto">
              <NavDropdown title="Dropdown" id="basic-nav-dropdown"  show={dropDownMenu}>
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default CategoryList;
