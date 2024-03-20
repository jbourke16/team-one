import React from 'react'
import "./Monsters.css"

function Monsters() {
  return (
    <div className='monsters-wrapper'>
        <div className='monsters-content'>
            <div className='play-it'>
                <img className='play-it-monster' src='https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Monsters/MONSTERS3.png?raw=true'/><span className='play-it-copy'>Play it!</span>
            </div>  
            <div className='log-it'>
                <img className='log-it-monster' src='https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Monsters/MONSTERS2.png?raw=true'/><span className='log-it-copy'>Log it!</span>
            </div> 
            <div className='share-it'>
                <img className='share-it-monster' src='https://github.com/jbourke16/team-rekt-frontend/blob/dev/public/Monsters/MONSTERS1.png?raw=true'/><span className='share-it-copy'>SHARE IT!</span>
            </div>
        </div>
    </div>
  )
}

export default Monsters