import React from "react";
import aboutimg from "../Components/image/aboutimg.png";
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
            <img src="" alt="" />
            <h1>10.5k</h1>
            <p>Sallers active our site</p>
          </div>
          <div className="aboutfirstchild">
            <img src="" alt="" />
            <h1>33k</h1>
            <p>Mopnthly Produduct Sale</p>
          </div>
          <div className="aboutfirstchild">
            <img src="" alt="" />
            <h1>45.5k</h1>
            <p>Customer active in our site</p>
          </div>
          <div className="aboutfirstchild">
            <img src="" alt="" />
            <h1>25k</h1>
            <p>Anual gross sale in our site</p>
          </div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default About;
