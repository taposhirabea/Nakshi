import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAlbumContext } from '../context/album_context';
import { shops as url } from '../utils/data';
import Loading from '../components/Loading';
import Error from '../components/Error'
import ProductImages from '../components/ProductImages'

import styled from 'styled-components';

const SingleProductPage = () => {

  const {selectedProduct} = useAlbumContext()

  // useEffect(() => {
  //   if (error) {
  //     setTimeout(() => {
  //       navigate('/');
  //     }, 3000);
  //   }

  // }, [error]);

  // if (loading) {
  //   return <Loading />;
  // }
  // if (error) {
  //   return <Error />;
  // }

  // const {
  
  //   price,
  //   productList
  // } = product;

  return (
    <Wrapper>
      {/* <PageHero title={name} product /> */}
      <div className='section section-center page'>

      {selectedProduct && (
        <div>
          <h3>{selectedProduct.productName}</h3>
          <ul>
      {selectedProduct.productList.map((product) => (
        <li key={product.productId}>{`Price: $${product.price}`}</li>
      ))}
    </ul>
        </div>
      )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
