import React, { Component } from 'react'
import Welcome from './components/Welcome'
import Greeting from './components/Greeting'

class App extends Component {
  render(){
    return(
      <div className="App">
        <Welcome />
        <Greeting />
      </div>
    )
  }
}

export default App