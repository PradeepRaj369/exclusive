import React, { useContext, useRef, useState } from "react";
import { Col, NavLink, Row } from "react-bootstrap";
import "../CSS/ProductDetails.css";
import { ProviderContext } from "./ContextProvider";
const ProductDetails = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { time, products, loading, addToCart, item ,count,increment,decrement,cart,selectedProduct} = useContext(ProviderContext);
  const carouselRef = useRef(null);
  const formattedcount = count < 10 ? `0${count}` : count;

  return (
    <>
      <div className="homelink">
        <NavLink
          activeClassName="home-link-active"
          className="home-link"
          to="/"
        >
          Account&nbsp;&nbsp;
        </NavLink>
        /&nbsp;&nbsp;
        <NavLink
          activeClassName="home-link-active"
          className="home-link"
          to="/"
        >
          Gaming&nbsp;&nbsp;
        </NavLink>
        /
        <NavLink
          activeClassName="contact-link-active"
          className="contact-link"
          to="/contact"
          style={{ fontWeight: "500" }}
        >
          Havic HV G-92 Gamepad
        </NavLink>
      </div>
      <section className="row product-img-section">
        <div className="col product-img" >
          <div className="sub-img">
            <div>
              <img src={selectedProduct.images[0]} alt="" />
            </div>
            <div>
            <img src={selectedProduct.images[1]} alt="" />
            </div>
            <div>
              <img src={selectedProduct.images[2]} alt="" />
              </div>
            <div>
            {/* <img src={selectedProduct.images[3]} alt="" /> */}
            </div>
          </div>
          <div className="main-img">
          <img src={selectedProduct?.images[0]} alt="" style={{height:"550px", width:"380px", objectFit:"fill"}}/>
          </div>
        </div>
        <div className="col product-content-Section">
          <h3>{selectedProduct.title}</h3>
          <div className="d-flex">
            <p>Rating</p>&nbsp;
            <p>(150 Reviews)</p>&nbsp;&nbsp;| &nbsp;&nbsp;
            <span className="text-success">In Stock</span>
          </div>
          <p>${selectedProduct.price}</p>
          <p>
          {selectedProduct.description}
          </p>
          <div style={{borderTop:"1.7px solid black", marginTop:"10px"}}>
            <div className="colours">
              <p className="mt-2 fs-5">Colours :</p>
              <div className="colour-pick" style={{ backgroundColor: "green" }}>
                {" "}
              </div>
              <div
                className="colour-pick"
                style={{ backgroundColor: "yellow" }}
              >
                {" "}
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <p className="mt-2 fs-5">Size :</p>
              <span className=" border rounded-1 p-1 ">XS</span>
              <span className="border rounded-1 p-1 px-2">S</span>
              <span className="border rounded-1 p-1 px-2">M</span>
              <span className="border rounded-1 p-1 px-2">L</span>
              <span className="border rounded-1 p-1 ">XL</span>
            </div>
            <div className="d-flex gap-5 mt-3">
              <div className="count-value d-flex">
                <button
                  className="border-1 w-20 text-bg-light fw-2 p-2 rounded-1"
                  style={{ width: "45px" }}
                >
                  -
                </button>
                <span
                  className="border-1 text-center p-2"
                  style={{ width: "80px", border: "2px solid black" }}
                >
                  {formattedcount}
                </span>
                <button
                  className="border-1 w-20 text-bg-danger fw-2 p-2 rounded-1  border-0"
                  style={{ width: "45px" }}
                >
                  +
                </button>
              </div>
              <button className="text-bg-danger border-0 rounded-1 px-5">
                {" "}
                Buy Now
              </button>
              <span className=" border rounded-1 p-1 px-2">
                <i class="bi bi-heart fs-5"></i>
              </span>
            </div>
          </div>
          <div className="delivery mt-3">
            <div className="d-flex gap-4 p-2 delivery-inner " style={{borderBottom:"1px solid #929191"}}>
              <div>
                <i class="bi bi-truck"></i>
              </div>
              <div className="">
                <h5>Free Delivery</h5>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="d-flex gap-5 p-2 delivery-inner">
              <div>
              <i class="bi bi-arrow-repeat"></i>
              </div>
              <div className="">
                <h5>Return Delivery</h5>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="badge-section">
          <div className="badge"> </div>
          <p className="mt-3">Related Item</p>
        </div>

        <div className=" mt-5 ">
          {/* <Carousel ref={carouselRef} controls={false} indicators={false}>   */}
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
          
        </div>
    </>
  );
};

export default ProductDetails;
