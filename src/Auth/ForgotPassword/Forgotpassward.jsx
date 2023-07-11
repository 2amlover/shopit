import React, { useState } from 'react';
import './forgotpassword.css';
import { HiLockClosed } from 'react-icons/hi';
import CopyRight from '../../Components/CopyRight/CopyRight';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform the logic to handle the submitted email
    console.log(email);
  };

  return (
    <div className="forgot-container">
      <div className="forgot">
        <div className="lock-icon">
          <HiLockClosed />
        </div>
        <h2>Forgot Password</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="forgot">Submit</button>
          <div className="form-footer">
            <div className="forgot-password">
              <a href="/login">Go back to Sign In</a>
            </div>
          </div>
        </form>
      </div>
      <CopyRight sx={{ mt: 8, mb: 10 }} />
    </div>
  );
};

export default ForgotPassword;
