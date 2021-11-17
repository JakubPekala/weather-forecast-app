import React from 'react'

function round(value, step) {
    step || (step = 0.5);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}

const WeatherTab = ({ date, temp, desc, icon}) => {
    return (
        <div>
            {date +' - ' + ( round (temp)) + ' - ' + desc  }
            <img
              src={`http://openweathermap.org/img/w/${icon}.png`}
              alt="weather status icon"
              className="weather-icon"
            />
        </div>
    )
}

export default WeatherTab
