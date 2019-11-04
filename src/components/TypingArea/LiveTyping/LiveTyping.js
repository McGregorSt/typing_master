import React, { Component } from 'react'

import classes from './LiveTyping.css'
import TypingInput from './Input/TypingInput'

class LiveTyping extends Component {
  
  render () {
    return (
      <div className={classes.LiveTyping}>
        LiveTyping
        <TypingInput />
      </div>
    )
  } 
}

export default LiveTyping