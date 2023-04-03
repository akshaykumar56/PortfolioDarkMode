import React from 'react'
import IMG from './ai.jpg'
import './ai.css'
const AI = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>Artificial Intelligence</h1>
    <h4>Watch My Work With AI At My <a href='https://github.com/akshaykumar56/ArtificialIntelligence' style={{textDecoration: 'none'}}>Github</a></h4>
    <img src={IMG} alt="AI" className='img my-4 shadow'/>
    <p className='my-2'>
    <b>Artificial intelligence</b> is a term representing a range of techniques that allow machines to mimic or exceed human intelligence.<br/>
    When humans think, they sense what's happening in their environment, realize what those inputs mean, make a decision based on them, and then act.<br/>
    Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.<br/>
    Specific applications of AI include <b>expert systems, natural language processing, speech recognition and machine vision</b>.<br/>
    </p>
    </div>
  )
}

export default AI
