import { Component, useEffect, useState } from "react";
import "./Portfolio.scss";
import Modal from "react-bootstrap/Modal";
import { Scrollbars } from "react-custom-scrollbars";
import projects from "../../constants/projects.json";
import Tag from "../Tag/Tag";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

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
      currentProject: ""
    };
  }



  setShow = (flag, currentProject = "") => {
    this.setState({ show: flag });
    if (flag) {
      this.setState({ currentProject });
    }
  };

  CustomRightArrow = ({ onClick, ...rest }) => {
    const {
      onMove,
      carouselState: { currentSlide, deviceType }
    } = rest;
    // onMove means if dragging or swiping in progress.
    return <button onClick={() => onClick()} />;
  };


  render() {
    const CustomSlider = ({ carouselState }) => {
      let value = 0;
      let carouselItemWidth = 0;
      if (this.Carousel) {
        carouselItemWidth = this.Carousel.state.itemWidth;
        const maxTranslateX = Math.round(
          // so that we don't over-slide
          carouselItemWidth *
          (this.Carousel.state.totalItems -
            this.Carousel.state.slidesToShow) +
          150
        );
        value = maxTranslateX / 100; // calculate the unit of transform for the slider
      }
      const { transform } = carouselState;
      return (
        <div className="custom-slider">
          <input
            type="range"
            value={Math.round(Math.abs(transform) / value)}
            defaultValue={0}
            max={
              (carouselItemWidth *
                (carouselState.totalItems - carouselState.slidesToShow) +
                (this.state.additionalTransfrom === 150 ? 0 : 150)) /
              value
            }
            onChange={e => {
              if (this.Carousel.isAnimationAllowed) {
                this.Carousel.isAnimationAllowed = false;
              }
              const nextTransform = e.target.value * value;
              const nextSlide = Math.round(nextTransform / carouselItemWidth);
              if (
                e.target.value == 0 &&
                this.state.additionalTransfrom === 150
              ) {
                this.Carousel.isAnimationAllowed = true;
                this.setState({ additionalTransfrom: 0 });
              }
              this.Carousel.setState({
                transform: -nextTransform, // padding 20px and 5 items.
                currentSlide: nextSlide
              });
            }}
            className="custom-slider__input"
          />
        </div>
      );
    };
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
            <Carousel
              ssr={false}
              infinite
              swipeable
              ref={el => (this.Carousel = el)}
              partialVisbile={false}
              customButtonGroup={<CustomSlider />}
              itemClass="slider-image-item"
              responsive={responsive}
              containerClass="carousel-container-with-scrollbar"
              autoPlay={false}
              shouldResetAutoplay={false}
            >
              {projects && projects.map((project) =>
                <div key={project.id} className="col-lg-4 col-md-6 col-sm-12" class="image-container increase-size">
                  <article className="box style2" draggable={false}
                    style={{ width: "100%", cursor: "pointer" }}>
                    <button
                      className="transparent image featured"
                      onClick={() =>
                        this.setShow(
                          true,
                          project
                        )
                      }
                    >
                      <img src={require(`../../images/${project.cover}`)} alt="" />
                      <h3>{project.name}</h3>
                      <Tag className="tag tag-position" tags={project.tags} />
                    </button>
                    {/* <!-- <button data-toggle="modal" data-target="#exampleModal" type="button" class="btn btn-primary"><img src="images/pic01.jpg" alt="" /></button> --> */}
                  </article>
                </div>
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
