import React,{useState} from 'react';
import axios from 'axios';
//import Card from './Card'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home"
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
      
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

