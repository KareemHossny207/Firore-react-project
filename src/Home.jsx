import React, { useState, useEffect } from 'react'
import './App.css'
import App from './App'
import Flowers from './Flowers'
import Plants from './Plants'
import Services from './Services'
import Classess from './Classess'
import Seasons from './Seasons'
import Story from './Story'
import School from './School'
import Journal from './Journal'
import Store from './Store'
import Follow from './Follow'
import Blog from './Blog'
import { Link, Router, Routes, Route, BrowserRouter, NavLink } from 'react-router'
import { PiClover } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
// import { FaSearch } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';




const Home = () => {

      // function change(){
      //    document.body.classList.toggle('dark');
      // }



        /**************** menu ********************/

      function navMedia(){
      let Bot = document.getElementById("navBottom");
      let done = document.getElementById("done");
          done.classList.remove("navBottom");
          done.classList.remove("done");
          done.classList.add("navMedia");
      }

 
            function navMediaoff(){
      let Bot = document.getElementById("navBottom");
      let done = document.getElementById("done");
          done.classList.remove("navMedia");
          done.classList.remove("navBottom");
          done.classList.add('off')
      }
  return (
    <div>  

      <div className="home">
      
        <div className="homeC">
          <div className='navTop'>

            <div className='leftNav'>
              <h4>Search</h4>
            </div>

            <div className='centerNav'>
              <img src=" \images\img01.svg" />
            </div>

            <div className='rightNav'>
            <Link className='navlink' to="/Account"><h4>Account</h4></Link>
              <PiClover className='logoi'/>
              <span className='cartt'><MdOutlineShoppingBag className='shopi' /></span>
              <span className='cartnum'><p>0</p></span>
              <span className='menui'> <IoMenu onClick={navMedia}/> </span>

            </div>

          </div>

          {/* nav bottom  links*/}


          <div className='navBottom' id='navBottom'>

            <Link className='navlink' to="/Home"><h4>Home</h4></Link>

            <Link className='navlink' smooth to="/Flowers"><h4>Flowers</h4></Link>

            <Link className='navlink' smooth to="/Plants"><h4>Plants</h4></Link>

            <HashLink className='navlink' smooth to="/#Services"><h4>Services</h4></HashLink>

            <HashLink className='navlink' smooth to="/#Seasons"><h4>Seasons</h4></HashLink>

            <HashLink className='navlink' smooth to="/#Classess"><h4>Fiore Classes</h4></HashLink>

            <HashLink className='navlink' smooth to="/#Story"><h4>Our Story</h4></HashLink>

            {/* <Link className='navlink' to="/School"><h4>School</h4></Link> */}

            {/* <Link className='navlink' to="/Store"><h4>Fiore</h4></Link> */}

            <HashLink className='navlink' smooth to="/#Blog"><h4>Blog</h4></HashLink>

                  <MdClose className='close' onClick={navMediaoff}/>
          </div>

            <div className='done' id='done'>

            <Link className='navlink' to="/Home"><h4>Home</h4></Link>

            <Link className='navlink' to="/Flowers"><h4>Flowers</h4></Link>

            <Link className='navlink' to="/Plants"><h4>Plants</h4></Link>

            <Link className='navlink' to="/Services"><h4>Services</h4></Link>

            <Link className='navlink' to="/Seasons"><h4>Seasons</h4></Link>

            <Link className='navlink' to="/Classess"><h4>Fiore Classes</h4></Link>

            <Link className='navlink' to="/Story"><h4>Our Story</h4></Link>

            {/* <Link className='navlink' to="/School"><h4>School</h4></Link> */}

            {/* <Link className='navlink' to="/Store"><h4>Fiore</h4></Link> */}

            <Link className='navlink' to="/Blog"><h4>Blog</h4></Link>

                  <MdClose className='close' onClick={navMediaoff}/>
          </div>

          <div className='homeSec'>

            <div className='homeSec1'>
              <h1>We tell Stories</h1>
              <h1>With flow</h1>
              <button>Shop Now</button>
            </div>

            <div className='homeSec2'>
              <img src="\images\img03.png" />
            </div>


          </div>
        </div>

      </div>
      {/* <button onClick={change} className='change' id='change'>change</button> */}
      
      <Services />


      <Classess />

      <Seasons />

      <Story />

      <School />

      <Journal />

      <Store />
      <Follow />
      <Blog />
    </div>
  )
}

export default Home