import React from 'react'
import './Flower.css'
import { Link , Router ,  Routes , Route ,BrowserRouter ,NavLink} from 'react-router'
import App from './App'
import Home from './Home'
import Services from './Services'
import Classess from './Classess'
import Story from './Story'
import Blog from './Blog'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Flowers = () => {
  return (
    <div>
        <div className="services" id='Flowers'>
                  <div className='servicesTop'>
        <h1>Our Services</h1>
        <div className='servicesLinks'>
        <Link  className='linkf' to="/Flowers"><h4>Flowers</h4></Link>
        <Link  className='linkp' to="/Plants"><h4>Plants</h4></Link>
        </div>
        </div>
        </div>
    <Swiper
      className='flowerSwiper'
      // install Swiper modules
      
      modules={[Navigation, A11y]}
      spaceBetween={40}
      slidesPerView={3}
      navigation
      // pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
     style={{
  "--swiper-navigation-color": "var(--main)",
  "--swiper-navigation-size": "30px",
}}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide className='flowerCard'>  
          <img src="\images\img04.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Flower 1</h5>
          <p>$45.00-$98.00</p>
      </SwiperSlide>
      <SwiperSlide className='flowerCard'>    
          <img src="\images\img05.webp" />
          <button className='selectBtn'>Select Options</button>

          <h5>Flower 2</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
      <SwiperSlide className='flowerCard'>     
          <img src="\images\img06.webp" />
          <button className='selectBtn'>Select Options</button>

          <h5>Flower 3</h5>
          <p>$52.00-$89.00</p>
      </SwiperSlide>
      <SwiperSlide className='flowerCard'>    
           <img src="\images\img04.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Flower 4</h5>
          <p>$45.00-$98.00</p>
      </SwiperSlide>
      <SwiperSlide className='flowerCard'>    
           <img src="\images\img05.webp" />
          <button className='selectBtn'>Select Options</button>
          <h5>Flower 5</h5>
          <p>$65.00-$93.00</p>
        </SwiperSlide>
      
    </Swiper>


    </div>
  )
}

export default Flowers