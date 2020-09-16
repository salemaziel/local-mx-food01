import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
//import { LinkContainer } from "react-router-bootstrap";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
//import { useAuth } from "../util/auth.js";
//import { useRouter } from "../util/router.js";
import { navigateTo, Link } from "gatsby";
import './Navbar.scss'

function NavbarCustom2(props) {
  //  const auth = useAuth();

  //  const router = useRouter();

  return (
    <Navbar
      bg={props.bg}
      variant={props.variant}
      expand={
        props.expand
      } /*style={{background: 'transparent', backgroundColor: 'transparent'}}*/
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            className="d-inline-block align-top"
            src={props.logo}
            alt="Logo"
            height="80"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" className="border-0" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav
            className="mr-auto"
            defaultActiveKey="/"
            onSelect={(selectedKey) => navigateTo(`${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link as={Link} to="/menu" active={false}>
                Menu
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/catering" active={false}>
                Catering
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link as={Link} to="/about" active={false}>
                Our Story
              </Nav.Link>
            </Nav.Item>

            {/*<Nav.Item>
              <Nav.Link as={Link} to="/catering" active={false}>
                Catering
              </Nav.Link>
            </Nav.Item>*/}

            <NavDropdown
              as={Link}
              href="/more"
              eventKey="more"
              id="dropdown"
              title="More"
            >
              <NavDropdown.Item as={Link} eventKey="/faq" to="/faq" active={false}>
                FAQ
              </NavDropdown.Item>

              <NavDropdown.Item
                eventKey="/contact"
                to="/contact"
                active={false}
              >
                Contact
              </NavDropdown.Item>

              <NavDropdown.Item
                href="https://medium.com"
                target="_blank"
                active={false}
              >
                Blog
              </NavDropdown.Item>
            </NavDropdown>



          </Nav>
          <Nav className="mr-1">
            {/*<Nav.Item to="/auth/signin">
              <Nav.Link as={Link} to="/" active={false}>
                Sign in
              </Nav.Link>
    </Nav.Item>*/}
          </Nav>

          <Button
            variant="primary"
            onClick={() => {
              navigateTo("/#");
            }}
          >
            Order Online
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCustom2;
