import React, { useState, useEffect } from 'react'
import './App.css'
import Home from './Home'
import Flowers from './Flowers'
import Plants from './Plants'
import Services from './Services'
import Classess from './Classess'
import Seasons from './Seasons'
import Story from './Story'
import School from './School'
import Journal from './Journal'
import Store from './Store'
import Loading from './Loading'
import Follow from './Follow'
import Blog from './Blog'
import { Link, Router, Routes, Route, BrowserRouter, NavLink } from 'react-router'
import { PiClover } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";


const Start = () => {
    
  return (
    <div className='startPage'>
        <div className='load'>
            
        <h1>Kareem Hossny</h1>
        <h2>FrontEnd Developer</h2>


        </div>
      </div>
  )
}

export default Start