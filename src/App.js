import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Projects from './Projects';

export default function App() {

    return (
      <Router>
        <div className="App">

          <Navbar />

          <div className="center">
            <section className="name">DHEERAJ GUPTA</section>
            <section className="profession">WEB DEVELOPER</section>
          </div>

          <Routes>
            <Route exact path='/' />
            <Route path='/projects' element={<Projects />} />
          </Routes>
        </div>
      </Router>
    );
  }
