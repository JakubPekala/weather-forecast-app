import './App.css';
import Header from './components/Header';
import SearchCityMain from './components/SearchCityMain';
import WeatherTabs from './components/WeatherTabs';
import Footer from './components/Footer';
import { useState } from 'react';
// import { useState, useEffect } from 'react';


const App = () => {
  const [chosenCity, setChosenCity] = useState('')
  const [cityFound, setCityFound] = useState(false)
  const [apiData, setApiData] = useState([])

  const fetchKey = process.env.REACT_APP_API_KEY
  const numberOfTimestamps = 5
  // const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${chosenCity}&appid=${fetchKey}&units=metric&cnt=${numberOfTimestamps}`
  
  const onSearch = async (cityName) => {
    setChosenCity(cityName)
    const data = await fetchCity(cityName)
    setApiData(data)
    console.log(cityName, data)
    if(data.cod === '404') { return false} 
    setCityFound(true)
    return true
  }

  const fetchCity = async (cityName) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${fetchKey}&units=metric&cnt=${numberOfTimestamps}`
    const res = await fetch(apiUrl)
    const data = await res.json()
    return data
  }

  return (
    <div className="container">
      <Header/>
      <div className="main">
        <SearchCityMain onSearch={onSearch} /> 
        {cityFound && <WeatherTabs cityName={chosenCity} apiData={apiData}/> }
      </div>
      <Footer />
    </div>
  );
}

export default App;
