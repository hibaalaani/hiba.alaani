// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';


function App() {
  return (
    <Router >
      {/* <div className="App"> */}
      <Navbar />
        {/* <Header /> */}
        <Routes>
          <Route path="/alaani" element={<Home />} />
          <Route path="/alaani/about" element={<About />} />
          <Route path="/alaani/projects" element={<Projects />} />
          <Route path="/alaani/experience" element={<Experience />} />
          <Route path="/alaani/contact" element={<Contact />} />
        </Routes>
        <Footer />
      {/* </div> */}
    </Router>
  );
}

export default App;

