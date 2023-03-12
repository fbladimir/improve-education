import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './myCarousel.css'
import Product from './Product';

export default function MyCarousel(){
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5, 
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        },
      };
      
      const productData = [
        {
          id: 1,
          imageurl:  "https://images.unsplash.com/photo-1624295415119-4811300f901f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2063&q=80",
          name: 'USF',
          location: 'Tallahassee',
          description: 'description',
        }, 
        {
          id: 2,
          imageurl:  "https://images.unsplash.com/photo-1567345492986-12e7f1dead72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          name: 'FIU',
          location: 'Miami',
          description: 'description',
        }, 
        {
          id: 3,
          imageurl:  "https://www.collegetransitions.com/wp-content/uploads/2021/01/florida-1200x675.jpg",
          name: 'UF',
          location: 'Gainsville',
          description: 'description',
        }, 
        {
          id: 4,
          imageurl:  "https://images.unsplash.com/photo-1653670478016-ceadaa301964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80",
          name: 'UM',
          location: 'Miami',
          description: 'description',
        },    
      ]

      const product = productData.map((item) => <Product
      name={item.name} 
      url={item.imageurl} 
      location={item.location}
      description={item.description}/>)
    
  return(
        <div>
            <h1>Florida Universities </h1>
            <Carousel responsive={responsive}>
              {product}
            </Carousel>
        </div>
  )
};
