import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "389a0a515fbb8a0725c86a080b67db82";


class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value; 

    if (city && country){
      const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);

      const data = await api_call.json();
      console.log(data);

      this.setState({
        temperature : data.main.temp, 
        city: data.name, 
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else{
      this.setState({
        temperature : undefined, 
        city: undefined, 
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter valid values!"
      });
    }
  }

  render() {
    return (
      <div>
        <Titles/>
        <Form getWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}
export default App;
