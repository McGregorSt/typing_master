import React from 'react'

import classes from './Typing.css'
import TextDisplay from './TextDisplay/TextDisplay'
import LiveTyping from './LiveTyping/LiveTyping'

const Typing = () => {
 return (
    <div className={classes.Typing}> 
      <TextDisplay />
      <LiveTyping />
    </div>
  )
}

export default Typing