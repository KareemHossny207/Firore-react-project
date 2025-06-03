import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import './App.css'
const Blog = () => {
  return (
    <div className="blog" id='Blog'>
      <div className="blogContainer">

        <div className="blogTop">
          <div className="blogLeft">
            <img src="\images\img33.svg"/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aliquid Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <p>Quisquam, voluptatibus. Quisquam, voluptatibus. Quisquam</p>
          </div>
           <div className="blogCenter">
            <h2>My Account</h2>
            <h2>FAQ</h2>
            <h2>Check Order</h2>
            <h2>Store Location</h2>
            <h2>Contact Us</h2>
          </div>
           <div className="blogRight">
            <h4>Follow Us</h4>
            <span className="socialMedia">
              <span> <FaFacebook className='icon'/></span>
              <span><FaInstagram/></span>
              <span> <FaPinterest/></span>
              <span><FaTwitter/></span>
            </span>
          </div>
        </div>
        
         <div className="footer">
        <hr />
           <div className="footerContainer">
             <h5> © Copyright 2023</h5>
             <div className="footerLast">
               <h5>All Rights Reserved</h5>
               <h5>Privacy Policy</h5>         
             </div>
           </div>
         </div>


      </div>


    </div>
  )
}

export default Blog