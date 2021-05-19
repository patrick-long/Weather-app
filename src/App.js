import { useState } from 'react'; 
import './App.css';

function App() {

  const [weather, setWeather] = useState({
    weather: []
  });
  const [location, setLocation] = useState({
    city: '',
    state: '',
    latitude: '',
    longitude: ''
  });

  
  const getLatLong = async (city, state) => {
    const latLongURL = `http://open.mapquestapi.com/geocoding/v1/address?key=${process.env.REACT_APP_API_KEY}&location=${city},${state}`
    const latLong = await fetch(latLongURL).then(res => res.json());

    console.log(latLong);

    setLocation(() => ({
      latitude: latLong.results[0].locations[0].latLng.lat,
      longitude: latLong.results[0].locations[0].latLng.lat
    }))
  };

  const handleChange = (e) => {
    setLocation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  };

  return (
    <div className="App">
      <header className="App-header">
        <a href="/">H O M E</a>
        <a href="#">S I G N &nbsp; U P</a>
        <a href="#">L O G &nbsp; I N</a>
      </header>
      <h1>Weather App</h1>
      <form action="">
        <p>Get your current weather</p>
        <label>Enter your city
          <input 
            type="text" 
            name="city" 
            value={location.city}
            onChange={handleChange} 
          />
        </label>
        <label>Enter your state
          <input 
            type="text" 
            name="state"
            value={location.state}
            onChange={handleChange}
          />
        </label>
        <input class="btn btn-success lat-long-submit" type="submit" value="Submit" onSubmit={() => {getLatLong(location.city, location.state)}}/>

        <h3>Your geolocation:</h3>
        <p>Latitude: {location.latitude}</p>
        <p>Longitude: {location.longitude}</p>
      </form>
    </div>
  );
}

export default App;
