import React, { Component } from 'react'
import User from './User'
import Userclass from './Userclass'


class About extends Component {
  constructor(props) {
    super(props)

    
    // console.log("parent Contructor is called")
  }

 
  render() {
    console.log("parent render")
    return (
      <div>
        <h1>
          About
        </h1>
        <h2>This is About Section</h2>
        <Userclass name={"Jayesh chauhan"} />

      </div>
    )

  }
}


export default About
