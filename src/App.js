import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About.jsx';
import Ciudad from './components/Ciudad.jsx';

export default function App() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  function onSearch(ciudad) {
    const apiKey = '4ae2636d8dfbdc3044bede63951a019b';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((response) => {
      if(response.main !== undefined){
          const ciudad = {
            min: Math.round(response.main.temp_min),
            max: Math.round(response.main.temp_max),
            img: response.weather[0].icon,
            id: response.id,
            wind: response.wind.speed,
            temp: response.main.temp,
            name: response.name,
            weather: response.weather[0].main,
            clouds: response.clouds.all,
            latitud: response.coord.lat,
            longitud: response.coord.lon
          };
          const cityExists = cities.filter(city => city.id === ciudad.id);
          if (cityExists.length > 0) {
            alert('This city is already in the list!');
          } else {
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("City not found");
        }
      });

    }
    function onFilter(ciudadId) {
      let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
      if(ciudad.length > 0) {
          return ciudad[0];
      } else {
          return null;
      }
    }
  return (
    <div className="App">
      <Route
        path='/'
        render={() => <Nav onSearch={onSearch} /> }
      />
      <Route path='/about' component={About} />
      <Route
        exact path='/'
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      <Route
        path='/ciudad/:id'
        render={( {match} ) => <Ciudad match={match} city={onFilter(match.params.id)} />}
      />
    </div>
  );
}

