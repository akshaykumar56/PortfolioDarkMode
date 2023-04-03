import React from 'react'
import './footer.css'
const Footer = () => {
  const mode=localStorage.getItem("mode");
  const style={
    backgroundColor:(mode==='white'?'white':'black'),
    fontFamily: "'Bebas Neue', cursive",
    bottom:0
  }
  
  return (
    <div>
      <div className='footer d-flex justify-content-center' style={style}>  <b>© </b>&nbsp;Copyright-All Rights Are Reserved</div>
    </div>
  )
}

export default Footer
