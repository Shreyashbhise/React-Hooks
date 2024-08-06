import React, { useEffect } from 'react'
import { useState } from 'react'

const MyComponent = () => {
    const [count,setcount] = useState(0)
   
    useEffect(()=> {
        setTimeout(()=> {
            setcount(count => count + 1)
        },2000)
    },[count])

    return(
        <div>
            <h1>I"ve rendered {count} times</h1>
        </div>

    )
}

export default MyComponent;
