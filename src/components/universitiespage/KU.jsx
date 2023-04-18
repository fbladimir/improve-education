import React from 'react'
import './ku.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const KU = () => {
  return (

  <ku id="ku">
  <div className="container ku__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Keiser University</h1>
    
    <div className="image-text-container">
      <img
        src="https://www.keiseruniversity.edu/wp-content/uploads/2013/05/miami-campus-banner.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Fort Lauderdale, FL. Keiser University is a private institution with over 17,000 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</ku>

  )
}

export default KU