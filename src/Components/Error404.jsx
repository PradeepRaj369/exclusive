import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import "../CSS/404page.css";

const Error404 = () => {

const navigate=useNavigate();
let redirecthome=()=>{
  navigate("/");
}

  return (
    <>
      <div className="error-page-navigation">
        <div>
          <NavLink className="home-link-error" to="/">Home</NavLink>/
          <NavLink className="Error-link">404 Error</NavLink>
        </div>
      </div>
      <div className='error-content'>
        <h1>404 Not Found</h1>
        <p>Your visited page not found.You may go home page.</p><br /><br />
        <div><button onClick={redirecthome}>Back to home page</button></div>
      </div>
    </>
  )
}

export default Error404;
