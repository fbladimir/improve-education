import React from 'react'
import './fau.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const FAU = () => {
  return (

  <fau id="fau">
  <div className="container fau__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Florida Atlantic University</h1>
    
    <div className="image-text-container">
      <img
        src="https://media.beam.usnews.com/94/43312647f96d895292321e35f4f5ad/fau_37368267.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Boca Raton, FL. Florida International University is a public institution with over 24,000 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</fau>

  )
}

export default FAU