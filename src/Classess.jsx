import React,{useState,useEffect} from 'react'
import './App.css'
import App from './App'
import Flowers from './Flowers'
import Plants from './Plants'
import Story from './Story'
import Blog from './Blog'
import Services from './Services'
import Seasons from './Seasons'
import { Link , Router ,  Routes , Route ,BrowserRouter ,NavLink} from 'react-router'

const Classess = () => {
    return (
        <div className='classes' id='Classess'>
               <div className='classesC'>
        <div className='leftC'>
            <img src="\images\img08.webp" />
            <h3>Wedding</h3>
            <p>Lorem ipsum dolor sit amet consectetur corrupti similique! Voluptatem
            </p>
            <Link className='find' to="/Flowers"><h4>Find Out More</h4></Link>
        </div>
        <div className='centerC'>
            <img className='bigC' src="\images\img09.webp"/>
            <img className='smallC' src="\images\img10.svg"/>
        </div>
        <div className='rightC'>
            <img src="\images\img11.jpg" />
            <h3>Private Events</h3>
            <p>Lorem ipsum dolor sit amet consectetur corrupti similique! Voluptatem 
            </p>
            <Link className='find' to="/Flowers"><h4>Find Out More</h4></Link>
        </div>


    </div>
        </div>  
    )
}
export default Classess