import React from 'react'
import signUpImg from '../Components/image/signUpImg.png'
import '../CSS/Login.css'

const Login = () => {
  return (
    <>
      <div className="signup-section">
        <div className='main-content-1'>
          <img src={signUpImg} alt='' />
        </div>
        <div className="main-content-3">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>
          <div>
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div>
            <input type='password' placeholder='password' />
          </div>
          <div className='forget-Password'>
            <button className='login'>Login</button>
            <p>Forget Password?</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
