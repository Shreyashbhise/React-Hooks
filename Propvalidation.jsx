import React from 'react'
import PropTypes from 'prop-types'

const Greeting = (props) => {
  return (
    <div>
      <h2>Welcome, {props.username}!</h2>
    </div>
  )
}

export default Greeting

Greeting.propTypes = {
  username: PropTypes.string,  // Expecting a string prop for username
}

Greeting.defaultProps = {
  username: 'User',  // Default value if no username is provided
}
/////////////////////////////////////////////////////////
import React from 'react'
import Greeting from './components/Greeting'

const App = () => {
  return (
    <div>
      <Greeting username="Payal" />
      <Greeting /> {/* Will use defaultProps 'User' */}
    </div>
  )
}

export default App
