import React from 'react'
import './Menu.css';
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <div className='menuDiv'>
        <div className='image'>
            <img src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-7.png" alt="" />
        </div>
        <div className='menuItens'>
            <div className='menuLink'><Link to="/pilots">Pilotos</Link></div>
            <div className='menuLink'><Link to="/teams">Equipes</Link></div>
            <div className='menuLink'><Link to="/circuits">Circuitos</Link></div>
        </div>
    </div>
  )
}

export default Menu