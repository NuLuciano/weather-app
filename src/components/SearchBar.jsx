import React, { useState } from 'react';
import s from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState('');
  return (
  <form className={s.cnt} onSubmit={(e) => {
    e.preventDefault();
    onSearch(city);
    setCity("");
  }}>
    <input
    className={s.inp}
    type="text"
    placeholder='City name'
    value={city}
    onChange={e => setCity(e.target.value)}
    />
    <button className={s.button} type="submit">
      <span className={s.buttonText}>Add</span>
    </button>
  </form>)
};