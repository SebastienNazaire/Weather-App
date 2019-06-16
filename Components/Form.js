import React, { Component } from 'react';
import { render } from 'react-dom';

const Form = props =>(
  <form onSubmit={props.getWeather} autocomplete="off">
    <input type ="text" name ="city" placeholder="City"/> 
    <input type ="text" name ="country" placeholder="Country"/> 
    <button> Get Weather</button> 
  </form>
);

export default Form;