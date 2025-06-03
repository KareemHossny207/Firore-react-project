import React from 'react'
import { MdStar } from 'react-icons/md'

const Follow = () => {
  return (
    <div className='follow' id='Follow'>
      <div className="follow-header">
        <h1>Follow Us</h1>
        <p className="follow-subtitle">Join our community of flower enthusiasts</p>
      </div>

      <div className='followSec'>
        <div className='followSec1'>
          <div className="image-container">
            <img src="/images/img25.jpg" alt="Floral Design"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/img26.jpg" alt="Floral Arrangement"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
        </div>

        <div className='followSec1'>
          <div className="image-container">
            <img src="/images/img28.jpg" alt="Floral Design"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/img29.jpg" alt="Floral Arrangement"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
        </div>

        <div className='followSec1'>
          <div className="image-container">
            <img src="/images/img30.jpg" alt="Flower Display"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
          <div className="image-container">
            <img src="/images/img27.jpg" alt="Flower Display"/>
            <div className="image-overlay">
              <span className="hover-icon">♥</span>
            </div>
          </div>
        </div>
      </div>

      <div className='followText'>
        <div className="review-header">
          <p>Our Customers Say</p>
          <h4>Excellent</h4>
        </div>
        
        <div className="rating-stars">
          {[...Array(5)].map((_, index) => (
            <MdStar key={index} className='star' />
          ))}
        </div>
        
        <div className="rating-info">
          <div className="rating-number">
            <h4>4.8</h4>
            <p>out of 5 based on</p>
            <h4>7,980 Reviews</h4>
          </div>
          <div className="trustpilot-logo">
            <img src="/images/img32.png" alt="Trustpilot"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Follow