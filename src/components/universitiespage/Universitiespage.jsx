import React from 'react'
import './universitiespage.css'
import Searchbar from '../universities/searchbar/Searchbar'
import Data from '../universities/Data.json'
import Topbar from '../topbar/topbar'


const Universitiespage = () => {
  return (

  <universitiespage id="universitiespage">
  <div className="container universitiespage__container">

    <div className="searchbar">
      <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <h1 className="university-title">Template</h1>
    
    <div className="image-text-container">
      <img
        src="https://images.unsplash.com/photo-1567345492986-12e7f1dead72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        style={{ width: '100%', height: 'auto' }}
        className='university-image'/>

      <h2 className="university-info">Located in Miami, FL. Florida International University is a public institution with over 25,000 undergraduate students</h2>
    </div>

    <Topbar/>

    <h2 className="comments">From our Community</h2>

    

  </div>

</universitiespage>

  )
}

export default Universitiespage