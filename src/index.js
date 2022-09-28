import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Entry from "./components/Entry";
import AllEntries from "./components/AllEntries";

function getdata(){

  var link= ["link1","link2","link3"]
  var name = ["Name 01","Name 02","Name 03"];
  var content = ["C1","C2","C3"];
  
  for(let i ;  i<3 ;i++){
<Entry link={link[i]} name={name[i]} content={content[i]} />
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
    <AllEntries/>
    </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
