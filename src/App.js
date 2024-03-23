
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/Admin/LoginPage';
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
  const handleLogin= () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/admin' element={isLoggedIn ? <CmsReport /> : <LoginPage login={handleLogin} />} />
      </Routes>
    </Router>
    
  )
}

export default App;