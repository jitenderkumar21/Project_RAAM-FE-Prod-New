import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Admin/LoginPage';
import { useState, useEffect } from 'react';

import MainPage from './Components/MainPage';
import CmsReport from './Components/Admin/CmsReport';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn');
    if (loggedIn === 'true') {
      setIsLoggedIn(true);
    }
  }, []);
  const login = () => {
    setIsLoggedIn(true);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/admin" element={isLoggedIn ? <CmsReport /> : <LoginPage login={login} />} />
      </Routes>
    </Router>
    
  )
}

export default App;
