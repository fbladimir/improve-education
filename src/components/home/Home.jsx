import React from 'react'
import './home.css'
import CTA from './CTA'
import Intro from '../intro/Intro'

const Home = () => {
  

  return (
    
    <header id="header">
      <div className="container header__container">
      
        <h3> Welcome to, </h3> 
        
        <h1> Improving Education </h1> 
        <h4 className="text-light"> Who is visting today? </h4>
         
        <CTA />

        <a href="#contact" className="scroll__down">
        
        </a>

        <Intro /> 

       

      </div>
    </header>
    
  )
}

export default Home