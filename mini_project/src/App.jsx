import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contacts from './pages/Contacts';
import Footer from './pages/Footer';
import Features from './pages/Features';
import { ThemeProvider, useTheme } from './pages/ThemeContext';


function Navbar() {
  const {theme, toggleTheme} = useTheme();
  return(
    <nav className="flex justify-between items-center p-4 bg-linear-65 from-gray-800 to-gray-900 text-white">
      <div>Candor Logo</div>
      <button className="md:hidden bg-gray-500 px-3 py-2 rounded text-white">Menu</button>
      <div className="hidden md:block flex space-x-4 items-center ">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link> 
        
        <button onClick={toggleTheme} className="ml-4 px-2 py-1 border-rounded text-sm"> {theme === 'light' ? 'Light' : 'Dark'} Mode</button>
      </div>
    </nav>


  );
}

function App() {


return (

  <>
    <ThemeProvider>
      <Router>
        <Navbar />
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />

        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
    {/*} Footer Section */}
<footer className="bg-gray-800 text-white p-4 text-center font-light text-xs">
    <p>&copy; 2026 Candor Project. All rights reserved.</p>
</footer>
  </>
);

}
export default App;