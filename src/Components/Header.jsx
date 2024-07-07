import React, { useContext } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "../CSS/header.css";
import { ProviderContext } from "./ContextProvider";
const Header = () => {
  const {getCartCount}= useContext(ProviderContext)
  return (
    <>
      <div className="d-flex justify-content-center align-items-center bg-dark text-light gap-5 header-section1">
        <p className="mt-2 fs-6">
          Summer Sale For All Swim Suits And Free Express Delivery-OFF 50%!{" "}
          <span className="fw-900 ml-3">
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              ShopNow
            </a>
          </span>
        </p>
        <select name="" id="" className="bg-dark text-light border-0">
          <option value="">English</option>
        </select>
      </div>
      <section className="header-section">
        <Container className="p-2 pt-4">
          <Navbar className="justify-content-around">
            <div>
              <h3 className="fw-600">Exclusive</h3>
            </div>
            <Nav className="gap-3 nav-links">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/signup" className="nav-link">
                Sign Up
              </Link>
            </Nav>
            <div className="d-flex  align-items-center gap-4">
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="what are you looking for?"
                  id="nav-search"
                />
                <span className="search-icon">
                  <i class="bi bi-search"></i>
                </span>
              </div>
              <Link to="/wishlist" className="nav-link">
                <i class="bi bi-heart fs-5"></i>
              </Link>
              <Link to="/cart" className="nav-link" >
                <i class="bi bi-cart3 fs-5"></i><span style={{color:"red", fontWeight:"bold"}}>{getCartCount()}</span>
              </Link>
            </div>
          </Navbar>
        </Container>
      </section>
    </>
  );
};

export default Header;
