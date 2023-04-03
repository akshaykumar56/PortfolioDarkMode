import React from 'react'
import './home.css'
import Img from './Ak.jpg'
import Img2 from './Ak2.jpg'
import Img1 from './Akshay.jpg'

import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {
  const mode=localStorage.getItem("mode");
  return (
  <>
  
  <div className=" d-flex flex-column justify-content-center" style={{backgroundImage:(mode==='white'?(`url(${Img}`):(`url(${Img2}`)),backgroundRepeat:'no-repeat',backgroundPosition: 'center center',backgroundSize: 'cover',height:'auto'}}>
    <div className='title my-3' style={{fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'black':'white')}}>Technology is best when it brings people together</div>
   
   
  <div className="Cont my-3" style={{fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'black':'white')}}>
 
  <div className="my-5 container d-flex flex-column justify-content-center align-items-center" style={{fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'black':'white')}}>

<TypeWriterEffect
  textStyle={{ fontFamily: "'Bebas Neue', cursive",color:(mode==='white'?'black':'white') }}
  startDelay={100}
  text="Welcome To My Portfolio Website !"
  typeSpeed={50}
  eraseSpeed={100}
/>
    

    <div className="d-flex flex-row justify-content-center">

    <button className="button btn bg-transparent mx-4 my-2" style={{border:'2px solid silver'}}><a href="/project" style={{textDecoration:'none',color:(mode==='white'?'black':'white')}}>Projects</a></button>
    <button className="button btn bg-transparent mx-4 my-2" style={{border:'2px solid silver'}}><a href="/contact" style={{textDecoration:'none',color:(mode==='white'?'black':'white')}}>Contact</a></button>
    
    </div>
  

    </div>

    
    </div>



    </div>
  

  <div className='About' style={{backgroundColor:'#E8E8E8'}}>
    <div className="about2 ">

    <div className="image d-flex flex-column justify-content-center align-items-center " >
      <div className="photo my-3">
      <img src={Img1} alt="Akshay"  style={{height:'200px',width:'200px'}}/>
      </div>
    </div>

<div className="data" style={{backgroundColor:'#E8E8E8',fontFamily: "'Bebas Neue', cursive"}}>
    <div className='data1'>
    <div  style={{backgroundColor:'#E8E8E8',color:'grey',fontSize:'30px',fontFamily: "'Bebas Neue', cursive"}}>About Me</div>
    <div  style={{backgroundColor:'#E8E8E8',color:'black',fontSize:'20px',fontFamily: "'Bebas Neue', cursive"}}>Akshay Kumar</div>
      <p style={{color:'#101010'}}>COMPUTER SCIENCE ENGINEERING STUDENT AT  UNIVERSITY INSTITUTE OF TECHNOLOGY.<br/>WEB DEVELOPER EXPERIENCED IN  HTML, CSS, JAVASCRIPT, REACTJS, NODEJS, EXPRESSJS, MONGODB.
      </p>
     <h5 style={{color:'grey'}}> ADDITIONAL COURSES</h5>
      <p style={{color:'#101010'}}>ARTIFICIAL INTELLIGENCE COURSE FROM CDAC MOHALI.
      </p>
    </div>

    </div>
  </div>
  </div>
  </>
  )
}

export default Home
