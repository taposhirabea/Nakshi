import React from 'react'
import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import Albums from '../components/Albums'
import { useAlbumContext } from '../context/album_context'
import {shops} from '../utils/data'

const HomePage = () => {
  // const {  products, grid_view } = useAlbumContext()
  
  if (shops.length < 1) {
    return (
      <h5 style={{ textTransform: 'none' }}>
        Sorry, no products matched your search.
      </h5>
    )
  }
  return (
    <main>
      <Hero/>
       <FeaturedProducts />
      {/* <Services />
      <Contact /> */}
      <Albums />
      {/* <ItemView/> */}
    </main>
  )
}

export default HomePage
