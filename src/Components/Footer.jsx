import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footerchild">
          <h1>Exclusive</h1> <br />
          <h6>Subscribe</h6>
          <p>Get 10% off your first order</p>
          <div className="footer-input-section">
            <input
              type="email"
              placeholder="Enter your Email"
              className="footer-input"
            />
            <i class="bi bi-send-fill" style={{ marginRight: "30px" }}></i>
          </div>
        </div>
        <div className="footerchild">
          <h1>Support</h1> <br />
          <p>
            111 Bijoy sarani, Dhaka, <br /> DH 1515, Bangladesh
          </p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888 9999</p>
        </div>
        <div className="footerchild">
          <h1>Account</h1> <br />
          <p>My Account</p>
          <p>Login / Register </p>
          <p>Cart</p>
          <p> Wishlist</p>
          <p>Shop</p>
        </div>
        <div className="footerchild">
          <h1>Quick Link</h1> <br />
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footerchild">
          <h1>Dowload App</h1> <br />
          <p id="p-save">save s3 with App New User Only</p>
          <div className="qr-code">
            <i class="bi bi-qr-code"></i>
          </div>
          <div className="d-flex text-light gap-5 mt-1">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-linkedin"></i>
          </div>
        </div>
      </div>{" "}
      <div className="footer2">
        <div className="footercopy">
          <p>&copy;CopyRight Rimel 2022 All Right Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
