import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import './FindYear.css';
import { useState, useEffect } from 'react';
import { SeasonContext } from '../../context/SeasonContext';
import { useContext } from 'react';

const FindYear = () => {
  const [year, setYear] = useState(0);
  const [active, setActive] = useState(false);
  const { setYearSeason } = useContext(SeasonContext);

  useEffect(()=>{
    if(year.length === 4 && year>=1950 && year<=2025) return setActive(true);
    setActive(false);
  },[year])


  const handleChange = (e)=>{
    setYear(e.target.value);
  }

  const handleClick = ()=>{
    if(year.length === 4 && year>=1950 && year<=2025){
      setYearSeason(year);
      setYear(0);
    }
  }

  return (
    <div className='findYearDiv'>
        <p>Procurar outro ano:</p>
        <div className="inputDiv">
          <input type="text" value={year===0 ? '' : year} onChange={handleChange} />
          <div className={`sendArrow ${active ? 'active' : ''}`} onClick={handleClick}>
            <FaArrowRight fill='white'></FaArrowRight>
          </div>
        </div>
    </div>
  )
}

export default FindYear