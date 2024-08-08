import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import axios from 'axios'

const  MyComponent = () => { 
    const data = {firstName: "", lastName: ""}; 
    const[inputData, setInputData] = useState(data)

    const handleData = (e) => { 
        setInputData({...inputData, [e.target.name]:e.target.value}) 
        
    } 

    const handleSubmit = (e)=> {
        e.preventDefault();
        axios.post("https://jsonplaceholder.typicode.com/users", inputData)
        .then((response)=>{
            console.log(response)
        })
    }
    const handleUpdate = (e)=>{ 
        e.preventDefault();
        axios.put("https://jsonplaceholder.typicode.com/users/1", inputData)
        .then((response)=>{
            console.log(response)
        })

    }

    const handleDelete = (e) => { 
        e.preventDefault();
        axios.delete("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=>{
            console.log(response)
        })

    }


    return (
        <> 
        <label>First name:</label>
        <input type='text' name='firstName' value={inputData.firstName} onChange={handleData}></input><br/>
        <label > Last name:</label>
        <input type='text' name='lastName' value={inputData.lastName} onChange={handleData}></input>
        
        <button onClick={handleSubmit} className='btn'>Submit</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>

        </>
    )

}

export default MyComponent;
