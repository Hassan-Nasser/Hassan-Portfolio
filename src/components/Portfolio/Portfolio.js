import { Component } from "react";
import "./Portfolio.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";

// import PerfectScrollbar from 'react-perfect-scrollbar';
// import 'react-perfect-scrollbar/dist/css/styles.css';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      header: "",
      link: "",
      description: "",
    };
  }
  setShow = (flag, header = "", link = "", description = "") => {
    this.setState({ show: flag });
    if (flag) {
      this.setState({ header, link, description });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <header>
            <h2>Here’s some stuff I made recently.</h2>
            <p>Proin odio consequat sapien vestibulum consequat.</p>
          </header>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "House Designer",
                      "https://www.youtube.com/embed/YhcBwb5yHRs?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      `A marketing software made as a freelance
                      project for houses realtor to advertise houses more efficient and help
                       people sell and buy houses faster.\n The software is still under development as it
                        still a prototype for what the final product will look like.  Ornare nOrnare nulla 
                        proin odio consequat.Ornare nulla proinfffffffffffffffffffff
                        fff ffff ffff fffffff fffdddd ddddddddddd ddddddddddddd ddddddddd ddd dddddddddddddddd d 
                        ddddddddd ddddddddd dddd ddddd
                        dddddddd dddddddd dddddddddd ddddddd ddddd dddd
                        dddddddd ffff ffffff fff fff ffodio co`
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>House Designer</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
              
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "A.M.R.B",
                      "https://www.youtube.com/embed/GOOo-1z1fAo?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      "An augmented reality app made as a freelance project, part of a PhD in 'Innovative ways of teaching' to help students of faculty of physical education to learn in more fun and innovative ways.\n The app contains 35+ 3D animations and videos  and more content will be added for all 4 years students."
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>A.M.R.B</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
               
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "In & Out Furniture",
                      "https://www.youtube.com/embed/e3VO16OFZt0?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      "A 360 Tour app for In & Out Furniture , made as part of marketing project at NASNAV , I worked as a unity developer on the project."
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>In & Out Furniture</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
              
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "Half Anger",
                      "https://www.youtube.com/embed/Wu1BcZa9H-Y?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      "Android 2D Game made as a freelance project for kindergarten to help children have fun and learn.\nThe game developed and designed by me."
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>Half Anger</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
              
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "Spooky Night",
                      "https://www.youtube.com/embed/efswIMSTOJ8?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      "Android 2D Game made as a freelance project for kindergarten to help children have fun and learn.\n The game developed and designed by me"
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>Spooky Night</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
                
              </article>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <article className="box style2">
                <button
                  className="transparent image featured"
                  onClick={() =>
                    this.setShow(
                      true,
                      "Opening Cutscene From 'Last Hope'",
                      "https://www.youtube.com/embed/F_cWczxgisM?list=PL_qCkPtr9F2m6bk3zs98Mjsi-IHohAZ2b",
                      "video and soundtrack editing done by me \n Last Hope is a PC game for senior year graduation project \n I worked as a unity developer , video editor , 2D designer and 3D animator in the project "
                    )
                  }
                >
                  <img src="images/pic02.jpg" alt="" />
                  <h3>Last Hope</h3>
                </button>
                {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
               
              </article>
            </div>
          </div>
          <footer>
            <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
            <a href="#contact" className="button large scrolly">
              <button type="button" className="btn btn-lg btn-primary">
                Get in touch with me
              </button>
            </a>
          </footer>
          <Modal
            size="xl"
            show={this.state.show}
            onHide={() => this.setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                {this.state.header}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="video image featured">
                <iframe
                  src={this.state.link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Scrollbars
                style={{ height: 100 }}
                // autoHide
              >
                <div className="description">{this.state.description}</div>
              </Scrollbars>
            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
export default Portfolio;
