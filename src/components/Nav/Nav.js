import { Component } from "react";
import "./Nav.scss";
import Profile from "../Profile/Profile";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";
import Highlight from "../Highlight/Highlight";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class NavBar extends Component {
  render() {
    return (
      <>

        <Navbar fixed="top"  variant="dark" className="nav-bar justify-content-between">
          <Container className="bar-container">
            <Nav className="me-auto">
              <Nav.Link href="#top">Profile</Nav.Link>
              <Nav.Link href="#work">Work</Nav.Link>
              <Nav.Link href="#highlight">Highlight</Nav.Link>
              <Nav.Link href="#portfolio">Portfolio</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <article
          id="top"
          className="wrapper style1"
          style={{ backgroundImage: "url('images/bg.png')" }}
        >
          <Profile />
        </article>

        <article id="work" className="wrapper style2">
          <Work />
        </article>

        <article id="highlight" className="wrapper style3">
          <Highlight />
        </article>

        <article id="portfolio" className="wrapper style3">
          <Portfolio />
        </article>

        <article id="contact" className="wrapper style4">
          <Contact />
        </article>
      </>
    );
  }
}
export default NavBar;
