import { Component } from "react";
import "./Highlight.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import Tag from "../Tag/Tag";
import Project from "../Project/Project";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { db } from "../../config/firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'bootstrap/dist/css/bootstrap.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};


class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      currentProject: "",
      projectswithTag: [],
      projects: [],
      tags: [],
      projectImage: "",
      value: 0
    };
  }


  componentDidMount() {
    this.getProjects();
  }

  getProjects = async () => {
    const projects = await firebase.firestore().collection('projects').where("spotlight", "==", true).get();
    const projectList = projects.docs.map(doc => doc.data());
    this.setState({ projects: projectList });
  }

  setShow = (flag, currentProject = "") => {
    this.setState({ show: flag });
    if (flag) {
      this.setState({ currentProject });
    }
  };


  render() {
    return (
      <>
        <div className="container">
          <div className="row d-flex justify-content-center">
            <header>
              <h2>Career Highlight</h2>
              <p>
                These are some of the biggest projects I worked on.
              </p>
            </header>
          </div>
          <div className="row ">
            <div className="col-12 d-flex justify-content-center highlight-work">
              <Carousel
                ssr={false}
                infinite
                swipeable
                draggable={false}
                ref={el => (this.Carousel = el)}
                partialVisbile={false}
                itemClass="slider-image-item"
                responsive={responsive}
                containerClass="carousel-container-with-scrollbar"
                autoPlay={true}
              >
                {this.state.projects && this.state.projects.map((project) =>

                  <Project key={project.name}
                    tagsExist={false}
                    project={project}
                    headerPosition="hightlight-header-position"
                    showModal={() => this.setShow(true, project)} />
                )}
              </Carousel>
            </div>



          </div>
          <div>

          </div>
          <footer>
            <a href="#portfolio" className="button large scrolly">
              <button type="button" className="btn btn-lg btn-primary">
                My Recent Work
              </button>
            </a>
          </footer>
          <Modal
            size="xl"
            show={this.state.show}
            onHide={() => this.setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title"
            className="Modal-Style"
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
                  src={this.state.currentProject.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <Tag className="tag" tags={this.state.currentProject.tags} />
              <Scrollbars
                style={{ height: 100 }}
              // autoHide
              >
                <p className="description">{this.state.currentProject.description}</p>

              </Scrollbars>

            </Modal.Body>
          </Modal>
        </div>
      </>
    );
  }
}
export default Portfolio;
