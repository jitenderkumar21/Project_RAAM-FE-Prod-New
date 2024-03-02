import { BrowserRouter  as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import DetailForm from './Components/DetailForm';
import MainPage from './Components/MainPage';
import Report from './Components/Admin/Report';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/admin/report" element={<Report />} />
      </Routes>
    </Router>
    
  );
}

export default App;