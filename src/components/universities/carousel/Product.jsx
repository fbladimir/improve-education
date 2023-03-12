import React from 'react'
import './myCarousel.css'

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
                <button>Add to favorites</button>
              </p>
    </div>
  );
}
