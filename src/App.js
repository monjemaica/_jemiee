import React, { Component } from 'react';
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About'
import { getExp } from "./services/experienceData";

class App extends Component {
  state = {
    exp: []
  };

  componentDidMount(){
    const exp = [...getExp()]
    this.setState({exp})
  }

  render() { 
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact element= {<Home exp />}/>
          </Routes>
        </Router>
      </>
    );
  }
}
 
export default App;
