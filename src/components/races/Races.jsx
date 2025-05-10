import React from 'react'
import './Races.css'
import CardRace from '../cardRace/CardRace'
import { RaceContext } from '../../context/RaceContext'
import { useContext } from 'react'
import Loading from '../loading/Loading'

const Races = () => {
    const { racesData } = useContext(RaceContext);
    
    if(!racesData) return <Loading />

  return (
    <div className='racesDiv'>
        <div className="cardsRaces">
            {racesData.map((race, index)=>(
                <CardRace dataRace={race}></CardRace>
            ))}
        </div>
    </div>
  )
}

export default Races