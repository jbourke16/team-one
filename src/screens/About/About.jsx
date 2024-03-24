import React from 'react'
import "./About.css"
import Nav from "../../components/Nav/Nav.jsx"
 
function About() {
  return (
    <section className='section-white'>
    <div className="about-container">
        <Nav />
        <div className='row'>
            <div>
                <h2 className="section-title">The Team Behind Rek'T</h2>
                <p className='section-subtitle'>"I like people who are working on practical things and who are working in teams. It's not so important to get the glory. It's much more important to get something that works. It's a better way to live." — Freeman Dyson</p>
            </div>
            <div>
                <div className="team-item">
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0664.JPG' alt='eric' />
                    <h3>Eric Howington</h3>
                    <div className='team-info'><p>Head of Design</p></div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sed?</p>
                    <ul className='team-icon'>
                        <li>
                            <a href="https://www.linkedin.com/in/erichowington/" className='linked-in'>
                            <i className=''>LinkedIn</i>
                            </a></li>
                            <li>
                                <a href=' https://github.com/erichowington' className='github'>
                                    <i src="/Icons/icons8-github-48">Github</i>
                                </a>
                            </li>
                    </ul>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0666.JPG' alt='ar' />
                    <h3>Abdul Rehman</h3>
                    <div className='team-info'><p>Team will Select</p></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium?</p>
                    <ul className='team-icon'>
                        <li>
                           <a href="https://www.linkedin.com/in/abdulrehmanlatif1/" className='linkedin'>
                            <i className=''>LinkedIn</i></a>     
                        </li>
                        <li>
                            <a href='https://github.com/arehmanlatif1' className='github'>
                                <i className=''>Github</i>
                            </a>
                            </li> 
                    </ul>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0667.JPG' alt='ar' />
                    <h3>Jenn Bourke</h3>
                    <div className='team-info'><p>Team will Select</p></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium?</p>
                    <ul className='team-icon'>
                        <li>
                           <a href="https://www.linkedin.com/in/jennifer-bourke-se/" className='linkedin'>
                            <i className='https://icons8.com/icon/xuvGCOXi8Wyg/linkedin'>LinkedIn</i></a>     
                        </li>
                        <li>
                            <a href='https://github.com/jbourke16' className='github'>
                                <i className='https://icons8.com/icon/3tC9EQumUAuq/github'>Github</i>
                            </a>
                            </li> 
                    </ul>
                </div>
            </div>
            <div className='col-sm-6'>
                <div className='team-item'>
                    <img className='team-image' src='/Dev-Team-Icons/IMG_0668.JPG' alt='ar' />
                    <h3>Grace Clower</h3>
                    <div className='team-info'><p>Team will Select</p></div>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, accusantium?</p>
                    <ul className='team-icon'>
                        <li>
                           <a href="https://www.linkedin.com/in/grace-clower/" className='linkedin'>
                            <i className=''>LinkedIn</i></a>     
                        </li>
                        <li>
                            <a href='https://github.com/geclower' className='github'>
                                <i className=''>Github</i>
                            </a>
                            </li> 
                    </ul>
                </div>
            </div>

        </div>
    </div>
    </section>
  )
}

export default About