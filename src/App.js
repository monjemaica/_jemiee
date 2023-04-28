import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Cursor from './components/feature/Cursor';


class App extends Component {


  render() { 
    return (
      <>
        <Router>
          <Navbar />
          <Cursor />
          <Routes>
            <Route path="/" exact element= {<Home />}/>
          </Routes>
        </Router>
      </>
    );
  }
}
 
export default App;
