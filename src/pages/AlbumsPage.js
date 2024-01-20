import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Albums from '../components/Albums'
import { shops } from '../utils/data'
import AlbumCategory from '../components/AlbumCategory'
const AlbumsPage = () => {
  const [ menItems, setMenItems ] = useState()
  const [ womenItems, setWomenItems ] = useState()

  const fetchProducts = async (shops) => {
    try {
      const response = await fetch(shops);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      setMenItems(data.filter((item) => item.category === "cushion"));
      setWomenItems(data.filter((item) => item.category === "table"));

    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };
  
  useEffect(() => {
    fetchProducts(shops)

}, [])
  return (
    <main>
      {/* <PageHero title='products' /> */}
      <Wrapper className='page'>
        {/* <div className='section-center products'>
            {menItems && <AlbumCategory name="Cushion" key="cushion" products={menItems}/>}
            {womenItems && <AlbumCategory name="Table" key="table" products={womenItems}/>}
        </div> */}
        
      </Wrapper>
    </main>
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default AlbumsPage
