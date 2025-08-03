import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Formations from './pages/Formations';
import About from './pages/About';
import Contact from './pages/Contact';
import Actualites from './pages/Actualites';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/actualites" element={<Actualites />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
