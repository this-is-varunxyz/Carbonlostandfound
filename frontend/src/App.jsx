import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Feed from './pages/Feed';
import Upload from './pages/Upload';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Navbar />
        {/* We use the standard .container class here now */}
        <main className="container" style={{ paddingTop: '2rem', paddingBottom: '2rem' }}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/upload" element={<Upload />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;