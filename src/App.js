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
import Account from './Account'
import { Link, Router, Routes, Route, BrowserRouter, NavLink } from 'react-router'
import { PiClover } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";



const App = () => {
  


  return (





    <BrowserRouter>






      <Routes>
        <Route path="/" element={<Loading/>}/>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Flowers" element={<Flowers />} />
          <Route path="/Plants" element={<Plants />} />
          <Route path="/#Services" element={<Services />} />
          <Route path="/#Seasons" element={<Seasons />} />
          <Route path="/#Classess" element={<Classess />} />
          <Route path="/#Story" element={<Story />} />
          <Route path="/#School" element={<School />} />
          <Route path="/#Journal" element={<Journal />} />
          <Route path="/#Store" element={<Store />} />
          <Route path="/#Follow" element={<Follow />} />
          <Route path="/#Blog" element={<Blog />} />
          <Route path="/Account" element={<Account />} />

      </Routes>

    </BrowserRouter>




  )
}

export default App








