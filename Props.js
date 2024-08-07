
import React from 'react'
import MyComponent from './Components/State'

const App = () => {
  return (
    <div> 

      <MyComponent name= "Shreyash"/>

      < MyComponent  name = " shreyash Bhise"/>

    </div>
  )
}

export default App;




const MyComponent = (props) => {
    return (
        <div>
            <h1>Hello {props.name} </h1>

        </div>
    )
}

export default MyComponent;





