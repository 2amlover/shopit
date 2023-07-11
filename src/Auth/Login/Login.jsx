import React, { useState } from 'react';
import './login.css';
import { HiLockClosed } from 'react-icons/hi';
import CopyRight from '../../Components/CopyRight/CopyRight';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [activeForm, setActiveForm] = useState('signin');
  const [signInData, setSignInData] = useState({
    username: '',
    password: ''
  });
  const [signUpData, setSignUpData] = useState({
    fullName: '',
    email: '',
    password: ''
  });

  const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    if (signInData.username.trim() !== '' && signInData.password.trim() !== '') {
      // Perform sign in logic
      // Replace the console.log with your actual sign in implementation
      toast.success('Sign In successful', { toastId: 'signin-toast' });
    } else {
      toast.error('Please enter username and password');
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    if (
      signUpData.fullName.trim() !== '' &&
      signUpData.email.trim() !== '' &&
      signUpData.password.trim() !== ''
    ) {
      // Perform sign up logic
      // Replace the console.log with your actual sign up implementation
      toast.success('Sign Up successful', { toastId: 'signup-toast' });
    } else {
      toast.error('Please fill all the fields');
    }
  };

  const handleFlip = () => {
    setActiveForm(activeForm === 'signin' ? 'signup' : 'signin');
  };

  return (
    <div className="login-container">
      {activeForm === 'signin' && (
        <div className="login">
          <div className="lock-icon">
            <HiLockClosed />
          </div>
          <h2>Sign In</h2>
          <form onSubmit={handleSignInSubmit}>
            {/* Sign-in form fields */}
            <input
              type="text"
              placeholder="Username"
              name="username"
              value={signInData.username}
              onChange={handleSignInChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signInData.password}
              onChange={handleSignInChange}
            />
            <button type="submit">Sign In</button>
            <div className="form-footer">
              <div className="forgot-password">
                <a href="forgotpassward">Forgot Password</a>
              </div>
              <p className="flip-button" onClick={handleFlip}>
                Sign Up
              </p>
            </div>
          </form>
        </div>
      )}
      {activeForm === 'signup' && (
        <div className="signup">
           <div className="lock-icon">
            <HiLockClosed />
          </div>
          <h2>Sign Up</h2>
          <form onSubmit={handleSignUpSubmit}>
            {/* Sign-up form fields */}
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
            />
            <input
              type="username"
              placeholder="Username"
              name="username"
              value={signUpData.username}
              onChange={handleSignUpChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
            />
            <button type="submit">Sign Up</button>
              <p className="flip-button" onClick={handleFlip}>
                Sign In
              </p>
          </form>
        </div>
      )}
      <CopyRight sx={{ mt: 1, mb: 4 }} />
    </div>
  );
};

export default Login;
