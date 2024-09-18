import React, { useState, useTransition } from 'react'

const App = () => { 
  const [ispending,startTransition] = useTransition()
  const [val,setVal] = useState('')
  const [items,setItems] = useState([0])

  function changeHandler(event) {
    setVal(event.target.value)
  

  // Delaying
  startTransition(()=> {
    const arr =[]
  for(let i = 0; i <20000; i++) {
    arr.push(event.target.value)
   
  }
  setItems(arr)
  })
  
}
  return (
    <div>
      <input type='text' value={val} onChange={changeHandler} />
      {ispending ? 'Loading...' : items.map((item,i) => <div key={i}>{item}</div>)}
    </div>
  )
}

export default App
