import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cursor from "./components/feature/Cursor";
import { ProjectDetails } from "./pages/ProjectDetails";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import { WithNav } from "./components/WithNav";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route element={<WithNav />}>
              <Route path="/" exact element={<Home />} />
            </Route>

            <Route>
              <Route path="/project/:name" element={<ProjectDetails />} />
            </Route>
            
          </Routes>
        </Router>
      </>
    );
  }
}

export default App;
