import React, { useState } from 'react'
import SearchData from './Components/SearchData'

const App = () => {
  const [val,setVal] = useState('')

  function changehandler(event) {
    setVal(event.target.value)
  }
  return (
    <div>
      <h2>React.js useDeferredValue Hook</h2>

      <input type='text' value={val} onChange={changehandler} />
      <SearchData value={val} />
    </div>
  )
}

export default App


import React, { useDeferredValue, useEffect, useMemo } from 'react'

const SearchData = ({value}) => {
    const defVal = useDeferredValue(value)

    useEffect(()=> {
        console.log('value:', value)
        console.log('defVal:', defVal)
    },[value,defVal])
    
  return useMemo( () => {
   let arr = []
   for(let i =0; i <15000; i++){
    arr.push(<div key={i}>{defVal}</div>)
   }
   return arr
  },[defVal] )
}

export default SearchData



