import React from 'react'
import './myCarousel.css'
import { Link } from 'react-router-dom';

export default function Product(props) {
  return (
    <div className='card'>
              <img
              className='product--image'
              src={props.url}
              alt='product image'
              />
              <h2>{props.name}</h2>
              <p className="location"> {props.location} </p>
              <p> {props.description}</p>
              <p>
                <Link to={props.link}>
                  <button className="my-button">READ MORE</button>
                </Link>
              </p>
    </div>
  );
}
