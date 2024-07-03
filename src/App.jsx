import React from "react";
import Header from "./Components/Header";
import SignUp from "./Components/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import Login from "./Components/Login";
import Account from "./Components/Account";
import ProductDetails from "./Components/ProductDetails";
import CheckOut from "./Components/CheckOut";
import Cart from "./Components/Cart";
import WishList from "./Components/WishList";
import Error404 from "./Components/Error404";
import { Container } from "react-bootstrap";
import { ContextProvider } from "./Components/ContextProvider";

const App = () => {
  return (
    <>
    <ContextProvider>
      <Router>
        <Header />
        <Container className="px-5">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={ <About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/product-details" element={<ProductDetails />} />
          <Route path="/checkout" element={<CheckOut />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/wishlist" element={<WishList />}/>
          <Route path="*" element={<Error404 />}/>
        </Routes>
        </Container>
        <Footer />
      </Router>
      </ContextProvider>
    </>
  );
};

export default App;
