import React, { useEffect } from 'react'
import { useState } from 'react'

const MyComponent = () => { 
    const [count,setcounter] = useState(0);
    const [data,setData] = useState("Ram")

    useEffect(()=> {
        console.log("Component mounted")
    },[data])

    function updateCount() {
        setcounter(count + 1)
    } 

    function  updateData() {
        setData("Seeta")
    }

    
    return (
        <div>
            <h1>Button clicked {count} times</h1>
            <button onClick={updateCount}>Click</button>
            <button onClick={updateData}>Update Data</button>
        </div>
    )
}

export default MyComponent;


// css code
