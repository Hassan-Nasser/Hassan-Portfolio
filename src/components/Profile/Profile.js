import { Component } from "react";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className=" col-12-medium ptofile-section">
              <span className="image fit">
                <img className="profile-image" src="images/ProfilePicture.jpg" alt="" />
              </span>
            </div>

            <div className="title-profile col-12-medium">
              <header>
                <h1 className="profile-header">
                  Hi. I'm <strong>Hassan Nasser</strong>
                </h1>
              </header>
              <p className="intro">
                I am a game developer living in Cairo, Egypt. 
                I recived my B.Sc from faculty of Computers and Artificial Intelligence, Benha University.<br/>
                I have been working as a game developer for 4+ years. 
                I enjoy making games and particpate in everything related to games.
              </p>
              <a href="#work" className="button large scrolly">
              <button type="button" className="btn btn-lg btn-primary">Learn about what I do</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Profile;
