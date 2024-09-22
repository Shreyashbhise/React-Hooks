import React from 'react'

import MountingA from './components/MountingA'

const App = () => {
  return (
    <div className='App'>
      <h1>Let's understand lifecycle</h1>
      <MountingA />
      
    </div>
  )
}

export default App

////////////////////////////////////////////////////////////////////////////////////////////////


import React,{ Component } from "react";
import MountingB from "./MountingB";

class MountingA extends Component{
    constructor(props) {
        super(props)
        this.state = { 
           name: 'Rutuja'

        }
        console.log('Mounting constructor ')
    }
    static getDerivedStateFromProps(props,state) { 
        console.log('MountingA getderivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('MountingA componentDidMount')
        
    }
    shouldComponentUpdate(){
        console.log('MountingA shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState) { 
        console.log('MountingA getSnapshotBeforeUpdate ')
       return true

    }
    componentDidUpdate(){
        console.log('MountingA componentDidUpdate ')
    }
    changeState = () => {
        this.setState({
            name: "Sakshi"
        })
    }

    render() { 
        console.log('MountingA render')
        
        return (
            <div>
               <div>MountingA</div>
               <button onClick={this.changeState}>Change State</button>
               <MountingB />
            </div>
        )
    }
}

export default MountingA

/////////////////////////////////////////////////////////////////////////////////////


import React,{ Component } from "react";

class MountingB extends Component{
    constructor(props) {
        super(props)
        this.state = { 
            products : []

        }
        console.log('Mounting constructor ')
    }
    static getDerivedStateFromProps(props,state) { 
        console.log('MountingB getderivedStateFromProps')
        return null
    }
    componentDidMount() {
        console.log('MountingB componentDidMount')
        
    }
    shouldComponentUpdate(){
        console.log('MountingB shouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState) { 
        console.log('MountingB getSnapshotBeforeUpdate ')
        return true

    }
    componentDidUpdate(){
        console.log('MountingB componentDidUpdate ')
    }
   
    render() { 
        console.log('MountingB render')
        
        return (
            <div>
               <div>MountingB</div>
               
            </div>
        )
    }
}

export default MountingB

