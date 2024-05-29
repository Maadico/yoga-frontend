import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import companyLogo from "../../assets/logo.png"; // Import your logo file

import { CgProfile } from "react-icons/cg";
function Header() {
  const isLoggedIn = localStorage.getItem("auth");
  const username = JSON.parse(localStorage.getItem("auth"))?.user.name;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">
          <img
            src={companyLogo}
            alt="Company Logo"
            height="30"
            className="d-inline-block align-top maadico-font"
          />{" "}
          <span className="maadico-font">MaaDico</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {!isLoggedIn ? (
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#programs">Programs</Nav.Link>
              <Nav.Link href="#instructors">Doctors</Nav.Link>
              <Nav.Link href="#gallery">Gallery</Nav.Link>
            </Nav>
          ) : (
            <Nav className="me-auto">
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          )}
          <Nav>
            {isLoggedIn && (
              <>
                <Nav.Link href="/dashboard/user/profile">
                  <span className="mx-1">
                    <CgProfile fontSize={20} />{" "}
                  </span>
                  {username}
                </Nav.Link>
              </>
            )}
            {!isLoggedIn && <Nav.Link href="/contact">Contact</Nav.Link>}
            {!isLoggedIn && (
              <>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/register">Signup</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
