import React from "react";
import "./Topbar.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="bg-warning">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="./stories" className="menu-item">
                <h5 className="p-2 menu-item">Stories</h5>
              </Link>
              <Link to="./" className="menu-item">
                <h5 className="p-2 menu-item">Destinations</h5>
              </Link>
              <Link to=".guides/" className="menu-item">
                <h5 className="p-2 menu-item">Guides</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <Link to="./">
              {" "}
              <img
                src="https://i.ibb.co/hdfqXF3/new-english-clipdrop-background-removal.png"
                alt=""
                width="150"
                height="150"
              />
            </Link>
            {/* <Link to="/">bloodstream</Link> */}
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" id="right-links">
              <Link to="./memories" className="menu-item">
                <h5 className="p-2 menu-item">Memories</h5>
              </Link>
              <Link to="./resources" className="menu-item">
                <h5 className="p-2 menu-item">Resources</h5>
              </Link>
              <Link to="./about" className="menu-item">
                <h5 className="p-2 menu-item">About</h5>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Topbar;
