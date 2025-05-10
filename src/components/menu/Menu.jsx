import React from 'react'
import './Menu.css';
import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { SeasonContext } from '../../context/SeasonContext';
import FindYear from '../findYear/FindYear';

const Menu = () => {

  const { yearSeason } = useContext(SeasonContext);

  return (
    <div className='menuDiv'>
        <div className='logo'>
            <img src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="" />
            <p>{yearSeason}</p>
        </div>
        <div className='menuItens'>
            <div className='menuLink'><NavLink to="/pilots" className={({ isActive }) => isActive ? 'active' : ''}>Pilotos</NavLink></div>
            <div className='menuLink'><NavLink to="/teams" className={({ isActive }) => isActive ? 'active' : ''}>Equipes</NavLink></div>
            <div className='menuLink'><NavLink to="/races" className={({ isActive }) => isActive ? 'active' : ''}>Corridas</NavLink></div>
        </div>
        <FindYear></FindYear>
    </div>
  )
}

export default Menu;