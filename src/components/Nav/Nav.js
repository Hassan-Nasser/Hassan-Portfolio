import { Component } from "react";
import "./Nav.scss";
import Profile from "../Profile/Profile";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";
import Portfolio from "../Portfolio/Portfolio";

class Nav extends Component {
  render() {
    return (
      <>
        <nav id="nav">
          <ul className="container">
            <li>
              <a href="#top">Profile</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

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
export default Nav;
