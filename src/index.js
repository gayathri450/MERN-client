import React, { useEffect, useReducer, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Components/Header';
import Login from './Components/Login';
import TodoList from './Components/TodoList';
import Feedback from './Components/Feedback';
import '../src/index.css'
import {BrowserRouter as Router,
  Routes,
  Link,
  Route} from 'react-router-dom';
import Register from './Components/Register';
import Mycomponent from './Mycomponent';
//import Example from './Example';
const root =document.getElementById('root')//root id from index.html
const VirtualRoot = ReactDOM.createRoot(root);
VirtualRoot.render(
  <Router>
  <div>  
    <Header/>
  </div>
  <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register/>} />
    </Routes>
  </Router>
)

