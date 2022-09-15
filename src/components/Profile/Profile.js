import { Component } from "react";
import "./Profile.scss";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="profile-img col-md-6 col-sm-12 col-lg-4">
              <span className="image fit">
                <img className="profile-image" src={require('../../images/ProfilePicture.jpg')} alt="pic" />
              </span>
            </div>

            <div className="title-profile col-md-6 col-sm-12 col-lg-6">
              <header>
                <h1 className="profile-header">
                  Hi. I'm <strong>Hassan Nasser</strong>
                </h1>
              </header>
              <div className="intro">
                <p>
                  I am a game developer living in Cairo, Egypt.
                  I recived my B.Sc from faculty of Computers and Artificial Intelligence, Benha University.<br />
                  I have been working as a game developer for {new Date().getFullYear() - 2017}+ years.
                  I enjoy making games and particpate in everything related to games.
                </p>
              </div>

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
