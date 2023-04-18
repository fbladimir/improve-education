import React from 'react'
import './lu.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const LU = () => {
  return (

  <lu id="lu">
  <div className="container lu__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Lynn University</h1>
    
    <div className="image-text-container">
      <img
        src="https://www.lynn.edu/uploads/img/main-images/_1200x630_crop_center-center_82_none/LUCDroneShot_20190222_003_web_3200x1800.jpg?mtime=1612542110"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Boca Raton, FL. Lynn University is a private institution with over 2,600 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</lu>

  )
}

export default LU