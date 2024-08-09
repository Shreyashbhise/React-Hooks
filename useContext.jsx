import { createContext, useCallback, useState } from 'react'
import './App.css'


import React from 'react'
import MyComponent from './Components/State'
const data = createContext();
const data1 = createContext();


const App = () => { 
  const name = "Rutuja"
  const gender = 'Female'
  return(
    <>
    <data.Provider value={name}>
      <data1.Provider value={gender}>
    <MyComponent/>
    </data1.Provider>
    </data.Provider>
    </>
  )
  
  
}

export default App;
export {data,data1}


const MyComponent = () =>{
    return (
        <State2 />

    )
}

 export default MyComponent;

const State2 = () => {
  return (
    <State3/>
  )
}

export default State2


const State3 = () => {
    const name = useContext(data);
    const gender = useContext(data1);
  return (
    <>
    <h1>Hi my name is {name} and my gender is {gender}</h1>
    </>
  )
}

export default State3



