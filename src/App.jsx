import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './Footer';
import HomePage from './HomePage';
// import ServicesPage from './ServicesPage';
// import ContactPage from './ContactPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;