import React from 'react'
import './universities.css'
import Searchbar from '../searchbar/Searchbar'
import Data from './Data.json'
import Navbar2 from '../navbar/Navbar2'
import Carousel from '../carousel/MyCarousel'

const Universities = () => {
  return (

  <universities id="universities">
  <div className="container universities__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <Navbar2/>

    <div className="carousel">
      <Carousel/>
    </div>
    

  </div>

</universities>

  )
}

export default Universities
