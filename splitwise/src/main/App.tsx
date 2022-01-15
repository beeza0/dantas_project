import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Routes from './Routes.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className='navbar'>
          <a class="active" href="#SplitWise">SplitWise</a>
          <a href="#Groups">My Groups</a>
          <a href="#Profile">Profile</a>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
