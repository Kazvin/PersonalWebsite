import './App.css';
import React from "react";

import { Routes, Route } from 'react-router';
import {Home, Projects, Contact, Resume, Errorpage} from "./components/pages";
import { CountDownTimer } from './components/CountDownTimer/CountDownTimer';



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<Projects />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/resume" element={<Resume />}/>
        <Route path="/countdown" element={<CountDownTimer/>} />
        <Route path="*" element={<Errorpage />}/>
      </Routes>

    <div className="App">

    </div>
    </>
  );
}

export default App;
