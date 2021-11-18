import React from 'react'
import PropTypes from 'prop-types'



// component representing data of one timestemp
const WeatherTab = ({ date, temp, desc, icon}) => {

    // rounding float numbers, by deafult to halfs, rounding down
    function round(value, step) {
        step || (step = 0.5);
        var inv = 1.0 / step;
        return Math.round(value * inv) / inv;
    }

    // retrieve info about data from text field - dt_text, from apiData
    const dateReturn = () => {
        const dayArray= date.split(' ')[0].split('-');
        let dayDate = ""
        for (let x of dayArray) {
            dayDate = x + "." + dayDate;
          }
        return dayDate.substring(0, dayDate.length - 1)
    }

    // retrieve info about time from text field - dt_txt, from apiData
    const hourReturn = () => {
        const hour = date.split(' ')[1]
        const hourDate = hour.substring(0, hour.length - 3)
        return hourDate
    }

    return (
        <div className='weather-tab'>
            <div className='inner-block'>
                <p> Date: </p>
                <p> {dateReturn()} </p>
            </div>
            <div className='inner-block'>
                <p> Hour: </p>
                <p> {hourReturn()} </p>
            </div>
            <div className='inner-block'>
                <p> Temp: </p>
                <p> {round (temp)}&deg; C </p>
            </div>
            <div className='inner-block'  style={{width: "30%"}}>
                <p> {desc.toLowerCase()} </p>
            </div>
            <div className='inner-block' style={{width: "10%"}}>
                <img
                    src={`http://openweathermap.org/img/w/${icon}.png`}
                    alt="weather status icon"
                    className="weather-icon"
                />
            </div>
        </div>
    )
}

WeatherTab.propTypes = {
    date: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    desc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default WeatherTab
