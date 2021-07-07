import React from 'react';
import Card from './Card.jsx';
import s from './Cards.module.css'

export default function Cards({cities, onClose}) {
  const cities1 = cities.map((city, index) => 
    <Card
      max={city.max}
      min={city.min}
      name={city.name}
      img={city.img}
      onClose={() => onClose(city.id)}
      id={city.id}
      key={index}
      />)
  if (!cities.length) {
    return <div className={s.text}>Add a city to check the weather!</div>
  } else {
    return <div className={s.cards}>{cities1}</div>
  }
};