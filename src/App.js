import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NotesState";
import Alert from "./components/Alert";

function App() {
  return (
    <NoteState>
      <Router>
        <div className="App">
          <Navbar />
          <Alert message="ok" />
          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />}></Route>
              <Route exact path="/" element={<Home />}></Route>
            </Routes>
          </div>
        </div>
      </Router>
    </NoteState>
  );
}

export default App;
