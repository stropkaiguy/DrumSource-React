import {
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Navbar className="navbar sticky-top flex" expand="md" color="secondary">
      <NavbarBrand>
        <h1>
          <a style={{ color: "white" }} href="/">
            DrumS<FontAwesomeIcon icon={faDrum}></FontAwesomeIcon>urce
          </a>
        </h1>
      </NavbarBrand>
      <NavbarToggler
        className="bg-light"
        onClick={() => setMenuOpen(!menuOpen)}
      />
      <Collapse isOpen={menuOpen} navbar>
        <Nav className="ms-auto" navbar>
          <NavItem>
            <NavLink active href="/" className="text-white">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/learn" className="text-white">
              Learn
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/gear" className="text-white">
              Gear
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about" className="text-white">
              About
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
