import React from "react";
import s from './Ciudad.module.css'

export default function Ciudad({ match, city }) {
    return (
        <div className={s.card}>
            <h1 className={s.city}>{city.name}</h1>
            <div className={s.cardContent}>
                <div className={s.minContainer}>
                    <div>Temperature: {city.temp} ºC</div>
                    <div>Weather: {city.weather}</div>
                    <div>Winds: {city.wind} km/h</div>
                    <div>Clouds: {city.clouds}</div>
                    <div>Latitude: {city.latitud}º</div>
                    <div>Longitude: {city.longitud}º</div>
                </div>
                <img className={s.image} src={`http://openweathermap.org/img/wn/${city.img}@2x.png`} alt="Weather" />
            </div>
        </div>
    )
}