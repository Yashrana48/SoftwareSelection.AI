import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Import your pages (to be created)
import Home from './pages/Home';
import QuestionnairePage from './pages/Questionnaire';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';
import LearningHubPage from './pages/LearningHub';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/learning" element={<LearningHubPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;