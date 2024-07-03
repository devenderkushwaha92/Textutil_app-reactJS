// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Mytext from './Components/Mytext';
import About from './Components/About'
import Theam from './Components/Theam'
import { useState } from 'react';
import Alerts from './Components/Alerts';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const[mode,changeMode]=useState('light')
  const[text,changeText]=useState('dark')
  const[button,changeButton]=useState('Enable Dark Mode')
  const[fontColor,changefontColor]=useState('black')
  const[alertType,changeAlertType]=useState(null)
  const[alertText,changeAlertText]=useState(null)
  
  
  

const toggleMode = ()=>{
    if(mode === 'light' && text ==='dark' &&fontColor ==='black'){
      
      changeMode('dark');
      changeText('light');
      changeButton('Enable light Mode');
      changefontColor('white');
      document.body.style.backgroundColor='#404040';
      changeAlertType('Success');
      changeAlertText('Dark Mode Enabled')
    }
    else{
       
      changeMode('light');
      changeText('dark');
      changeButton('Enable Dark Mode');
      changefontColor('black');
      document.body.style.backgroundColor='white';
      changeAlertType('Success');
      changeAlertText('Light Mode Enabled');      
    }
}

  return (
  <>
  <BrowserRouter>
       <Navbar mode={mode} text={text} button={button} toggleMode={toggleMode} />
      <Alerts alertType={alertType} alertText={alertText} />
      <Routes>
        <Route path="/" element={<Mytext fontColor={fontColor} text={text} />} />
        <Route path="/Home" element={<Mytext />} />
        <Route path="/about" element={<About />} />
        <Route path="/Theam" element={<Theam />} />


      </Routes>
    </BrowserRouter>
  </>
  );
  
}

export default App;
