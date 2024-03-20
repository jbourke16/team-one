import React from 'react'
import './Game.css'

function Game (props) {
  return (
    <div>
      <div className='image-container'>
      <div className='game-name'> {props.name}</div>
      <img className="game-image" src={props.image} alt={props.name}/>
      </div>
    </div>
  )
}

export default Game