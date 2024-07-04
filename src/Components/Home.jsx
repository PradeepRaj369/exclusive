import React, { useContext, useRef, useState } from "react";
import { Container, Row, Col, Carousel,Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/home.css";
import { ProviderContext } from "./ContextProvider";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { time, products, loading, addToCart, item } = useContext(ProviderContext);
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

            {/* ----------- Today's ------------- */}

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
            <button onClick={handlePrev} className="carrousel-btn">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button onClick={handleNext} className="carrousel-btn">
              <i class="bi bi-arrow-right"></i>
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
                        style={{ margin: "auto", marginBottom: "30px", height:"220px"}}
                        id="hover-image-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <img
                          src={product.images[0]}
                          className="card-img-top"
                          alt={product.title}
                          id="card-img"
                        />
                        {isHovered && (
                          <button
                            className="add-to-cart-button"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>
                        )}
                        <i class="bi bi-heart" id="wishlist"></i>
                        <i class="bi bi-eye" id="eye"></i>
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
        <div className="d-flex justify-content-center align-items-center mt-5 view-cart-btn">
          <button className="view-btn">View All Products</button>
        </div>

          {/* --------------------- Categories ---------------------- */}

        <div className="badge-section">
          <div className="badge"> </div>
          <p className="mt-3">Categories</p>
        </div>

        <div className="d-flex mt-5 justify-content-between">
          <div className="Categories-section">
            <h1>Browse By Category</h1>
          </div>
          <div className="carousel-custom-controls">
            <button onClick={handlePrev} className="carrousel-btn">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button onClick={handleNext} className="carrousel-btn">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="Category-items">
            <div>
            <i class="bi bi-phone"></i>
            <p>Phones</p>
            </div>
            <div>
            <i class="bi bi-laptop"></i>
            <p>Computers</p>
            </div>
            <div>
            <i class="bi bi-smartwatch"></i>
            <p>SmartWatch</p>
            </div>
            <div>
            <i class="bi bi-camera"></i>
            <p>Camera</p>
            </div>
            <div>
            <i class="bi bi-headphones"></i>
            <p>HeadPhones</p>
            </div>
            <div>
            <i class="bi bi-controller"></i>
            <p>Gaming</p>
            </div>
        </div>

        {/* ------------- Best Selling  Products---------------- */}

        <div className="badge-section">
          <div className="badge"> </div>
          <p className="mt-3">This Month</p>
        </div>

        <div className="d-flex mt-5 justify-content-between">
          <div className="Categories-section">
            <h1>Best Selling Products</h1>
          </div>
          <div className="carousel-custom-controls">
            <button style={{backgroundColor:"#c51919", color:"white", border:"none", padding:"10px 25px", borderRadius:"5px"}} >View All</button>
          </div>
        </div>

        <div className=" mt-5 ">
          <Carousel ref={carouselRef} controls={false} indicators={false}>  
                <Row>
                  {products.slice(0, 4).map((product) => (
                    <Col key={product.id} sm={3}>
                      <div
                        className="card"
                        style={{ margin: "auto", marginBottom: "30px", height:"220px"}}
                        id="hover-image-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <img
                          src={product.images[0]}
                          className="card-img-top"
                          alt={product.title}
                          id="card-img"
                        />
                        {isHovered && (
                          <button
                            className="add-to-cart-button"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>
                        )}
                        <i class="bi bi-heart" id="wishlist"></i>
                        <i class="bi bi-eye" id="eye"></i>
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          {/* <p className="card-text">{product.description}</p>yyy */}
                          <p className="card-text">${product.price}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
          </Carousel>
        </div>
        <div className="jbl-product d-flex ">
        <div className="jbl-product-content">
            <h6 style={{color:"#00e600" , marginBottom:"10px"}}>Categories</h6>
            <h1 className="text-light">Enhance Your</h1>
            <h1 className="text-light mb-3">Music Experience</h1>
            <div className="jbl-timer">
              <div>
                <h5>{time.days}</h5>
                <p>Days</p>
              </div>
              <div>
              <h5>{time.hours}</h5>
              <p>Hours</p>
              </div>
              <div>
              <h5>{time.minutes}</h5>
              <p>Minutes</p>
              </div>
              <div>
              <h5>{time.seconds}</h5>
              <p>Seconds</p>
              </div>
            </div>
            <button>Buy Now!</button>
        </div>
              <img src="https://in.jbl.com/dw/image/v2/BFND_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dwbc5ed184/JBL_BOOMBOX3_WIFI_HERO_37919_x4.png?sw=320&sh=320" alt="" />
        </div>
        
        
        {/* --------------------- Explore Our Products --------------- */}

        <div className="badge-section">
          <div className="badge"> </div>
          <p className="mt-3">Our Products</p>
        </div>

        <div className="d-flex mt-5 justify-content-between">
          <div className="Categories-section">
            <h1>Explore Our Products</h1>
          </div>
          <div className="carousel-custom-controls">
            <button onClick={handlePrev} className="carrousel-btn">
              <i class="bi bi-arrow-left"></i>
            </button>
            <button onClick={handleNext} className="carrousel-btn">
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className=" mt-5 ">
          <Carousel ref={carouselRef} controls={false} indicators={false}>  
                <Row>
                  {products.slice(0, 8).map((product) => (
                    <Col key={product.id} sm={3}>
                      <div
                        className="card"
                        style={{ margin: "auto", marginBottom: "30px", height:"220px"}}
                        id="hover-image-container"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                      >
                        <img
                          src={product.images[0]}
                          className="card-img-top"
                          alt={product.title}
                          id="card-img"
                        />
                        {isHovered && (
                          <button
                            className="add-to-cart-button"
                            onClick={() => addToCart(item)}
                          >
                            Add to Cart
                          </button>
                        )}
                        <i class="bi bi-heart" id="wishlist"></i>
                        <i class="bi bi-eye" id="eye"></i>
                        <div className="card-body">
                          <h5 className="card-title">{product.title}</h5>
                          {/* <p className="card-text">{product.description}</p>yyy */}
                          <p className="card-text">${product.price}</p>
                        </div>
                      </div>
                    </Col>
                  ))}
                </Row>
          </Carousel>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-5 view-cart-btn">
          <button className="view-btn">View All Products</button>
        </div>

        <div className="aboutthird">
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-truck"></i>
              </div>
            </div>
            <br />
            <h4>FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-headset"></i>
              </div>
            </div>
            <br />
            <h4>24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-shield-check"></i>
              </div>
            </div>
            <br />
            <h4>MONEY BACK GUARANTEE</h4>
            <p> We reurn money within 30 days</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
