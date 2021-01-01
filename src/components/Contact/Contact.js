import { Component } from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

class Contact extends Component {
  render() {
    return (
      <>
        <div className="container medium">
          <header>
            <h2>Have me make stuff for you.</h2>
            <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
          </header>
          <div className="row">
            <div className="col-12">
              <form method="post" action="#">
                <div className="row">
                  <div className="col-lg-6 col-sm-12">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-12">
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-lg-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-lg-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="col-lg-12">
                    <ul className="actions">
                      <li>
                        <input
                          type="submit"
                          className="btn btn-lg btn-primary"
                          value="Send Message"
                        />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-12">
              <hr />
              <h3>Find me on ...</h3>
              <ul className="social">
                <li>
                  <a href="https://www.twitter.com/HaSsSaN_NaSsSeR" target="_blank">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/hassan.nasser.1995/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} size="3x" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} size="3x" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="3x" />
                  </a>
                </li>
                <li>
                  <a href="" target="_blank">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Contact;
