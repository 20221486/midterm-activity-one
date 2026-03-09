import React from 'react';
import Navbar from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Students from './pages/Students.jsx';
import About from './pages/About.jsx';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;