import React from 'react'
import "./Mission.css"

function Mission() {
  return (
    <div className='mission-wrapper'>
        <div className='mission-container'>
            <div className='mission-header'>So why us?</div>
            <div className='statement-holder'>
                <div className='statement-header'>Discover & Explore:</div>
                <div className='statement-body'>Dive into our extensive library of video games, spanning from classic titles to the latest releases across all platforms. Whether you're into action-packed adventures or strategic simulations, REK'T offers something for every gamer. Explore curated lists, genres, and trending games to uncover your next gaming obsession.</div>
            </div>
            <div className='statement-holder'>
                <div className='statement-header'>Community & Interaction:</div>
                <div className='statement-body'>Connect with fellow gamers, share your gaming experiences, and engage in lively discussions about your favorite titles. From reviews to strategies, REK'T fosters a vibrant community where your passion for gaming can flourish.</div>
            </div>
            <div className='statement-holder'>
                <div className='statement-header'>Track & Organize:</div>
                <div className='statement-body'>Effortlessly keep track of the games you've played, want to play, and everything in between. With REK'T intuitive interface, managing your gaming library has never been easier.</div>
            </div>
            <div className='statement-holder'>
                <div className='statement-header'>Seamless Integration:</div>
                <div className='statement-body'>Access REK'T anytime, anywhere. Our app is available across multiple devices, ensuring you never miss a gaming moment, whether you're at home or on the move.</div>
            </div>
        <div className='closing-holder'>
            <div className='closing-body'>Join REK'T and elevate your gaming experience today! Download now and embark on an epic journey through the thrilling world of video games like never before.</div>
        </div>
        </div>
    </div>
  )
}

export default Mission