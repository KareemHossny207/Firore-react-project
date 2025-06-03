import React from 'react'
import { MdStar } from "react-icons/md";
import App from './App';
import './App.css'



const Follow = () => {
  return (
    <div className='follow' id='Follow'>
        <h1>Follow Us</h1>
        <div className='followSec'>
          <div className='followSec1'>
            <img src="\images\img25.jpg"/>
            <img src="\images\img26.jpg"/>
            <img src="\images\img27.jpg"/>

          </div>

         <div className='followSec1'>
            <img src="\images\img28.jpg"/>
             <img src="\images\img29.jpg"/>
            <img src="\images\img30.jpg"/>
         </div>
        </div>

        <div className='followText'>
            <p>Our Customers Say</p>
            <h4>Excellent</h4>
            <span>
                <MdStar className='star' />
                <MdStar className='star' />
                <MdStar className='star' />
                <MdStar className='star' />
                <MdStar className='star' />
            </span>
            <h4>4.8</h4>
            <p>out of 5 based on</p>
            <h4>7.980 Reviews</h4>
            <img src="\images\img32.png"/>
        </div>
    </div>
  )
}

export default Follow