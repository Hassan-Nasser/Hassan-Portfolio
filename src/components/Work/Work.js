import { Component } from "react";
import "./Work.scss";

class Work extends Component {
  render() {
    return (
      <>
        <div className="container">
          <header>
            <h2>Here's all the stuff I do</h2>
            <p>Softwares and technologies i have multiple years experience at.</p>
          </header>
          <div className="row aln-center">
            <div className="col-xl-3 col-md-6 col-sm-12">
              <section className="box style1">
                <span className="image-icon ">
                  <img src={require("../../images/Unity.png")} alt=""/>
                </span>
                <h3 className="subject">Unity</h3>
                <p className="desription">
                  Used unity game engine for {new Date().getFullYear() - 2017}+ years in different projects,
                  from games to simulations to mobile apps.
                </p>
              </section>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <section className="box style1">
                <span className="image-icon ">
                <img src={require("../../images/Unreal.png")} alt=""/>
                </span>
                <h3 className="subject">Unreal</h3>
                <p className="desription">
                  Experienced in unreal engine and capable of developing all kind of AAA games with it,
                  From battle royale games to FPS games to MMO games.
                </p>
              </section>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <section className="box style1">
                <span className="image-icon ">
                <img src={require("../../images/Multiplayer.png")} alt=""/>
                </span>
                <h3 className="subject">Multiplayer</h3>
                <p className="desription">
                  Used different frameworks like Photon and Unet with unity to integrate multiplayer to different kind of games,
                  board games with turn based and Host migration multiplayer, and real-time strategy games.
                </p>
              </section>
            </div>
            <div className="col-xl-3 col-md-6 col-sm-12">
              <section className="box style1">
                <span className="image-icon ">
                <img src={require("../../images/AR&VR.png")} alt=""/>
                </span>
                <h3 className="subject">AR & VR</h3>
                <p className="desription">
                  Developed all kind of AR apps and VR games, used vuforia marker AR to develop multiple mobile apps,
                  used SteamVR to develop multiple PC games and simulations.
                </p>
              </section>
            </div>
          </div>
          <footer>
            <a href="#highlight" className="button large scrolly">   
              <button type="button" className="btn btn-lg btn-primary">Featured Projects</button>
            </a>
          </footer>
        </div>
      </>
    );
  }
}
export default Work;
