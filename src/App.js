import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'


class App extends Component {


  render() { 
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element= {<Home />}/>
          </Routes>
        </Router>
      </>
    );
  }
}
 
export default App;
