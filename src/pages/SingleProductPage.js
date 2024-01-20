import React from 'react'
import styled from 'styled-components'
import { useAlbumContext } from '../context/album_context';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'

export default function SingleProductPage() {
    const {products} = useAlbumContext()
    const { productName, productId } = useParams();

    const selectedProduct = products.find(
        (product) => product.productName === productName && product.id === productId
      );
    
      // If the selected product is not found, you can handle it accordingly (e.g., show a message)
      if (!selectedProduct) {
        return <div>Product not found</div>;
      }
    
      const price = selectedProduct.productList.length > 0
      ? selectedProduct.productList[0].price
      : null;
  
      // Assuming productImage is available in the first item of productList
      const productImage = selectedProduct.productList.length > 0
        ? selectedProduct.productList[0].productImage
        : null;

        

  return (
//     <Wrapper className='container'>
// <div className='d-block'>
//     {productImage && (
//           <img src={productImage} alt={`Product ${selectedProduct.productName}`} className='singleProduct' />
//         )}
//   </div>
//     <footer className='col-3'>
//     <h2>Description: Handicraft by countryside women</h2>
//         <p>Febric: Cotton</p>
//     </footer>
//   </Wrapper>
<Wrapper>
      <div className='section section-center page'>
        <Link to='/' className='btn'>
          back to products
        </Link>
        <div className='product-center'>
        {/* {productImage && (
          <img src={productImage} alt={`Product ${selectedProduct.productName}`} className='singleProduct' />
        )}
          <section className='content'>
            <h2>{productName}</h2>
          <h5 className='price'>Price: {price}TK</h5>
            <p className='desc'> Handicrafts are unique and skillfully crafted items that are created by hand, often using traditional techniques passed down through generations. These handmade objects showcase the creativity, cultural heritage, and craftsmanship of artisans. Unlike mass-produced goods, handicrafts are characterized by their individuality, attention to detail, and the personal touch of the artisan.</p>
         
          </section> */}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.main`

.singleProduct {
    height: 600px;
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
    //   align-items: center;
    justify-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;
