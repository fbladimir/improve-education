import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './myCarousel.css'
import Product from './Product';

const CustomButtonGroup = ({ next, previous }) => {
  return (
    <div className="custom-button-group">
      <button onClick={() => previous()}>{'<'}</button>
      <button onClick={() => next()}>{'>'}</button>
    </div>
  );
};

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
          imageurl:  "https://www.keiseruniversity.edu/wp-content/uploads/2013/05/miami-campus-banner.jpg",
          name: 'Keiser University',
          location: 'Fort Lauderdale',
          description: 'Private Institution',
          link: "/KU"
        }, 
        {
          id: 2,
          imageurl:  "https://images.unsplash.com/photo-1567345492986-12e7f1dead72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          name: 'Florida International University',
          location: 'Miami',
          description: 'Public Institution',
          link: "/FIU"
        }, 
        {
          id: 3,
          imageurl:  "https://news.nova.edu/files/2020/09/PRMC_20191120_00231.jpg",
          name: 'Nova Southeastern University',
          location: 'Fort Lauderdale',
          description: 'Private Institution',
          link: "/NSU"
        }, 
        {
          id: 4,
          imageurl:  "https://images.unsplash.com/photo-1653670478016-ceadaa301964?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1557&q=80",
          name: 'University of Miami',
          location: 'Miami',
          description: 'Private Institution',
          link: "/UM"
        },   
        {
          id: 5,
          imageurl:  "https://media.beam.usnews.com/94/43312647f96d895292321e35f4f5ad/fau_37368267.jpg",
          name: 'Florida Atlantic University',
          location: 'Boca Raton',
          description: 'Public Institution',
          link: "/FAU"
        },     
        {
          id: 6,
          imageurl:  "https://www.fnu.edu/wp-content/uploads/2018/03/8-Benefits-of-Getting-Your-MBA-Online-1.jpg",
          name: 'Florida National University',
          location: 'Hialeah',
          description: 'Private Institution',
          link: "/FNU"
        }, 
        {
          id: 7,
          imageurl:  "https://www.blackpast.org/wp-content/uploads/L-Florida-Memorial-University-Courtest-of-Florida-Memorial-University.jpg",
          name: 'Florida Memorial University',
          location: 'Miami Gardens',
          description: 'Private Institution',
          link: "/FMU"
        },         
        {
          id: 8,
          imageurl:  "https://www.lynn.edu/uploads/img/main-images/_1200x630_crop_center-center_82_none/LUCDroneShot_20190222_003_web_3200x1800.jpg?mtime=1612542110",
          name: 'Lynn University',
          location: 'Boca Raton',
          description: 'Private Institution',
          link: "/LU"
        },    
        {
          id: 9,
          imageurl:  "https://static.wixstatic.com/media/08cfab_b888958dedea495fb36945a9a5d21a8e~mv2.jpg/v1/crop/x_5,y_167,w_1489,h_792/fill/w_560,h_298,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Broward-College-Davie-FL.jpg",
          name: 'Broward College',
          location: 'Davie',
          description: 'Public Institution',
          link: "/BC"
        }, 
        {
          id: 10,
          imageurl:  "https://www.evergladesuniversity.edu/wp-content/uploads/2015/11/T-Rex_Campus-4.jpg",
          name: 'Everglades University',
          location: 'Boca Raton',
          description: 'Private Institution',
          link: "/EU"
        },       

      ]

      const product = productData.map((item) => <Product
      name={item.name} 
      url={item.imageurl} 
      location={item.location}
      description={item.description}
      link={item.link}
      />)
    
  return(
        <div>
            <h1>Miami Area Universities</h1>
            <Carousel 
            responsive={responsive} 
            swipeable={true} 
            removeArrowOnDeviceType={["tablet", "mobile", "desktop", "superLargeDesktop"]}
            keyBoardControl={true}
            infinite={true}
            autoPlay={true}
            >
              {product}
            </Carousel>
        </div>
  )
};
