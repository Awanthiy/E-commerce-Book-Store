import React from 'react';
import './Login.css';
import { useState } from 'react';


const Login = () => {

  const [registerData, setRegisterData] = useState({
  fullname: '',
  email: '',
  password: ''
});

const handleRegister = async (e) => {
  e.preventDefault(); // Prevent page reload

  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(registerData)
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ Registered Successfully");
    } else {
      alert("❌ " + data.error);
    }
  } catch (err) {
    alert("❌ Registration failed. Check console.");
    console.error(err);
  }
};

const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(`✅ Login successful! Welcome, ${data.user.fullname}`);
        // Optional: Do something after login like redirect or save user info
        setLoginData({ email: '', password: '' }); // clear form
      } else {
        alert('❌ ' + data.error);
      }
    } catch (err) {
      alert('❌ Login failed. Check console.');
      console.error(err);
    }
  };


  return (
    <div className="auth-container">
      {/* Login Section */}
      <div className="auth-left">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>Email Address *</label>
          <input type="email" placeholder="Enter your email" required value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}/>

          <label>Password *</label>
          <input type="password" placeholder="Enter your password" required value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}/>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#">Forgot Password</a>
          </div>

          <button className="auth-btn">LOGIN</button>
        </form>
      </div>

      {/* Register Section */}
      <div className="auth-right">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <label>Full name *</label>
          <input type="text" placeholder="Enter your full name" required  value={registerData.fullname}
  onChange={(e) => setRegisterData({ ...registerData, fullname: e.target.value })}/>

          <label>Email *</label>
          <small style={{ marginBottom: "10px", display: "block" }}>
            NOTE: Please provide a valid email to receive order updates via email
          </small>
          <input type="email" placeholder="Enter your email" required value={registerData.email}
  onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}/>

          <label>Password *</label>
          <input type="password" placeholder="Create a password" required value={registerData.password}
  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}/>

          <button className="auth-btn">REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
