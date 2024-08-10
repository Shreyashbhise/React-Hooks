const initialstate=0;
const reducer = (state,action) => { 
    switch(action){
        case "Increment":
            return state + 1
        case "Decrement":
            return state - 1
        default:
            return state
             
    }

}


const MyComponent = () =>{ 
   const [count,dispatch] =  useReducer(reducer,initialstate)
    return (
      <div className='app'>
        <div>{count}</div>
        <button onClick={()=>dispatch("Increment")}>Increment</button>
        <button onClick={()=>dispatch("Decrement")}>Decrement</button>

      </div>

    )
}

 export default MyComponent;
