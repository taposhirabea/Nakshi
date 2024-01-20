import axios from 'axios'
import React, { useContext, useEffect, useReducer,useState } from 'react'
import reducer from '../reducers/album_reducer'
import { shops as url } from '../utils/data'
import { useParams } from 'react-router-dom';
import { Link} from 'react-router-dom'
import {
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { useNavigate } from 'react-router-dom'

const initialState = {
  products_loading: false,
  products_error: false,
  products: url,
  single_product_loading: false,
  single_product_error: false,
  single_product: {url},
}

const AlbumContext = React.createContext()

export const AlbumsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { productName } = useParams();


  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const products = await response.json();
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (error) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }

  };

  // const selectedProduct = state.products.find((product) => product.productName === productName);
 
  
  // const fetchSingleProduct = async (productId) => {
  //   // console.log('Fetching product details for ID:', productId);
  //   dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
  //   try {
  //     // const response = await fetch(`${url}/${productId}`);
  //     const response = url.find((product) => product.productList.some(item => item.productId === productId));
  //     const singleResponse = response.find((product) => product.productList.find(item => item.productId === productId))
  //     console.log(response)
  //     console.log(singleResponse)
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  
  //     const singleProduct = await response.json();
  //     dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
  //     return singleProduct;
  //   } catch (error) {
  //     dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
  //   }
  // };
  
  useEffect(() => {
    fetchProducts(url);
  }, []);
  

  return (
    <AlbumContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </AlbumContext.Provider>
  )
}
// make sure use
export const useAlbumContext = () => {
  return useContext(AlbumContext)
}
