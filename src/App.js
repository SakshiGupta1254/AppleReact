import React,{useState, useEffect, createContext, Fragment} from 'react';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
export const RootContext = createContext({});

function App() {
 

  return (
  
    <div className={"App-no-x-overflow"}>
      
      {
      <Router><Header/></Router>
           
     
        }
        </div>
  );
}

export default App;
