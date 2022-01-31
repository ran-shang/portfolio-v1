import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyGallery from './components/pages/Gallery';
import Projects from './components/pages/Projects';
import ScrollToTop from './components/ScrollToTop';



function App() {
  return (
    <>
      <Router basename='/ran-website'>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<MyGallery/>}/>
          <Route path='/projects' element={<Projects/>}/>
        </Routes>
      </Router>

    </>  
  
  );
}

export default App;
