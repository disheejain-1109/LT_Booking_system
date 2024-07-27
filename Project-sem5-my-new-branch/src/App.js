// import logo from './logo.svg';
// import { BrowserRouter, NavLink } from "react-router-dom";
import './App.css';
// import Main from './components/Main';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom';
import { FirebaseProvider } from './config/firebase';
// import { BrowserRouter as Router } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Textform from './components/Textform';
//import { useState } from 'react';
//import About from './components/About';
//import Pra from './components/Pra';
// import React, {useState} from 'react'
// import Alert from './components/Alert';
import Nav from './components/Nav';
import HelpPage from './Help';
import Feedback from './components/Feedback';
import Home from './Home'
import { Auth } from './components/Auth';
import Dishee from './components/LoginHome';
import LoginHome from './components/LoginHome';
import { useEffect, useState } from 'react';
import { getDocs,collection } from 'firebase/firestore';
import Table from './components/Table';
import {db} from './config/firebase'; 
import NotNavbar from './components/NotNavbar';
import Pract from './components/Pract';
import Ishan from './components/Ishan';
function App() {
  return (
   
  
<>

 <BrowserRouter>
<FirebaseProvider>
<NotNavbar>

  <Nav/>
</NotNavbar>
  


 <Routes>
    
  <Route path="/" element={<LoginHome/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/help" element={<HelpPage/>}/>
  <Route path="/feedback" element={<Feedback/>}/>

</Routes>
</FirebaseProvider>
</BrowserRouter>   

</>
  );
}

export default App;
