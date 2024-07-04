import React from "react";
import aboutimg from "../Components/image/aboutimg.png";
import aboutsec from "../Components/image/aboutsec.png";
import aboutsec1 from "../Components/image/aboutsec1.png";
import aboutsec2 from "../Components/image/about2.png";
import "../CSS/About.css";

const About = () => {
  return (
    <>
      <div className="aboutcontainer">
        <div className="aboutchild">
          <div className="aboutinnerchild">
            <h1>Our Story</h1>
            <p>
              Launced in 2015, Exclusive is South Asia’s premier online shopping{" "}
              <br />
              makterplace with an active presense in Bangladesh. Supported by{" "}
              <br />
              wide range of tailored marketing, data and service solutions,{" "}
              <br />
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons{" "}
              <br />
              customers across the region.{" "}
            </p>
            <p>
              Exclusive has more than 1 Million products to offer, growing at a{" "}
              <br />
              very fast. Exclusive offers a diverse assotment in categories{" "}
              <br />
              ranging from consumer
            </p>
          </div>
          <div className="aboutinnerchild1">
            <img id="aboutimg" src={aboutimg} alt="aboutImage" />
          </div>
        </div>
        <div className="aboutfirst">
          <div className="aboutfirstchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-shop-window"></i>
              </div>
            </div>{" "}
            <br />
            <h1>10.5k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="aboutfirstchild aboutfirstdiff">
            <div className="aboutdiff">
              <div className="aboutdiff1">
                <i class="bi bi-currency-dollar"></i>
              </div>
            </div>{" "}
            <br />
            <h1>33k</h1>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div className="aboutfirstchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-bag-heart-fill"></i>
              </div>
            </div>{" "}
            <br />
            <h1>45.5k</h1>
            <p>Customer active in our site</p>
          </div>
          <div className="aboutfirstchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-coin"></i>
              </div>
            </div>{" "}
            <br />
            <h1>25k</h1>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
        <div className="aboutsecond">
          <div className="aboutsecondchild">
            <img id="aboutsec" src={aboutsec} alt="aboutsecond" />
            <h1>Tom Cruise</h1>
            <p>Founder & Chairman</p>
            <span>
              <i class="bi bi-instagram"></i>
            </span>
            <span>
              <i class="bi bi-whatsapp"></i>
            </span>
            <span>
              <i class="bi bi-linkedin"></i>
            </span>
          </div>
          <div className="aboutsecondchild">
            <img id="aboutsec" src={aboutsec1} alt="aboutsecond" />
            <h1>Emma Watson</h1>
            <p>Managing Director</p>
            <span>
              <i class="bi bi-instagram"></i>
            </span>
            <span>
              <i class="bi bi-whatsapp"></i>
            </span>
            <span>
              <i class="bi bi-linkedin"></i>
            </span>
          </div>
          <div className="aboutsecondchild">
            <img id="aboutsec" src={aboutsec2} alt="aboutsecond" />
            <h1>Will Smith</h1>
            <p>Product Designer</p>
            <span>
              <i class="bi bi-instagram"></i>
            </span>
            <span>
              <i class="bi bi-whatsapp"></i>
            </span>
            <span>
              <i class="bi bi-linkedin"></i>
            </span>
          </div>
        </div>
        <div className="aboutthird">
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-truck"></i>
              </div>
            </div>{" "}
            <br />
            <h4>FREE AND FAST DELIVERY</h4>
            <p>Free delivery for all orders over $140</p>
          </div>
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-headset"></i>
              </div>
            </div>{" "}
            <br />
            <h4>24/7 CUSTOMER SERVICE</h4>
            <p>Friendly 24/7 customer support</p>
          </div>
          <div className="aboutthridchild">
            <div className="aboutthirdimg">
              <div className="aboutthirdimg1">
                <i class="bi bi-shield-check"></i>
              </div>
            </div>{" "}
            <br />
            <h4>MONEY BACK GUARANTEE</h4>
            <p> We reurn money within 30 days</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
