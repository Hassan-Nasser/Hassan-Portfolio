import { Component } from "react";
import "./Portfolio.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import projects from "../../constants/projects.json";

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
            <h2>My Recent Work</h2>
            <p>
              Here are a few projects I've worked on recently. Want to see more?{" "}
              <a href="#contact">Email me</a>.
            </p>
          </header>
          <div className="row">
           {projects.map((project)=>
            <div key={project.id} className="col-lg-4 col-md-6 col-sm-12">
            <article className="box style2">
              <button
                className="transparent image featured"
                onClick={() =>
                  this.setShow(
                    true,
                    project.name,
                    project.url,
                    project.description
                  )
                }
              >
                <img src={require(`../../images/${project.cover}`)} alt="" />
                <h3>{project.name}</h3>
              </button>
              {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
            </article>
          </div>
           )}
           
         
          </div>
          <footer>
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
                  title="myFrame"
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
