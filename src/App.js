import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaCamera, FaPen } from 'react-icons/fa';
import ChatList from './components/ChatList';
import UploadPage from './components/UploadPage';
import NewChat from './components/NewChat';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NewChat />} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </Router>
  );
}
