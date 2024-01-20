import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Error from './pages/ErrorPage';
import Products from './pages/ProductsPage';
import SingleProduct from './pages/SingleProductPage';

import { useEffect, useState } from "react";
import styled from "styled-components";
import useContentful from "./useContentful";
import AuthorCard from "./components/AuthorCard";
import Albums from './components/Albums';
import { shops } from './utils/data';
import AlbumCategory from './components/AlbumCategory';
import AlbumsPage from './pages/AlbumsPage';
import SingleProductPage from './pages/SingleProductPage';

function App() {

  // const [authors, setAuthors] = useState([]);
  // const { getAuthors } = useContentful();

  // useEffect(() => {
  //   getAuthors().then((response) => response && setAuthors(response));
    
  // });


  return (
    // <AuthWrapper>
    <>
      <Router>
        <Navbar/>
        <Sidebar />
        <Routes>
          <Route path='/' exact element={<HomePage/>} />
          {/* <Route path='about' element={<About />} />
          <Route path='cart' element={<Cart />} /> */}
          <Route path='products' element={<Products />} />
          {/* <Route path='products/:id' element={<SingleProduct />} /> */}
          <Route path='*' element={<Error />} />
          {/* <Route path="/item" >
            <Route path="/item/cushion">
                  <Route path=":productName" element={<AlbumsPage />}/>
                </Route>
                <Route path="/item/table">
                  <Route path=":productName" element={<AlbumsPage />}/>
                </Route>
          </Route> */}
          <Route path="/item/:id" element={    <SingleProductPage />}/>

          
        </Routes>
        {/* <Footer /> */}
      </Router>

      {/* <Wrapper>
      <TitleWrapper>
        <h1>Contentful API</h1>
        <p>A Design+Code tutorial</p>
      </TitleWrapper>
      {authors.map((author, index) => (
        <AuthorCard key={index} author={author} />
      ))}
    </Wrapper> */}
      </>
    // </AuthWrapper>
  );
}

export default App;

const Wrapper = styled.div`
  font-family: "Roboto";
  margin: 40px;

  display: grid;
  row-gap: 20px;
  justify-content: center;
`;

const TitleWrapper = styled.div`
  * {
    margin: 0;
  }

  display: grid;
  row-gap: 10px;
`;
