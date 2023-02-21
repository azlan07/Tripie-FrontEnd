import React, { useEffect, useState } from "react";
// import "../App.css";
import {
  Container,
  Nav,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

function NavBar() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // console.log(window.pageYOffset);
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setScrollY]);

  const scrolled = () => scrollY > 453;

  return (
    <>
      {/* <Navbar fixed="top" expand="lg" key={"lg"}>
        <Container className={`${!scrolled() ? "" : "invisible"}`}>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-lg"
            aria-labelledby="offcanvasNavbarLabel-expand-lg"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg">
                <img src={logo} alt="Logo" />
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Navbar.Collapse id="basic-navbar-nav" className={`${!scrolled() ? "" : "invisible"}`}>
                <Nav className='me-auto'>
                  <Nav.Link className="navbar-link" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/experience">
                    Experience
                  </Nav.Link>
                  <Nav.Link className="navbar-link" href="/destinations">
                    Destination
                  </Nav.Link>
                  <Nav.Link className="navbar-link " href="/about">
                    About
                  </Nav.Link>
                </Nav>
                <span className="button-sign">
                  <NavLink to="/register">
                    <button>
                      <span>Sign In</span>
                    </button>
                  </NavLink>
                </span>
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar> */}
    </>
  );
}

export default NavBar;
