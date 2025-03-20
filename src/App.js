import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importing Router components
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Photography from './Photography';
import Catlog from './Catlog';
import './index.css';
import Navbar from './Navbar';
function App() {
  return (
    <div>
      
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/photography" element={<Photography />} />
            <Route path="/catlog" element={<Catlog />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
