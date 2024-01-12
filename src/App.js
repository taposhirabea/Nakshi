import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Error from './pages/ErrorPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

function App() {
  return (
    // <AuthWrapper>
      <Router>
        <Navbar/>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          {/* <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} /> */}
          <Route path='products' element={<Products />} />
          <Route path='products/:id' element={<SingleProduct />} />
          <Route path='*' element={<Error />} />
        </Routes>
        {/* <Footer /> */}
      </Router>
    // </AuthWrapper>
  );
}

export default App;
