// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  let dark = '#343a40'
const removeClass = ()=>{
  document.body.classList.remove('bg-primary')
  document.body.classList.remove('bg-warning')
  document.body.classList.remove('bg-danger')
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-light')
}
const toggleMode2 = (cls)=>{
  if(mode === 'dark'){
    removeClass();
    document.body.classList.add('bg-'+cls)
  }else{}
  
}
  const toggleMode = ()=>{
    if(mode === 'dark'){
   toggleMode2();
    }
    if(mode === 'dark'){
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('light mode has been enabled','success');
      document.title = 'TextUtils-LightMode'
      setInterval(() => {
        document.title = 'TextUtils is amazing'
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils install it now'
      }, 1500);

    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = dark
      showAlert('dark mode has been enabled','success');
      document.title = 'TextUtils-DarkMode'
    }
  }
  const showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    },3000 );
  }
  return (
  
    <Router>
        <Navbar title='TextUtils' about='about us' Mode={mode} toggleMode={toggleMode} toggleMode2={toggleMode2} />
          <Alert Alert={alert}/>
          <div className="container">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm title='Enter the Text To' showAlert={showAlert}  Mode={mode}/>}/>
      </Routes>
        </div>
    </Router>
      
    
  )
}

export default App;
