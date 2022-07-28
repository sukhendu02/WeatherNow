import React from 'react'
import '../App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

export default function NavbarMenu() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div class="container-fluid">
    <a class="navbar-brand"><i class="fa-solid fa-cloud-bolt"></i> Weather NOW</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
  

<NavLink className="nav-link" to="/">Home</NavLink> 
<NavLink className="nav-link" to="/about">About</NavLink> 
<NavLink className="nav-link" to="/contact">Contact</NavLink> 
       
      </ul>

      <div class="form-check form-switch mx-5">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
  <label class="form-check-label" for="flexSwitchCheckChecked">Dark</label>
</div>
      
    </div>
  </div>
</nav>
    
    </>
  )
}
