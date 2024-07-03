import React from 'react';
import "../CSS/contact.css";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <>
    <div className="homelink">
    <NavLink activeClassName="home-link-active" className="home-link" to="/" >Home&nbsp;&nbsp;</NavLink >/&nbsp;&nbsp;<NavLink activeClassName="contact-link-active" className="contact-link" to="/contact" >Contact</NavLink>
    </div>
      <div className="contactmain">
        <div className="details">
          <div className="calltous">
            <div>
              <i class="bi bi-telephone callicon"></i>&nbsp;&nbsp;<span className='heading'>Call To Us</span>
            </div>
            <div className='txtcalltous'>
              We are available 24/7,7 days a week.
              Phone: +8801611112222
            </div>
          </div> 
          <div className="writetous">
            <div>
              <i class="bi bi-envelope callicon"></i>&nbsp;&nbsp;<span className='heading'>Write To Us</span>
            </div>
            <div className='txtwritetoous'>
              Fill out our form and we will contact you within 24 hours.
              Emails:customer@exclusive@gmail.com
              Emails:support@exclusive@gmail.com
            </div>
          </div>
        </div>
        <div className="forminput">
          <div className="Allinputs">
            <div className="inputs">
              <input type="text" className='inputboxes' placeholder=' Your Name *' />
              <input type="text" className='inputboxes' placeholder=' Your Email *' />
              <input type="text" className='inputboxes' placeholder=' Your Phone *' />
            </div>
            <div className='txtbox'>
            <textarea name="" id="" cols="82" rows="9" className='textinput' placeholder=' Your Message '>
            </textarea>
            </div>
            <div className="sendmsgbtn">
            <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
