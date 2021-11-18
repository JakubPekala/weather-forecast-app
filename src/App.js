import './App.css';
import { useState } from 'react';
import { Routes, Route} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import Header from './components/Header';
import SearchCityMain from './components/SearchCityMain';
import WeatherTabs from './components/WeatherTabs';
import Footer from './components/Footer';

// main component of application
const App = () => {
  const [chosenCity, setChosenCity] = useState('') // name of obatined city
  const [apiData, setApiData] = useState([]) // data retrived from API, empty if search hasn't been successful
  const navigate = useNavigate(); // routing hook

  const fetchKey = process.env.REACT_APP_API_KEY // key to openweathermap API 
  const numberOfTimestamps = 5 // number of timestemps retrieved from server (1 timestemps = forecast for 3h)
  
  // Search action: fetch forecast data for given city, check response code. If succes save obtain data in hook 
  const onSearch = async (cityName) => {
    setChosenCity(cityName)
    const data = await fetchCity(cityName)
    setApiData(data)
    if(data.cod !== '200') {  // expand with service  of others responses 
      setApiData([])
      return false
    }
    navigate('/search');
    setChosenCity("")
    return true
  }

  // navigate from forecast view to main- search page
  const onBack = () => {
    setApiData([])
    navigate('/');
  }

  // fetching forecast data from API
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
        <Routes>
          <Route path='/' exact element={ 
                <SearchCityMain onSearch={onSearch} /> // search input component
            }
          />
          <Route path='/search' element={
                <WeatherTabs cityName={chosenCity} apiData={apiData} onBack={onBack}/> // forecast view compnent
            }
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

