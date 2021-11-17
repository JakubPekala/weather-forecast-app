import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';



const SearchCityMain = ({ onSearch }) => {
    const [cityName, setCityName] = useState('')
    const [properCityName, setProperCityName] = useState(true)
    let borderColor = (properCityName) ? "search-box blackBorder" : "search-box redBorder";

    const onSubmit = async(e) => {
        e.preventDefault()

        if (!cityName) {
            setProperCityName(false)
            return
          }
        setProperCityName(true)
        const searchResult = await onSearch(cityName)

        if(!searchResult) {
            setProperCityName(false)
            return
        }
        console.log("DONE")
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
                <button type='submit' className='btn'>
                    <BsSearch style={{color:'black'}}/>
                </button>
            </div> 
            {!properCityName && <p className='incorrectCityName'>Please enter proper city name</p>}
        </form>
    )
}

export default SearchCityMain

