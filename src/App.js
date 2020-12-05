import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [getpydata, setpydata] = useState([{}])

  useEffect(()=> {
    fetch('/api').then(
      Response => Response.json()
    ).then(data => setpydata(data))
  }, []);

  return (
    <div className="App">
   <h1>{getpydata.title}</h1>
    </div>
  );
}

export default App;
