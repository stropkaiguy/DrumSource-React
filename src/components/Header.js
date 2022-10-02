import {
  Container,
  Row,
  Col,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDrum } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <Navbar className="navbar sticky-top py-3 flex" color="secondary">
      <NavbarBrand>
        <h1>
          <a style={{ color: "white" }} href="/">
            DrumS<FontAwesomeIcon icon={faDrum}></FontAwesomeIcon>urce
          </a>
        </h1>
      </NavbarBrand>

      <Nav>
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
      </Nav>
    </Navbar>
  );
};

export default Header;
