import React from 'react';
import Main from './Main';
import Remove from "./Remove";
import Edit from "./Edit";
import First from './First';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {
 
 

  return (
    <div> 
      <Routes>
        <Route path='/' element={<Main />}/>
        <Route path='/add' element={<First />}/>
        <Route path='/edit' element={<Edit  />}/>
        <Route 
            element={<Navigate to="/" />} 
            path="*" 
          />
      </Routes>
    </div>
  );
}

export default App;
