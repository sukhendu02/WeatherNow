import logo from './logo.svg'
import './App.css';
import NavbarMenu from './Components/NavbarMenu';
import Leftpart from './Components/Leftpart';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from './Components/Home';


import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function App() {
  return (
    <>
    <NavbarMenu/>
    {/* <Leftpart/> */}
    <Routes> 
      <Route exect path="/about" element={<About />}></Route>
      <Route exect path="/contact" element={<Contact />}></Route>
      {/* <Route exect path="/" element={<About />}></Route> */}
      {/* <Route exect path="/about" element={<About />}></Route> */}
      <Route exect path="/" element={<Home/>}></Route>
    </Routes>
  
    </>
  );
}
export default App;
