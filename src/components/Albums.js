import React, {useState} from 'react'
import styled from 'styled-components'
import { FaSearch } from 'react-icons/fa'
import { Link, useNavigate, useHistory} from 'react-router-dom'
import AlbumCategory from './AlbumCategory'
import {useAlbumContext} from '../context/album_context'
import Album from './Album'


export default function Albums() {

  const { products } = useAlbumContext()
 
  // const navigate = useNavigation();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (productName) => {
    const selectedShop = products.find((item) => item.productName === productName);

     setSelectedProduct(selectedShop);
    // console.log(setSelectedProduct(selectedShop))
    
  };

  return (
<Wrapper>
<div className='products-container'>
   {products.map((product) => (
     <div key={product.id} className='container'>
       {/* <Link to={`/item/${product.productName}/${product.id}`}> */}
         <img src={product.image} alt='' className='singleProduct'/>
         <Link to={`/item/${product.productName}/${product.id}`} className='link'>
            {product.productName}
          </Link>
       {/* </Link> */}
     </div>
    // <button key={product.id} onClick={() => handleProductClick(product.productName)}>
    //         {product.productName}
    //       </button>
   ))}



 </div>
</Wrapper>
  )
}

{/* <AlbumCategory key={product.productList.productId} album={product.productList}/> */}
const Wrapper = styled.section`
 
.singleProduct {
  width: 300px;
  display: block;
  object-fit: cover;
  border-radius: var(--radius);
  transition: var(--transition);
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
  .container {
    position: relative;
    background: var(--clr-white);
    border-radius: var(--radius);
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
    width: 4.5rem;
    height: 2.5rem;
    border-radius: 50%;
    transition: var(--transition);
    opacity: 0;
    cursor: pointer;
    color: var(--clr-white);
    svg {
      font-size: 1.25rem;
      color: var(--clr-white);
    }
  }
  .container:hover .singleProduct {
    opacity: 0.8;
  }
  .container:hover .link {
    opacity: 1;
  }
`