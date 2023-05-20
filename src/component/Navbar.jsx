import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import "./Navbar.css"
export default function Home(){

  return(
    <div >
      <ul className="container" type="none" >
       <Link to="/"><li>Home</li></Link>
       <Link to="/contact" ><li>Contact</li></Link>
       <Link to="/todo" ><li>Todo</li></Link>
      </ul>
    
    </div>
  )
}