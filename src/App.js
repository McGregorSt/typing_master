import React from 'react';
import logo from './logo.svg';
import './App.css';

import TextDisplay from './components/TypingArea/TextDisplay/TextDisplay';
import LiveTyping from './components/TypingArea/LiveTyping/LiveTyping';

function App() {
  return (
    <div>
      <TextDisplay />
      <LiveTyping />
    </div>
  );
}

export default App;
