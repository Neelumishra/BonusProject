import React from "react";
import "./style.css";
import {Routes,Route} from "react-router-dom"
import Home from "./component/Home";
import Navbar from "./component/Navbar"
import Contact from "./component/Contact";
import Todo from "./component/Todo"
export default function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/todo" element={<Todo/>}/>
      </Routes>
     
    </div>
  );
}
