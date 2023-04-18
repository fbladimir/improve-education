import React from 'react'
import './bc.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const BC = () => {
  return (

  <bc id="bc">
  <div className="container bc__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Broward College</h1>
    
    <div className="image-text-container">
      <img
        src="https://static.wixstatic.com/media/08cfab_b888958dedea495fb36945a9a5d21a8e~mv2.jpg/v1/crop/x_5,y_167,w_1489,h_792/fill/w_560,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Broward-College-Davie-FL.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Fort Lauderdale, FL. Broward College is a public institution with over 30,000 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</bc>

  )
}

export default BC