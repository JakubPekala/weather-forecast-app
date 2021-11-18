import PropTypes from 'prop-types'
import { FiSunrise, FiSunset} from 'react-icons/fi';
import WeatherTab from './WeatherTab'
import Button from './Button';

// component grouping forecast view elements
const WeatherTabs = ({cityName, apiData, onBack}) => {

    // counting hour of sunrise for given city
    const sunrise = () => {
        const temp = apiData.city.sunrise + apiData.city.timezone // data given unix timestamp, UTC
        const dateOfSunrise = new Date() // init object to store datae data
        dateOfSunrise.setTime((temp) *1000) // change from unix timestamps to miliseconds

        // retrieve minutes info, if lower than 10 add 0 in front to
        const minutes = dateOfSunrise.getUTCMinutes() < 10 ? 
                        "0"+dateOfSunrise.getUTCMinutes() : 
                        dateOfSunrise.getUTCMinutes();
        return dateOfSunrise.getUTCHours() + ":" + minutes
    }

    // counting hour of sunset for given city, the same as function - sunrise()
    const sunset = () => {
        const temp = apiData.city.sunset + apiData.city.timezone // data given unix timestamp, UTC
        const dateOfSunset = new Date()
        dateOfSunset.setTime((temp) *1000)
        const minutes = dateOfSunset.getUTCMinutes() < 10 ? "0"+dateOfSunset.getUTCMinutes() : dateOfSunset.getUTCMinutes()
        return dateOfSunset.getUTCHours() + ":" + minutes
    }

    return (
        // before displaying, check if retrieved data is correct, 
        // to avoid critical errors where apiData is being searched for object which doesn't exist in that moment
        <div className='weather-tabs'>
            { (apiData.cod === "200") &&
                <div className='intro'> 
                    <div> Forecast for <strong>{apiData.city.name}</strong>. </div>
                    <div className='into sun' style={{fontSize: "large"}}> 
                        <FiSunrise size={18} className='react-icons sun-sets'/> {sunrise()}     
                        <FiSunset size={18} className='react-icons sun-sets'/> {sunset()} 
                    </div>
                </div>
            }
            {  (apiData.cod === "200") &&
                apiData.list.map((obj, index) => (
                    <WeatherTab key={index} date={obj.dt_txt} temp={obj.main.temp} desc={obj.weather[0].description} icon={obj.weather[0].icon}/>
                ))
            }
            <Button onBack={onBack}/>
        </div>
    )
}

WeatherTabs.propTypes = {
    cityName: PropTypes.string.isRequired,
    apiData: PropTypes.any.isRequired,
    onBack: PropTypes.func.isRequired
}

export default WeatherTabs

