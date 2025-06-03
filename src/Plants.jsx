import React from 'react'
import './Plants.css'
import Home from './Home'
import Services from './Services'
import Classess from './Classess'
import Story from './Story'
import Blog from './Blog'
import { Link, Router, Routes, Route, BrowserRouter, NavLink } from 'react-router'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


const Plants = () => {
  return (

    <div>
          <div className="services">
                        <div className='servicesTop'>
              <h1>Our Services</h1>
              <div className='servicesLinks'>
              <Link  className='linkfl' to="/Flowers"><h4>Flowers</h4></Link>
              <Link  className='linkpl' to="/Plants"><h4>Plants</h4></Link>
              </div>
              </div>
        </div>
      <Swiper
        className='flowerSwiper'
        // install Swiper modules
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        style={{
          "--swiper-navigation-color": "var(--main)",
          "--swiper-navigation-size": "30px",
        }}
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='flowerCard'>
          <img src="\images\img13.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Plant 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
        <SwiperSlide className='flowerCard'>
          <img src="\images\img14.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Plant 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
        <SwiperSlide className='flowerCard'>
          <img src="\images\img12.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Plant 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
        <SwiperSlide className='flowerCard'>
          <img src="\images\img13.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Plant 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
        <SwiperSlide className='flowerCard'>
          <img src="\images\img14.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Plant 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
      </Swiper>


    </div>
  )
}

export default Plants