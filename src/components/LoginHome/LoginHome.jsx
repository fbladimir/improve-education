import React, {useContext} from 'react'
import './LoginHome.css'
import { AuthContext } from "../../context/AuthContext";
import CTA from '../home/CTA'; 
import Intro from '../intro/Intro'  
import DefaultProfile from '../../assets/DefaultProfile.jpg'; 

const LoginHome = () => {
  
  const { currentUser } = useContext(AuthContext);

  return (
    
    <header id="header">
      <div className="container header__container">
      
      <h3> Welcome, <span className="empty">{currentUser.displayName}</span> </h3> 

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

export default LoginHome