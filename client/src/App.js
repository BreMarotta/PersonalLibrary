import React from 'react';
import './App.css';
import {  Route, Routes } from "react-router-dom";
import Navigation from './Components/Navigation'
import Home from './Components/Home'
import Library from './Components/Library'
import AddBookForm from './Components/AddBookForm'

function App() {
  return (
    <div className="App">
      <h1>Hello from Breanne</h1>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/library" element={<Library />} />
        <Route exact path='/new' element={<AddBookForm />} />
      </Routes>
    </div>
  );
}

export default App;
