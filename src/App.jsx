import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageGrid from './components/PageGrid';
import PageContent from './components/PageContent';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/" element={<PageGrid />} />
          <Route path="/page/:id" element={<PageContent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;