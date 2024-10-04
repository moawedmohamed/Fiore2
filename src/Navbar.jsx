import React, { useState } from "react";
import { Navbar, Container, Nav, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

function Navbar1() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <div className="nav">
      <div className="input">{/* Add search input if needed */}</div>
      <div className="Navbar">
        <h1>Fióre</h1>
        <div className="leftIcons">
          <i
            className={`fa-regular ${isDarkMode ? "fa-sun" : "fa-moon"}`}
            onClick={toggleDarkMode}
            style={{ cursor: "pointer", fontSize: "24px" }}
          ></i>
          <i className="fa-regular fa-heart"></i>
          <a href="https://login-sigma-sable.vercel.app/">
            <p>Account</p>
          </a>
        </div>

        <Navbar
          expand="lg"
          className="bg-body-tertiary"
          style={{ width: "100%" }}
        >
          <Container fluid>
            <Form className="d-flex">
              <Form.Control
                style={{
                  backgroundColor: " rgb(226, 226, 226)",
                  border: "none",
                }}
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="custom-nav">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Flowers</Nav.Link>
                <Nav.Link href="#link">Plants</Nav.Link>
                <Nav.Link href="#link">Services</Nav.Link>
                <Nav.Link href="#link">Floral Classes</Nav.Link>
                <Nav.Link href="#link">Our Story</Nav.Link>
                <Nav.Link href="#link">Blog</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default Navbar1;
