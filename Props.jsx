
import React from "react"
import ReactDOM from "react-dom"
import Greeting from './Greeting';

const App = ()=> {
    return (
        <div> 
            <h1>Welcome to My App</h1>
            <Greeting name= "Rutuja"/>

        </div>
    );
};


export default App;
 root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


import React from "react";

const Greeting = (props) => { 
    return(
        <div>
            <p>Hello {props.name}</p>
        </div>
    )

}

export default Greeting;
