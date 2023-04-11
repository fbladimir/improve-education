import React from "react"
import './universitiespage.css'
import Searchbar from '../searchbar/Searchbar'
import Topbar from'../topbar/topbar'


const Universitiespage = () => {
    return (
  
    <universitiespage id="universitiespage">
    <div className="container universitiespage__container">
  
    <div className="searchbar">
        <Searchbar placeholder="Enter an Institution..." data={Data}  />
    </div>

    <Topbar/>

  
    </div>
  
  </universitiespage>
  
    )
  }
  
  export default Universitiespage
