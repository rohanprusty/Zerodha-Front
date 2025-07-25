import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom'; 
import './index.css';
import HomePage from './landing_page/HOME/HomePage';

import About from './landing_page/ABOUT/Aboutpage';
import Products from './landing_page/PRODUCTS/ProductsPage';
import Pricing from './landing_page/PRICING/PricingPage';
import Support from './landing_page/SUPPORT/Support_page';
import Signup from './landing_page/SIGNUP/Signup_page';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import Not_found from './landing_page/Not_found';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route
          path="*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/support" element={<Support />} />
                <Route path="*" element={<Not_found />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


