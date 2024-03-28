// LoginPage.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './LoginPage.css'; // Import the CSS file

const LoginPage = ({ login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the home page
    navigate('/');
  };
  
    const handleLogin = (e) => {
      e.preventDefault();
      if (username === 'admin' && password === 'admin') {
        localStorage.setItem('isLoggedIn', 'true');
        login();
      } else {
        setError('Invalid username or password');
      }
    };
    return (
        <div className="login-container">
          <div className="overlay"></div>
          <div className="login-card">
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
              <input type="text" placeholder="Username" className="login-input" value={username} onChange={(e) => setUsername(e.target.value)} />
              <input type="password" placeholder="Password" className="login-input" value={password} onChange={(e) => setPassword(e.target.value)} />
              <div className="btn-submit">
                <button type="submit" >Login</button>
              </div>
              
            </form>
            {error && <p className="error-text">{error}</p>}
            <div className="navigate-link"> <a onClick={handleClick} href="" >Go to Home Page!</a></div>
      </div>
    </div>
  );
    };
export default LoginPage;
