import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Textbar from './components/Textbar';


function App() {
  return (<>
    <Navbar />
    <div className="container">
      <Textbar  />
      </div>
  </>
  )
};

export default App;
