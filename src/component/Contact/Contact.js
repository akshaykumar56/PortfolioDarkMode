import React from 'react'
import IMG from './Ak.jpg'
import IMG2 from './Ak2.jpg'
import './Contact.css'
const Contact = () => {
  const mode=localStorage.getItem('mode');
  return (

    <div className="contact  my-5 " >
      <div className="image mx-2">
      <img src={mode==='white'?IMG2:IMG} alt="Akshay" style={{height:'auto'}}/>
      </div>
 
      <div className="details d-flex flex-column justify-content-center" style={{textAlign:'left'}}>
      <h4 className='d-flex flex-row 'style={{color:(mode==='white'?'black':'white')}}>Phone: 8894055729</h4>
      <h4 className='d-flex flex-row 'style={{color:(mode==='white'?'black':'white')}}>Gmail: kshykumr@gmail.com</h4>
      <h4 className='d-flex flex-row 'style={{color:(mode==='white'?'black':'white')}}>GitHub: github.com/akshaykumar56</h4>
      <h4 className='d-flex flex-row 'style={{color:(mode==='white'?'black':'white')}}>LinkedIn: linkedin.com/in/akshaypalsra</h4>
      </div>
    </div>
  )
}

export default Contact
