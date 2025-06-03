import React from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const School = () => {
  return (
    <div className="school">
    <div className='schoolContainer'>
     <div className='schoolTitle'>
    <div className='leftSchool'>
    <div className="image-overlay"></div>
    <img src="/images/img20.webp" alt="Flower School"/>
    <div className="school-badge">
      <span>Est.</span>
      <span>2025</span>
    </div>
    </div>
        </div>   
     <div className='schoolContent'>
   <div className="rightSchool">
    <div className='schoolText'>
        <h2>it's Flower</h2>
        <h2>School</h2>
    </div>
    <div className="school-features">
      <div className="feature">
        <span className="feature-number">01</span>
        <h3>Expert Instructors</h3>
        <p>Learn from experienced florists and designers</p>
      </div>
      <div className="feature">
        <span className="feature-number">02</span>
        <h3>Hands-on Experience</h3>
        <p>Create beautiful arrangements in our workshops</p>
      </div>
    </div>
    <p className="school-description">
      Join our flower school and discover the art of floral design. From basic arrangements to advanced techniques, 
      our courses will help you develop your creative skills and professional expertise.
    </p>
    <Link className='find' to="/Flowers">
      <h4>Find Out More</h4>
    </Link>

        </div>
     </div>
      </div> 
    </div>


  )
}

export default School