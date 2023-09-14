import React from "react";
import "./TopBar.css";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
// import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <h5 className="p-2 menu-item">Stories</h5>
              <h5 className="p-2 menu-item">DESTINATIONS</h5>
              <h5 className="p-2 menu-item">GUIDES</h5>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand>
            <img
              src="https://i.ibb.co/hdfqXF3/new-english-clipdrop-background-removal.png"
              alt=""
              width="150"
              height="150"
            />
            {/* <Link to="/">bloodstream</Link> */}
          </Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="" id="right-links">
              {/* <Link to="/" className="mx-2 fw-bold"> */}

              <h5 className="p-2 menu-item">MEMORIES</h5>
              <h5 className="p-2 menu-item">RESOURCES</h5>
              <h5 className="p-2 menu-item">ABOUT</h5>

              {/* </Link> */}
              {/* <Link to="/about-us" className="mx-2 fw-bold">
                About Us
              </Link> */}
              {/* <Link to="/search-donors" className="mx-2 fw-bold">
                Search Donors
              </Link>
              <Link to="/blood-requests" className="mx-2 fw-bold">
                Blood Requests
              </Link> */}
              {/* <Link to="/add-blood-request" className="mx-2 fw-bold">
                Add Blood Request
              </Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopBar;
