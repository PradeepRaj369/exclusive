import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/home.css";
const Home = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="d-flex flex-column gap-2 pt-5 home-section " lg={3}>
            <Link className="nav-link">Woman's Fashion</Link>
            <Link className="nav-link">Mens Fashion</Link>
            <Link className="nav-link">Electronics</Link>
            <Link className="nav-link">Home & Lifestyle</Link>
            <Link className="nav-link">Medicine</Link>
            <Link className="nav-link">Sports & Outdoor</Link>
            <Link className="nav-link">Baby's & Toys</Link>
            <Link className="nav-link">Groceries & Pets</Link>
            <Link className="nav-link">Health & Beauty</Link>
          </Col>
          <Col lg={9} className="pt-3 py-0">
            <div className="carousel-img">
              <Carousel>
                <Carousel.Item>
                  <img
                    src="https://hips.hearstapps.com/hmg-prod/images/gh-best-skincare-products-6557978b58b57.png"
                    alt=""
                    id="slider-img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://www.lavamobiles.com/images2/card-feature-phones.jpg"
                    alt=""
                    id="slider-img"
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    src="https://storage.googleapis.com/gweb-uniblog-publish-prod/images/YoutubeEndCard-1.width-1000.format-webp.webp"
                    alt=""
                    id="slider-img"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </Col>
        </Row>
        <br />
        <div className="mt-5 d-flex ">
             <div className="badge">  </div>
             <p className="text-center">Today's</p>
        </div>
        
      </Container>
    </>
  );
};

export default Home;
