import React from 'react'
import './CardRace.css'

const CardRace = ({dataRace}) => {

    console.log(dataRace)

  return (
    <div className='cardRace'>
        <h2>{dataRace.raceName}</h2>
        <p>{new Date(dataRace.date).toLocaleDateString("pt-BR")}</p>
        <a href={`https://www.google.com/maps?q=${dataRace.Circuit.Location.lat},${dataRace.Circuit.Location.long}`} target="_blank" rel="noreferrer">{dataRace.Circuit.circuitName}</a>
    </div>
  )
}

export default CardRace