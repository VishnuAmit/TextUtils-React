import './App.css';
import Navbar from './Components/Navbar';
import React,{useState} from 'react';
import Textform from './Components/Textform';
import Image from './Components/Image';
import Alert from './Components/Alert';

function App() {
  const [mode, setMode] = useState('red-bg');
  const [alert, setAlert] = useState(null);
  const [textAreaStyles, setTextAreaStyles] = useState({});

  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggleMode = () => {
    if (mode === 'red-bg') {
      setMode('dark');
      document.body.classList.add('dark-bg');
      document.body.classList.add('dark-text');
      showAlert("Dark mode has been enabled", "Success");
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('red-bg');
      document.body.classList.remove('dark-bg');
      document.body.classList.remove('dark-text');
      showAlert("Light mode has been enabled", "Success");
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      <div className="body-bg">
      <Navbar title="MyText" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}></Alert>
      <Textform showAlert={showAlert} heading="Enter your text here" mode={mode} />
      <Image></Image>
    
      </div>

    </>
  );
}

export default App;