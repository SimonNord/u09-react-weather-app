import React from 'react';
import convertTime from './ConvertTime';
import convertWeekday from './ConvertWeekday';

const dayForecastContainerStyle = {
  border: '1px solid',
  borderRadius: '10px',
  backgroundColor: 'rgba(120, 120, 120, .25)',
};

const daysContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
};

const dayContainerStyle = {
  border: '1px solid',
  borderRadius: '10px',
  margin: '.5rem .25rem',
  padding: '.6rem',
  textTransform: 'capitalize',
  backgroundColor: 'white',
};

const DayForecast = (props) => {
  console.log('DayForecast props: ', props);

  const weatherData = props.weatherData.list;
  const { tempUnit } = props;
  const dayTempList = [];

  const timeOptions = {
    hour: 'numeric',
    minute: 'numeric',
  };

  // If the prop has received data push the first nine objects to array
  if (weatherData.length > 1) {
    console.log(weatherData);
    for (let i = 0; i < 9; i++) {
      dayTempList.push(weatherData[i]);
    }
  }

  return (
    <div className='dayForecastContainer' style={dayForecastContainerStyle}>
      <h3>24h Forecast</h3>

      <div className='daysContainer' style={daysContainerStyle}>
        {/* Loop each 3hour timestamp */}
        {dayTempList.map((temp) => (
          <div className='dayContainer' key={temp.dt} style={dayContainerStyle}>
            {/* Weekday String*/}
            <div className='weekday'>
              {convertWeekday(temp.dt, { weekday: 'long' })}
            </div>
            {/* Timestamp hh:mm */}
            <div className='dayTime'>{convertTime(temp.dt, timeOptions)}</div>
            {/* Weather Icon */}
            {/* In a loop if there are multiple weather types */}
            {temp.weather.map((weatherType) => (
              <div key={Math.random() * 99999}>
                <img
                  className='dayWeatherIcon'
                  src={`http://openweathermap.org/img/wn/${weatherType.icon}@2x.png`}
                  alt={weatherType.description}
                  title={weatherType.description}
                />
                <div>{weatherType.description}</div>
              </div>
            ))}
            {/* Temperature */}
            <div className='dayTemp'>
              {Math.round(temp.main.temp)}
              {tempUnit === 'metric' ? '\u00b0C' : '\u00b0F'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayForecast;
