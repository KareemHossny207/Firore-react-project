import React from 'react'
import './App.css'
import App from './App'
import Home from './Home'
import Flowers from './Flowers'
import Plants from './Plants'
import Services from './Services'
import Classess from './Classess'
import Seasons from './Seasons'
import Story from './Story'
import School from './School'
import Journal from './Journal'
import Blog from './Blog'
const Store = () => {
  return (
    <div className='store'>

    <div className='storeContainer'>

        <div className='storePic'>
            <img src="\images\img24.jpg"/>
        </div>   


        <div className='storeTitle'>
        <h1>Our Store</h1>
        <div className='storeText'>
            <div className='storeText1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ipsum reiciendis officia,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ipsum reiciendis officia,</p>
            </div>
            <hr/>
        <div className='storeText1'>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ipsum reiciendis officia,</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ipsum reiciendis officia,</p>
            </div>
        </div>
        <button>View on Map</button>
        </div> 


    </div>


    </div>
  )
}

export default Store