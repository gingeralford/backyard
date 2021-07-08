import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Sitebar from './components/Sitebar';
import Splash from './components/Splash';
import './App.css';


function App() {
  return (
    <div className="App">
      <Sitebar />
      <Splash />
    </div>
  );
}

export default App;
