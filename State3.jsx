import React from 'react'
import { useState } from 'react'


const State = () => {
    const [items, setitems]  = useState([])

    const additem = () => {
        setitems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 10) + 1
        }])
    }
    return (
        <div className='app'> 
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
            <button onClick={additem}>Add a number</button>
        </ul>


        </div>
    )
}

export default State;
