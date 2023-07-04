import Navbar from './Navbar.jsx';
import Text from './Text.jsx';
//import About from './About.jsx';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {

    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <div>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Text mode={mode} />
    </div>
  );
}
export default App;

