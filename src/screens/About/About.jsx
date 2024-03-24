import React from 'react'
import "./About.css"
import Nav from "../../components/Nav/Nav.jsx"
 
function About() {
  return (
    <section className='section-white'>
    <div className="about-container">
        <Nav />
    
            <div>
                <h1 className="section-title">The Team Behind Rek'T</h1>
            </div>

            <div>
            <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0668.JPG' alt='ar' />
                    <h3>Grace Clower</h3>
                    <div className='team-info'>
                        <p>Front End</p>
                        <p>Back End</p>
                        <p>Route Master</p>
                    </div>
                    <p className='fav-game'>Favorite Games: </p>
                    <p><a href="https://github.com/geclower"><img className='github-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a></p>
            
                </div>
                
       
                <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0666.JPG' alt='ar' />
                    <h3>Abdul Rehman</h3>
                    <div className='team-info'>
                        <p>Front End</p>
                        <p>Back End</p>
                    </div>
                    <p className='fav-game'>Favorite Games:</p>
                    <p><a href="https://github.com/arehmanlatif1"><img className='github-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a></p>
                  
                </div>
        
                <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0667.JPG' alt='ar' />
                    <h3>Jennifer Bourke</h3>
                    <div className='team-info'>
                        <p>Git Master</p>
                        <p>Backend Engineer</p>
                    </div>
                    <p className='fav-game'>Favorite Games: Baldur's Gate 3, Legend of Zelda BoTW, Final Fantasy VII</p>
                    <p><a href="https://github.com/jbourke16"><img className='github-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a></p>
             
                </div>
                <div className="team-item">
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0664.JPG' alt='eric' />
                    <h3>Eric Howington</h3>
                    <div className='team-info'>
                        <p>Design Lead</p>
                        <p>UX + UI</p>
                        <p>Frontend Component Relationships</p>
                    </div>
                    <p className='fav-game'>Favorite Games: Battletoads, THPS, Skyrim</p>
                    <p><a href="https://github.com/erichowington"><img className='github-icon' src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/github-icon.png"/></a></p>
    
                </div>


        </div>
    </div>
    </section>
  )
}

export default About