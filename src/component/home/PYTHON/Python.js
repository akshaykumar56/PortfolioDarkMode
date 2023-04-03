import React from 'react'
import IMG from './PYTH.png'
import IMG1 from './APPL.png'
import IMG2 from './DEVL.jpg'
import './python.css'
const Python = () => {
  return (
    <div className='container d-flex flex-column align-items-center justify-content-around my-5'>
    <h1>Python</h1>
    <h4>Watch My Work With Python At My <a href='https://github.com/akshaykumar56/Python' style={{textDecoration:'none'}}>Github</a></h4>
    <img src={IMG} alt="Pyth" className='img my-4 shadow '/>
    <p className='my-2'>Python is a high-level, general-purpose programming language.
    Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming.<br/><br/>
    <h4>Python Applicalion</h4>
    <img src={IMG1} alt="APPLICATION" className="my-2"/>

    <h4>Python In Software DevelopMent</h4>
    <img src={IMG2} alt="DEVELOPMENT"  className="my-2"/>
    </p>
    </div>
  )
}

export default Python
