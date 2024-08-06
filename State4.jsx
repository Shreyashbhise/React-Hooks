import React from 'react'
import { useState } from 'react'

const MyComponent = () => {
    const [foods, setfoods] = useState(["Apple", "Orange", "Banana",]);

    function handleAddfood() { 
        const newfood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value = "";
        setfoods([...foods, newfood]);

    }

    function handleRemovefood(index) {
        setfoods(foods.filter((food, i)=> i !== index));

    }




    return( 
        <div className='app'>
            <h2 >List of Fodd</h2>
            <ul >{foods.map((food, index)=> <li key={index}>{food} <button onClick={()=> handleRemovefood(index)} > Remove Fruit</button> </li>)}</ul>
            <input type='text' id='foodinput' placeholder='Enter fruit name' className='app4' ></input>
            <button onClick={handleAddfood} >Add Fruit</button>
        </div>

    )
}

export default MyComponent;
