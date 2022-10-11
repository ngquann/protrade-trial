import './App.css';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import { useState } from 'react';

function App() {
  const [success, setSuccess] = useState(true)

  return (
    <div className="App">
      {
        success ? ( <><Header setSuccess={setSuccess}/> <Layout /></>) : <Login setSuccess={setSuccess}/>
      }
    </div>
  );
}

export default App;
