
import './App.css';
import Header from './components/Header';
import SearchCityMain from './components/SearchCityMain';
import Footer from './components/Footer';
import { useState } from 'react';

const App = () => {
  const [chosenCity, setChosenCity] = useState('')

  return (
    <div className="container">
      <Header/>
      <div className="main">
        <SearchCityMain/>

      </div>
      <Footer/>
    </div>
  );
}

export default App;
