import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Router basename='/ran-website'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
        </Routes>
      </Router>

    </>  
  
  );
}

export default App;
