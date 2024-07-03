import React, { useContext, useRef } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/home.css";
import { ProviderContext } from "./ContextProvider";
const Home = () => {
  const { time, products, loading } = useContext(ProviderContext);
  const carouselRef = useRef(null);

  if (loading) {
    return <div>Loading...</div>;
  }

  const chunkSize = 4;
  const productChunks = [];

  for (let i = 0; i < products.length; i += chunkSize) {
    productChunks.push(products.slice(i, i + chunkSize));
  }

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };
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
        <div className="badge-section">
          <div className="badge"> </div>
          <p className="mt-3">Today's</p>
        </div>

        {/* ------------Flash Sales------- */}
        
        <div className="d-flex mt-5 justify-content-between">
          <div className="timer">
            <h1>Flash Sales</h1>
            <div className="timer-inner">
              <div>
                <p className="timer-label">Days</p>
                <h3>{time.days}</h3>
              </div>
              <span className="timer-span">:</span>
              <div>
                <p className="timer-label">Hours</p>
                <h3>{time.hours}</h3>
              </div>
              <span className="timer-span">:</span>
              <div>
                <p className="timer-label">Minutes</p>
                <h3>{time.minutes}</h3>
              </div>
              <span className="timer-span">:</span>
              <div>
                <p className="timer-label">Seconds</p>
                <h3>{time.seconds}</h3>
              </div>
            </div>
          </div>
          <div className="carousel-custom-controls">
            <button onClick={handlePrev} className="btn btn-primary ">
              Previous
            </button>
            <button onClick={handleNext} className="btn btn-primary">
              Next
            </button>
          </div>
        </div>

        {/* ---------Fetching Products from API-----------  */}

        <div className=" mt-5 ">
          <Carousel ref={carouselRef} controls={false} indicators={false}>
            {productChunks.map((productChunk, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {productChunk.map((product) => (
                    <Col key={product.id} sm={3}>
                      <div
                        className="card"
                        style={{ margin: "auto", marginBottom: "20px" }}
                      >
                        <img
                          src={product.images[0]}
                          className="card-img-top"
                          alt={product.title}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          {/* <p className="card-text">{product.description}</p>yyy */}
                          <p className="card-text">${product.price}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Container>
    </>
  );
};

export default Home;
