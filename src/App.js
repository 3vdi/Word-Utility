import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, {useState} from 'react';
import Alert from './components/Alert';
// import {
//   BrowserRouter,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg: message, type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("light mode has been enabled", "success")
    }
  }
  return (
    <>  
<Navbar title="Word-Utility" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">

{/* <Route path="/about" element={<About/>}/> */}
<TextForm heading="Enter text here" mode={mode} showAlert={showAlert}/>

</div>
    </>
  );
}

export default App;