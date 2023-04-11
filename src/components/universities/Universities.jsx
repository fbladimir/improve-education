import React from 'react'
import './universities.css'
import Searchbar from './searchbar/Searchbar'
import Data from './Data.json'
import Topbar from '../topbar/topbar'
import Carousel from './carousel/MyCarousel'

const Universities = () => {
  return (

  <universities id="universities">
  <div className="container universities__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <Topbar/>

    <div className="carousel">
      <Carousel/>
    </div>
    

  </div>

</universities>

  )
}

export default Universities
