import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'


const MyComponent = () => { 
    const [userdata, setdata] =  useState([])

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((response)=>{
            console.log(response)
            setdata(response.data)
        })
    })

    return(
        <div className='app'>Axios {userdata.map((data)=>{ 
        return (
            <div>{data.email}</div>
        )
             
        })}</div>
    )
}

export default MyComponent;
