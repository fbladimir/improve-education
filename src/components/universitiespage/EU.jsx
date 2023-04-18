import React from 'react'
import './eu.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const EU = () => {
  return (

  <eu id="eu">
  <div className="container eu__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Everglades University</h1>
    
    <div className="image-text-container">
      <img
        src="https://www.evergladesuniversity.edu/wp-content/uploads/2015/11/T-Rex_Campus-4.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Boca Raton, FL. Everglades University is a private institution with over 2,000 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</eu>

  )
}

export default EU