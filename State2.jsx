import React from 'react'
import { useState } from 'react'



const State = () => {
    const [allvalue,setallvalue] = useState({firstname: "Shreyash", lastname: "Bhise"})
    function update() {
        setallvalue({...allvalue, firstname: "Rutuja"})
    }
  return (
    <div className='app'>
        <h1>first name is {allvalue.firstname} and last name is {allvalue.lastname}</h1>
        <button className='btn' onClick={update}>Update</button>

    </div>
  )
}

export default State
