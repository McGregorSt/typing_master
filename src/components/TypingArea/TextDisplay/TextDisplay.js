import React from 'react'

import classes from './TextDisplay.css'

const TextDisplay = () => {
  const displayedText = `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `
  return (
    <div className={classes.TextDisplay}>
      { displayedText }
    </div>
  )
}

export default TextDisplay