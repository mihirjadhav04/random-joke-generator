import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []); // Empty dependency array means this effect runs only once after the component mounts

  const fetchJoke = () => {
    axios.get("/api/v1/getAjoke")
      .then((response) => {
        console.log(response.data);
        setJoke(response.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="content">
        <h3>Random Joke Generator</h3>
        <div className="joke-box">
          <p>{joke}</p>
        </div>
        <button onClick={fetchJoke}>Get Joke</button>
      </div>
    </div>
  );
}

export default App;
