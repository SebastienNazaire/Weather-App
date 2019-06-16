import React, { Component } from 'react';
import { render } from 'react-dom';

const Weather = props => {
  return(
    <div> 
        <br></br>
        {props.city && props.country && <p>Temperature: {props.temperature}</p>}
        {props.city && props.country && <p>Location: {props.city}, {props.country}</p>}
        {props.city && props.country &&<p>Humidity: {props.humidity}</p>}
        {props.city && props.country &&<p>Conditions: {props.description}</p>}
        {props.error && <p>{props.error}</p>}
      </div>
  );
}

export default Weather;