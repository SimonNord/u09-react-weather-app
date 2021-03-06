import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTint } from '@fortawesome/free-solid-svg-icons'
import Temperature from '../Temperature/Temperature';

// imports global styles used on top level div
import '../../App.css'

function Detail(props) {
//   console.log('Detail props', props);

  const { main } = props.weather;

  return (
    <div className="componentContainer">
    <h3>Details</h3>
      <p>Humidity {main.humidity} % <FontAwesomeIcon icon={faTint} /></p>
      <p>
        Feels like <Temperature temp={main.feels_like} tempUnit={props.tempUnit} />
      </p>

      {/* <img
        src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt={weather.description}
        title={weather.description}
      /> */}
    </div>
  );
}

export default Detail;
