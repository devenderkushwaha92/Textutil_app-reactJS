// import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Mytext from './Components/Mytext';
import { useState } from 'react';



function App() {
  const[mode,changeMode]=useState('light')
  const[text,changeText]=useState('dark')
  const[button,changeButton]=useState('Enable Dark Mode')
  const[fontColor,changefontColor]=useState('black')
const toggleMode = ()=>{
    if(mode === 'light' && text ==='dark' &&fontColor ==='black'){
      
      changeMode('dark');
      changeText('light');
      changeButton('Enable light Mode');
      changefontColor('white');
      document.body.style.backgroundColor='#404040';
    }
    else{
       
      changeMode('light');
      changeText('dark');
      changeButton('Enable Dark Mode');
      changefontColor('black');
      document.body.style.backgroundColor='white';
      
    }
}

  return (
  <>
  <Navbar mode={mode} text={text} toggleMode={toggleMode} button={button} />
  <Mytext fontColor={fontColor}/>
  {/* <About /> */}

  </>
  );
  
}

export default App;
