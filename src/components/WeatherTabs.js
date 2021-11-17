import PropTypes from 'prop-types'
import WeatherTab from './WeatherTab'

const WeatherTabs = ({cityName, apiData }) => {
    return (
        <div>
            Forecast for {cityName}

                {apiData.list.map((obj, index) => (
                    <WeatherTab key={index} date={obj.dt} temp={obj.main.temp} desc={obj.weather[0].main} icon={obj.weather[0].icon}/>
                ))}
        </div>
    )
}

WeatherTabs.propTypes = {
    cityName: PropTypes.string.isRequired
}
export default WeatherTabs
