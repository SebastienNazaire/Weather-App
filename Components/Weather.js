import React, { Component } from 'react';
import { render } from 'react-dom';

const Weather = props => {
  return(
    <div className="weather__info"> 
        <br></br>
        {props.city && props.country && <p className="weather__key">Temperature: <span className="weather__value">{props.temperature}</span></p>}
        {props.city && props.country && <p className="weather__key">Location: <span className="weather__value">{props.city}, {props.country}</span></p>}
        {props.city && props.country &&<p className="weather__key">Humidity: <span className="weather__value">{props.humidity}</span></p>}
        {props.city && props.country &&<p className="weather__key">Conditions: <span className="weather__value">{props.description}</span></p>}
        {props.error && <p>{props.error}</p>}
      </div>
  );
}

export default Weather;