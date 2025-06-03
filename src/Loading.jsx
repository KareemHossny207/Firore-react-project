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
import Start from './Start'
import Follow from './Follow'
import Blog from './Blog'
import { Link, Router, Routes, Route, BrowserRouter, NavLink } from 'react-router'
import { PiClover } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";


const Loading = () => {
    
      const [Loading, setLoading] = useState(false)
    
      useEffect(() => {
        setLoading(true)
    
        setTimeout(() => {
          setLoading(false)
        }, 0);
      }, [])
    
  return (
    <div>


      {Loading ? <Start/> : <Home/>}


      </div>
  )
}

export default Loading