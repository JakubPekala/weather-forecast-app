import { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

// component containing main view of page - panel for city searching 
const SearchCityMain = ({ onSearch }) => {
    const [cityName, setCityName] = useState('') // current value of from's text input, passed to onSubmit
    const [properCityName, setProperCityName] = useState(true)  // change to false if fetch action failed or user haven't input any string 
                                                                // on that state depends style of form's input
    let borderColor = (properCityName) ? "search-box blackBorder" : "search-box redBorder";  // change of input field style if incorrect cityName

    // submit of searching form
    const onSubmit = async (e) => {
        e.preventDefault() // not reload page

        if (!cityName) { // if no text in field turn it to red 
            setProperCityName(false)
            return
          }
        // if correct fetch data
        setProperCityName(true)
        const searchResult = await onSearch(cityName)

        // if fetch failed (incorrect cityName/API/credentials problem) turn input field to red
        if(!searchResult) {
            setProperCityName(false)
            return
        }
        // if everything went well clear state for next searching
        setCityName("") 
    }

    return (
        <form className='search-city-form-main' onSubmit={onSubmit}>
            <label>Choose weather in city...</label>
                <div className={borderColor} 
                    onChange={() => {setProperCityName(true)}} 
                > 
                <input
                    type='text'
                    placeholder='Search a city'
                    value={cityName}
                    onChange= {(e) => { 
                        setCityName(e.target.value)
                        setProperCityName(true)
                    }}
                />
                <button type='submit' className='btn inline'>
                    <BsSearch size={18} style={{color:'black'}}/>
                </button>
            </div> 
            {!properCityName && <p className='incorrectCityName'>Please enter proper city name</p>}
        </form>
    )
}

export default SearchCityMain

