import React from 'react'
import styled from 'styled-components'
// import { Link } from 'react-router-dom'
// import heroBcg from '../assets/hero-bcg.jpeg'
// import heroBcg2 from '../assets/hero-bcg-2.jpeg'
import hero from '../assets/hero.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img-2.png'
import img3 from '../assets/img-3.png'
import img4 from '../assets/img-4.png'
const Hero = () => {
  return (
    <Wrapper className='container '>
      {/* <article className=''>
        <img className='' src={hero} alt='hero' width={1200} height={400}></img>
      </article> */}
      {/* <article className='d-none d-lg-block'>
        <img className='' src={hero} alt='hero' width={1050} height={400}></img>
      </article>
      <article className='d-none d-md-block d-lg-none'>
        <img className='' src={hero} alt='hero' width={800} height={300}></img>
      </article>
      <article className='d-none d-sm-block d-md-none'>
        <img className='' src={hero} alt='hero' width={600} height={200}></img>
      </article> */}
      <article className=' part-hero'>
        <img className='col part' src={img1} alt='hero'></img>
      </article>
      <article className='part-hero '>
        <img className='part' src={img2} alt='hero' width={350} height={250}></img>
      </article>
      <article className=' part-hero'>
        <img className='part' src={img3} alt='hero' width={350} height={250}></img>
      </article>
      <article className='row part-hero'>
        <img className='part' src={img4} alt='hero'></img>
      </article>
    </Wrapper>

  )
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  place-items: center;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 15rem);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    // gap: 8rem;
    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }
    .hero-btn {
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    }
    .img-container {
      display: block;
      position: relative;
    }
  }
`

 export default Hero
