import React from 'react';
import './App.css';
import Navbar from '../src/components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import Announcement from './components/Announcement';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Announcement />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;



/*<*/
/* 
import ProductDetails from './pages/ProductDetails';
<Route path='/products/:id' element={<ProductDetails />} /> */