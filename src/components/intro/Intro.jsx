import React from 'react'
import ME from '../../assets/temp.png';
import './intro.css'


const Intro = () => {
  return (
    <section id="intro">
    <h5>Make your school a better place</h5>
    <h2>A place where you are heard and valued.</h2>
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

            <h5>Students</h5>
            <small>Describe your school's experience. Describe what keeps you from achieving academic excellence. Here's where you belong.  </small>
          </article>
          <article className="about__card">
            
            { /* <VscFolderLibrary className="about__icon" /> */ } 

            <h5>Teachers</h5>
            <small>Utilize student feedback to help improve the educational experience of students.</small>
          </article>
        </div>
        <p> The school environment can be challenging if you are not provided with the resources that you require
           or feel that your voice is never heard. In order for you to succeed academically, we want to 
           ensure that your voice is heard and that you receive the changes that will help you do so. </p>
        <a href="#" className="btn btn-primary">Take A Step Into Success</a>
      </div>
    </div>
  </section>
  )
}

export default Intro