import PropTypes from 'prop-types'
import { useState } from 'react'
import { BsSearch } from 'react-icons/bs';



const SearchCityMain = (props) => {
    const [cityName, setCityName] = useState('')


    const onSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <form className='search-city-form-main' onSubmit={onSubmit}>
            <label>Choose weather in city... </label>
            <div className='search-box'>
                <input
                    type='text'
                    placeholder='Search a city'
                    text={cityName}
                    onChange= {(e) => { setCityName(e.target.value)} }
                />
                <button type = 'submit' className=' btn'>
                    <BsSearch style={{color:'black'}}/>
                </button>
            </div> 
            
        </form>
    )
}

SearchCityMain.propTypes = {
    
}

export default SearchCityMain

