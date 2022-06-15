import { Component } from "react";
import "./Portfolio.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import Tag from "../Tag/Tag";
import Project from "../Project/Project";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { db } from "../../config/firebase";
import { collection, getDocs } from 'firebase/firestore/lite';


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
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
      projects: [],
      projectImage: ""
    };
  }

  componentDidMount() {
    this.getProjects(db);
  }

  getProjects = async (db) => {
    const projects = collection(db, 'projects');
    const projectSnapshot = await getDocs(projects);
    const projectList = projectSnapshot.docs.map(doc => doc.data());
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
          <header>
            <h2>My Recent Work</h2>
            <p>
              Here are a few projects I've worked on recently. Want to see more?{" "}
              <a href="#contact">Email me</a>.
            </p>
          </header>
          <div>
            <Carousel
              ssr={false}
              infinite
              swipeable
              ref={el => (this.Carousel = el)}
              partialVisbile={false}
              itemClass="slider-image-item"
              responsive={responsive}
              containerClass="carousel-container-with-scrollbar"
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              {this.state.projects && this.state.projects.map((project) =>
                <Project key={project.name} project={project} />
              )}
            </Carousel>
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
            modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
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
