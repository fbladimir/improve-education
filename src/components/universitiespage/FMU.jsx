import React from 'react'
import './fmu.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const FMU = () => {
  return (

  <fmu id="fmu">
  <div className="container fmu__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Florida Memorial University</h1>
    
    <div className="image-text-container">
      <img
        src="https://www.blackpast.org/wp-content/uploads/L-Florida-Memorial-University-Courtest-of-Florida-Memorial-University.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Miami, FL. Florida Mermorial University is a private institution with over 800 undergraduate students</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</fmu>

  )
}

export default FMU