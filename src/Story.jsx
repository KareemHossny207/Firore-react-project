import React from 'react'

const Story = () => {
  return (
    <div className="story" id='Story'>
         <div className='storyC' >

      <h5>Our Story</h5>

    <div className='theStory'>
      <h1>Gifts</h1>
      <p>Your Beautiful Botique(Made with Love)</p>
      <div className='gifts'>
    <div className="gift">
      <img src="\images\img17.webp"/>
      <h3>Made for you</h3>
      <p>$35.00</p>
    </div>
   <div className="gift">
      <img src="\images\img18.webp"/>
      <h3>Made for you</h3>
      <p>$35.00</p>
    </div>
      <div className="gift">
      <img src="\images\img19.webp"/>
      <h3>Made for you</h3>
      <p>$35.00</p>
    </div>
      </div>
    </div>

    <button className='viewBtn'>View All Gifts</button>



    </div>
      </div>
  )
}

export default Story