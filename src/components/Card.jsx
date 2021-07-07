import React from 'react';
import { Link } from 'react-router-dom';
import s from './Card.module.css'

export default function Card(props) {
  return (<div className={s.card}>
    <button className={s.closeButton} onClick={props.onClose}>x</button>
    <h2><Link to={`/ciudad/${props.id}`} className={s.city}>{props.name}</Link></h2>
    <div className={s.cardContent}>
      <div className={s.minContainer}>
        <span>Min</span>
        <span>{props.min}°</span>
      </div>
      <div className={s.maxContainer}>
        <span>Max</span>
        <span>{props.max}°</span>
      </div>
      <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt={"Clima"}/>
    </div>
  </div>)
};