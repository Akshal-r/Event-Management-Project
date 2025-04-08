
// import React from 'react';
// import './Register.css';
// import { Link } from 'react-router-dom';

// const Register = () => {
//   return (
//     <div className="auth-wrapper">
//       <div className="auth-box">
//         <div className="tab-buttons">
//           <Link to="/login"><button>Login</button></Link>
//           <button className="active-tab">Signup</button>
//         </div>
//         <h2>Signup Form</h2>
//         <form>
//           <input type="text" placeholder="Full Name" required />
//           <input type="email" placeholder="Email Address" required />
//           <input type="password" placeholder="Password" required />
//           <input type="password" placeholder="Confirm Password" required />
//           <button className="submit-btn">Signup</button>
//         </form>
//         <p>Already a member? <Link to="/login">Login here</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Register;

// src/pages/Register/Register.jsx
// Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    department: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    storedUsers.push(formData);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('Registration successful! Please login.');
    navigate('/login');
  };

  return (
    <div className="register-wrapper">
      <div className="register-box">
        <h2>Signup</h2>
        <form onSubmit={handleRegister}>
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
          <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} required />
          <button className="register-btn" type="submit">Register</button>
        </form>
        <div className="register-link">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
