import React from 'react'
import signUpImg from '../Components/image/signUpImg.png'
import signUpGoogle  from '../Components/image/signUpGoogle (1).png'
import '../CSS/SignUp.css'

const SignUp = () => {
  return (
    <>
      <div className="signup-section">
        <div className='main-content-1'>
          <img src={signUpImg} alt='' />
        </div>
        <div className="main-content-2">
          <h1>Create an account</h1>
          <p>Enter your details below</p>
          <div>
            <input type="text" placeholder="Name" />
          </div>
          <div>
            <input type="text" placeholder="Email or Phone Number" />
          </div>
          <div>
            <input type='password' placeholder='password' />
          </div>
          <button className='create-account'>Create Account</button>
          <button className="google-signup"><img src={signUpGoogle} alt='' />Sign up with Google</button>
          <div className='already'>
            <p>Already have an account? <a href="/login">Log in</a></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SignUp
