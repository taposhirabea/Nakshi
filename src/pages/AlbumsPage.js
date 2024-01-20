import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import { useAlbumContext } from '../context/album_context'
import { useParams } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AlbumsPage = () => {
const {products} = useAlbumContext();
const { productName } = useParams();
const selectedProduct = products.find((product) => product.productName === productName);
  return (

      <Wrapper className='page'>

        {selectedProduct && (
          <div className='products '>
             {selectedProduct.productList.map((album) => (
                <div key={album.productId} className='container'>
                  <img src={album.productImage} alt="" className='singleProduct'/>
                  <Link to={`/item/${selectedProduct.productName}/${selectedProduct.id}/${album.productId}`} className='link'>
                    <FaSearch />
                  </Link>
                </div>
              ))}
            </div>
        )}
      </Wrapper>
  )
}

const Wrapper = styled.div`
.container {
  position: relative;
  background: var(--clr-white);
  border-radius: var(--radius);
}
.singleProduct {
  width: 100%;
  display: block;
  object-fit: cover;
  border-radius: var(--radius);
  transition: var(--transition);
}
.container:hover .singleProduct {
  opacity: 0.5;
}
.container:hover .link {
  opacity: 1;
}
.link {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--clr-primary-5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  transition: var(--transition);
  opacity: 0;
  cursor: pointer;
  svg {
    font-size: 1.25rem;
    color: var(--clr-white);
  }
}
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 1fr 1fr 1fr 1fr;
    }
  }
  @media (max-width: 767px) {
    .products {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  @media (max-width: 367px) {
    .products {
      grid-template-columns: 1fr;
    }
  }
`

export default AlbumsPage
