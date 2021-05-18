import { useEffect, useState } from 'react'; 
import './App.css';

function App() {

  const [weather, setWeather] = useState({
    weather: []
  });

  console.log(weather); 
  
  return (
    <div className="App">
      <header className="App-header">
        <a href="/">H O M E</a>
        <a href="#">S I G N &nbsp; U P</a>
        <a href="#">L O G &nbsp; I N</a>
      </header>
      <h1>Weather App</h1>
    </div>
  );
}

export default App;
