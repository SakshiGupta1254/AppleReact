import React,{useState} from 'react';

import './App.css';
import { Button } from "@material-ui/core/";

function sec() {
  const [count,setCount] = useState(0);
  return (
    
    <div className="Sec">
      <header className="App-header">
        <code>I am Second page</code>
        <Button onClick={()=>{setCount(count+1)
        }}>I too carry the value</Button>
  <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default sec;
