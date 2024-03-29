import { Component } from "react";
import "./Portfolio.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import Tag from "../Tag/Tag";
import Project from "../Project/Project";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { db } from "../../config/firebase";
import { collection, query, where, getDocs } from 'firebase/firestore/lite';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import Tab from "react-bootstrap/Tab";
import Tabs from 'react-bootstrap/Tabs';
import 'bootstrap/dist/css/bootstrap.css';

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
      projectswithTag: [],
      projects: [],
      tags: [],
      projectImage: "",
      value: 0
    };
  }

  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  };

  componentDidMount() {
    this.getProjects();
    this.getTags(db);
  }

  getProjects = async () => {
    const projects = await firebase.firestore().collection('projects').orderBy("order").get();
    const projectList = projects.docs.map(doc => doc.data());
    console.log("all = ", projectList);
    this.setState({ projects: projectList });
  }
  getTags = async (db) => {
    const tags = collection(db, 'tags');
    const tagSnapshot = await getDocs(tags);
    const tagList = tagSnapshot.docs.map(doc => {
      const data = {};
      data.name = doc.data().name;
      data.id = doc.id
      return data;
    });
    this.setState({ tags: tagList });
  }

  getProjectsWithTag = async (tagId) => {
    const tagRef = firebase.firestore().collection('tags').doc(tagId);
    const projects = await firebase.firestore().collection('projects').where('tags', 'array-contains', tagRef).orderBy("order").get();
    const projectListwithTag = projects.docs.map(doc => doc.data());
    this.setState({ projectswithTag: projectListwithTag });

  }
  onSelectTap = (event) => {
    this.getProjectsWithTag(event)
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

            <Tabs
              defaultActiveKey="0"
              id="uncontrolled-tab-example"
              className="mb-3"
              onSelect={(e) => this.onSelectTap(e)}
              justify
            >

              <Tab eventKey="0" title="All">
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
                  autoPlay={false}
                  shouldResetAutoplay={false}
                >
                  {this.state.projects && this.state.projects.map((project) =>
                    <Project
                      key={project.name}
                      tagsExist={true}
                      project={project}
                      headerPosition="normal-header-position"
                      showModal={() => this.setShow(true, project)} />
                  )}
                </Carousel>
              </Tab>
              {this.state.tags && this.state.tags.map(tag =>

                <Tab key={tag.id} eventKey={tag.id} title={tag.name}>
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
                    autoPlay={false}
                    shouldResetAutoplay={false}
                  >
                    {this.state.projectswithTag && this.state.projectswithTag.map((project) =>
                      <Project
                        key={project.name}
                        tagsExist={true}
                        project={project}
                        headerPosition="normal-header-position"
                        showModal={() => this.setShow(true, project)} />
                    )}
                  </Carousel>
                </Tab>

              )}



            </Tabs>


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
