import { useCallback, useState } from 'react'
import './App.css'


import React from 'react'
import MyComponent from './Components/State'


const App = () => {
  const [add,setadd] = useState(0);
  const [count,setcount] = useState(0);
  const Learning = useCallback(()=>{

  },[count])
  return ( 

    <div className='app'> 
    <h1>Learning useCallback</h1>
      < MyComponent Learning={Learning} count={count}/>
      <h1>{add}</h1>
      <button onClick={()=>setadd(add + 1)}>Addition</button>
      <h1>{count}</h1>
      <button onClick={()=>setcount(count + 2)}>Count</button>

    </div>
  )
}

export default App;




import React, { memo, useEffect, useMemo, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'

const MyComponent = (Learning ,count) => { 
    console.log("child component")
   return (
    <>
    </>
   )
}
    


export default memo(MyComponent);
