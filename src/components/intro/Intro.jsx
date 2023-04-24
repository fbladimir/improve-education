import React from 'react'
import ME from '../../assets/temp.png';
import './intro.css'
import Login from '../../pages/login/Login';


const Intro = () => {
  return (
    <section id="intro">
    <h5>It Starts Here</h5>
    <h2> Step into your future</h2>
    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          
          <img src={ME} alt="me" />  

        </div>
      </div>
      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">

            { /* <FaAward className="about__icon" /> */ } 

            <h5>High School Students</h5>
            <small>Find out about the culture of each institution from its students.</small>
          </article>
          <article className="about__card">
            
            { /* <VscFolderLibrary className="about__icon" /> */ } 

            <h5>College Students and Facutly</h5>
            <small>Help high school students find the right institution.</small>
          </article>
        </div>
        <p> The college application process can be challenging but it is not impossible! We want to help you pick the right institution by
          listening to what their students have to say.</p>
        <a href="/login" className="btn btn-primary">Take A Step Into Success</a>
      </div>
    </div>
  </section>
  )
}

export default Intro
