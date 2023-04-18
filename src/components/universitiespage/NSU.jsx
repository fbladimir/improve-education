import React from 'react'
import './nsu.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const NSU = () => {
  return (

  <nsu id="nsu">
  <div className="container nsu__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Nova Southeaster University</h1>
    
    <div className="image-text-container">
      <img
        src="https://news.nova.edu/files/2020/09/PRMC_20191120_00231.jpg"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Fort Lauderdale, FL. Nova Southeastern University is a private institution with over 6,600 undergraduate students.</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</nsu>

  )
}

export default NSU