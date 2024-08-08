import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'

const MyComponent = () => {  
    
    const refElement = useRef("");
    const [name,setname] = useState("Rutuja")
    console.log(refElement)
    function Reset() {
        setname('')
        refElement.current.focus()
    }
    
    return (
        <> 
        <input ref={refElement} type='text' value={name} onChange={(e)=> setname(e.target.value) }></input>
        <button onClick={Reset}>Reset</button>
        

        </>
    )
}

export default MyComponent;
