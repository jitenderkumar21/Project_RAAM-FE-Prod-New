import { BrowserRouter as Router,Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';

import MainPage from './Components/MainPage';
import CmsReport from './Components/Admin/CmsReport';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/admin/report" element={<CmsReport />} />
      </Routes>
    </Router>
    
  )
}

export default App;