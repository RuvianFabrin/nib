import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Private } from "./pages/Private";
function App() {
  return (
    <div className="App">
      <header>
        <h1>Header do Site</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/Private">Private</Link>
        </nav>
      </header>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/private" element={<Private />}/>
      </Routes>
    </div>
  );
}
//https://www.youtube.com/watch?v=iD94avNeoXM&ab_channel=BoniekyLacerda
//25:02
export default App;
