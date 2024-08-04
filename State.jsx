import React from 'react'
import { useState } from 'react'

const State = () => { 
    const [likes, setlikes] = useState(0);

    const handleincreaselikes = () => {
        setlikes(likes + 1);

    }
    const handledecreaselikes = () => {
        if(likes > 0) {
            setlikes(likes - 1);
        }

    }
  return (
    <div className='btn1'>
        <button className='btn2' onClick={handleincreaselikes}>Increase Likes</button>
        <h1>Likes: {likes}</h1>
        <button className='btn3' onClick={handledecreaselikes}> Decrease  Likes</button>
      
    </div>
  )
}

export default State
