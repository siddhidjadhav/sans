import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Home';
import About from './About';
import Portfolio from './Portfolio';
import Photography from './Photography';
import Catlog from './Catlog';
import Card from './Card';
import Kalpana from './Kalpana';
import Cn from './Cn';
import BlackMirror from './BlackMirror';
import Threed from './Threed';
import './index.css';
import Navbar from './Navbar';
import Footer from './Footer';
import CineCatlog from './CineCatlog';
import Kungfu from './Kungfu';
import Delusion from './Delusion';
import Avantika from './Avantika';
import Brandcat from './Brandcat';
import Ecosprout from './Ecosprout';
import Cafebites from './Cafebites';
import Merwans from './Merwans';
import Creative from './Creative.js';
import Sketches from './Sketches.js';
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
            <Route path="/card" element={<Card/>}/>
            <Route path="/kalpana" element={<Kalpana/>}/>
            <Route path="/cn" element={<Cn/>}/>
            <Route path="/blackmirror" element={<BlackMirror/>}/>
            <Route path="/threed" element={<Threed/>}/>
            <Route path="/cinecatlog" element={<CineCatlog/>}/>
            <Route path="/kungfu" element={<Kungfu/>}/>
            <Route path="/delusion" element={<Delusion/>}/>
            <Route path="/avantika" element={<Avantika/>}/>
            <Route path="/brandcat" element={<Brandcat/>}/>
            <Route path="/ecosprout" element={<Ecosprout/>}/>
            <Route path="/cafebites" element={<Cafebites/>}/>
            <Route path="/merwans" element={<Merwans/>}/>
            <Route path="/creative" element={<Creative/>}/>
            <Route path="/sketches" element={<Sketches/>}/>
          </Routes>
          <Footer />
        </Router>
    </div>
  );
}

export default App;
