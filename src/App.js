import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link, Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import ReactProject from './ReactProject';
import JsProject from './JsProject'
import MernProject from './MernProject'

function App() {
  return (
    <Router>
      <div className="App">
        
        <Navbar/>

        <h1 className="name">DHEERAJ GUPTA</h1>

        <Routes>
          <Route path='/react' element={<ReactProject/>} />
          <Route path='/js' element={<JsProject/>} />
          <Route path='/mern' element={<MernProject/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
