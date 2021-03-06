import React from 'react'
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import AllRoutes from './Routes';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <AllRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
