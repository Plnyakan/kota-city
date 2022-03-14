import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import './home.css';
import { Slide } from 'react-slideshow-image';
import dagwood from '../assest/Dagwood.webp';
import cheesetomato from '../assest/Cheesetomato.webp';
import baconchips from '../assest/Baconchips.webp';
import fullydagwood from '../assest/FullyDagwood.webp';
import topimage from '../assest/topimage.webp';
//import styled from 'styled-components';

const slideImages = [
  {
    url: cheesetomato,
    title: 'Cheese & Tomato',
    price: 'R42.90',
  },
  {
    url: dagwood,
    title: 'Dagwood',
    price: 'R99.90',
  },
  {
    url: baconchips,
    title: 'Bacon & Eggs',
    price: 'R42.90',
  },
  {
    url: fullydagwood,
    title: 'Fully Loaded Dagwood',
    price: 'R119.90',
  },
];

function Home() {
  return (
    <div className="slide-container">
      <img
        src={topimage}
        alt="banner"
      />

    <Slide>
     {slideImages.map((slideImage, index)=> (
        <div className="each-slide" key={index}>
          <div style={{'backgroundImage': `url(${slideImage.url})`}}>
          </div>
          <span>{slideImage.title}</span>
          <span className="slide_price">{slideImage.price}</span>
          <button className="cart">Add to Cart</button>
        </div>
      ))} 
    </Slide>

  </div>
  )
}

export default Home
