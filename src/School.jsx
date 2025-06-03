import React from 'react'
import './App.css'
import { Link , Router ,  Routes , Route ,BrowserRouter ,NavLink} from 'react-router'

const School = () => {
  return (
    <div className="school">
    <div className='schoolContainer'>
     <div className='schoolTitle'>
    <div className='leftSchool'>
    <img src="\images\img20.webp"/>
    </div>
        </div>   
     <div className='schoolContent'>
   <div className="rightSchool">
    <div className='schoolText'>
        <h2>its Flower</h2>
        <h2>School</h2>
    </div>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda quidem quisquam debitis impedit sunt
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde doloremque harum maxime, est provident 
        </p>
            <Link className='find' to="/Flowers"><h4>Find Out More</h4></Link>

        </div>
     </div>
      </div> 
    </div>


  )
}

export default School