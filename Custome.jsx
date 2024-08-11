mport React from 'react'
import MyComponent from './Components/State'


const App = () => {
  return (
    <div>
    <MyComponent />
    </div>
  )
}

export default App;


///////////////////
import Counter1 from './Counter1';




const MyComponent = () =>{ 
   
   return (
    <div className='app'>
        <Counter1/>
    </div>
   )
}

 export default MyComponent;


///////////////////////
import React from 'react'
import useCounter from './useCounter'
const Counter1 = () => { 
    const[count,Increment,Decrement] = useCounter();
  return (
    <div>
      <div>{count}</div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>

    </div>
  )
}

export default Counter1
//////////////////////
import React from 'react'
import { useState } from 'react';

const useCounter = () => {
    const [count,setcount] = useState(0);

    function Increment(){
        setcount(count + 1)
    }
    function Decrement(){
        setcount(count - 1)
    }
    return [count,Increment,Decrement]
}

export default useCounter
