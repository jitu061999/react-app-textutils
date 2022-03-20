
import './App.css';

import About from './components/About';
import Navbar from './components/Navbar';
 import TextForm from './components/TextForm'; 
 import Alert from './components/Alert';
 import React, { useState } from 'react';
 

 import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode,setMode]=useState('light'); // whether darkmode mode is enabled or not 
  const [alert,setAlert]=useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
          setAlert(null);
    },1000)

  }

  const toggleMode = ()=>{
    if(mode ==='light')
{
  setMode('dark');
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
 //document.title="Textutils - Dark Mode"; 
 /*setInterval(()=>{
  document.title="Textutils is Amazing mode";
 },2000);

 setInterval(()=>{
  document.title="Textutils install Now";
 },1500);*/
}  

else{
  setMode('light');
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","success");
// document.title="Textutils - Light Mode"; 
}
}

  return (
    <>
    <Router>
     <Navbar title={"Textutils"} aboutText={"About"} mode={mode}  toggleMode={toggleMode}/>
     <Alert alert={alert}/>
     <div className="container my-3" >
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
           <TextForm showAlert={showAlert} heading={"Enter the text to analyze below"} mode={mode}/>
          </Route>
    </Switch>

        </div>
     </Router>
    </>
  
  );
}

export default App;
