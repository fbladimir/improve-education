import React from 'react'
import './fnu.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const FNU = () => {
  return (

  <fnu id="fnu">
  <div className="container fnu__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Florida National University</h1>
    
    <div className="image-text-container">
      <img
        src="https://www.fnu.edu/wp-content/uploads/2018/03/8-Benefits-of-Getting-Your-MBA-Online-1.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Hialeah, FL. Florida National University is a private institution with over 2,700 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</fnu>

  )
}

export default FNU