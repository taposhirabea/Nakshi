import React, {useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link} from 'react-router-dom'
import AlbumCategory from './AlbumCategory'
import {useAlbumContext} from '../context/album_context'
import Album from './Album'


export default function Albums() {

  const { products, handleProductClick } = useAlbumContext()

  return (
<Wrapper>
<div className='products-container'>
   {products.map((product) => (
    //  <div key={product.id}>
    //    <Link to={`/item/${product.id}`}>
    //      <h2>{product.productName} Albums</h2>
   
    //    </Link>
    //  </div>
    <button key={product.id} onClick={() => handleProductClick(product.productName)}>
            {product.productName}
          </button>
   ))}



 </div>
</Wrapper>
  )
}

{/* <AlbumCategory key={product.productList.productId} album={product.productList}/> */}
const Wrapper = styled.section`
  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`