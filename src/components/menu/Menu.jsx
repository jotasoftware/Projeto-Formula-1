import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom'
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
            <div className='menuLink'><Link to="/pilots">Pilotos</Link></div>
            <div className='menuLink'><Link to="/teams">Equipes</Link></div>
            <div className='menuLink'><Link to="/circuits">Circuitos</Link></div>
        </div>
        <FindYear></FindYear>
    </div>
  )
}

export default Menu