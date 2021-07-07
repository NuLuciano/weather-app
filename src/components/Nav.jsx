import React from 'react';
import Logo from '../weather-logo.png'
import SearchBar from './SearchBar.jsx';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav({onSearch}) {
  return (
    <div className={s.container}>
      <NavLink to='/'>
        <div className={s.homeCnt}>
          <img className={s.logo} src={Logo} alt="Henry"/>
          <h1 className={s.h1}>Weather - App</h1>
        </div>
      </NavLink>
      <div style={{ color: "white"}}>&#124;</div>
      <NavLink to='/about' activeClassName={s.active}>
        <span className={s.about}>
          <p>About me</p>
        </span>
      </NavLink>
      <div className={s.srchBar}>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
};

export default Nav;
