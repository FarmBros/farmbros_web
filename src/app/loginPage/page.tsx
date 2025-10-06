import React from 'react'
import FarmBrosInput from '../Components/farmbrosInput/FarmBrosInput'

type Props = object

const LoginPage = (props: Props) => {
  return (
    <div className='LoginPage'>
      <div className="login-form">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Log in to continue</p>
        </div>
        <div className="login-inputs">
          <FarmBrosInput 
            label="Email" 
            placeholder="your email" 
          />
          <FarmBrosInput 
            label="Password" 
            placeholder="your password" 
          />
        </div>
      </div>
    </div>
  )
}

export default LoginPage