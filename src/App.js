import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from 'react';


import Navs from './component/Navs';
import Project from './component/Project/Project';
import Navbar from './component/Navbar';
import Contact from './component/Contact/Contact';
import Home from './component/Home1/Home';
import Footer from './component/Footer';

import Html from './component/home/HTML/Html';
import Css from './component/home/CSS/Css';
import JavaScript from './component/home/JAVAS/Javas';
import React from './component/home/REACT/React';
import Mongo from './component/home/MONGO/Mongo';
import Python1 from './component/home/PYTHON/Python';
import C from './component/home/DATASTRUCTURE/C';
import Cpp from './component/home/CPP/Cpp';
import AI from './component/home/AI/AI';
import Node from './component/home/NODE/Node';
import Express from './component/home/EXPRESS/Express';
import SQL from './component/home/SQL/SQL';

function App() {
  const [A,setA]=useState('1');
  localStorage.setItem("color", "#909090");
  var toggleMode=()=>{
    if(A==='1'){
      localStorage.setItem("mode", "#212529");
      setA('2')
    }
    else{
      localStorage.setItem("mode", "white");
      setA('1')
    }
  }

    var e=localStorage.getItem('mode')
      if(e==='white'){
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
      }
      else
      {
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
        
      }
  return (
  <>
   <BrowserRouter>
    <Navbar  toggleMode={toggleMode}/>
    <Navs  />
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/home" element={<Home/>}/>
    <Route exact path="/project" element={<Project/>}/>
    <Route exact path="/contact" element={<Contact/>}/>

    <Route exact path="/home/html" element={<Html/>}/>
    <Route exact path="/home/python" element={<Python1/>}/>
    <Route exact path="/home/css" element={<Css/>}/>
    <Route exact path="/home/javascript" element={<JavaScript/>}/>
    <Route exact path="//home/react" element={<React/>}/>
    <Route exact path="/home/node" element={<Node/>}/>
    <Route exact path="/home/express" element={<Express/>}/>
    <Route exact path="/home/mongo" element={<Mongo/>}/>
    <Route exact path="/home/ai" element={<AI/>}/>
    <Route exact path="/home/c" element={<C/>}/>
    <Route exact path="/home/cpp" element={<Cpp/>}/>
    <Route exact path="/home/sql" element={<SQL/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>
  );
}

export default App;