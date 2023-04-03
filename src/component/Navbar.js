import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import BootstrapSwitchButton from 'bootstrap-switch-button-react';
import Form from 'react-bootstrap/Form';
 
import './Navbar.css'

function BasicExample(props) {
  const mode=localStorage.getItem("mode");
  const color=localStorage.getItem("color");
  const style={
    backgroundColor:(!mode?'#212529':mode)
  }
  
  return (
    <Navbar className='d-flex justify-content-around  border-bottom' style={style}>
      <Container className='d-flex justify-content-between'>
        <div>
        <Navbar.Brand className='logo' href="/home" style={{color:(mode==='white'?'black':'white'),fontFamily:"'Creepster', cursive"}} >Akshay</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div>
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link className='nav-links' href="/home" style={{color}}><span className="material-symbols-outlined">home</span></Nav.Link>
            <Nav.Link className='nav-links' href="/contact" style={{color}}><span className="material-symbols-outlined">contacts</span></Nav.Link>
            <Nav.Link className='nav-links' href="/project" style={{color}}><span className="material-symbols-outlined">work</span></Nav.Link>
            
          </Nav>
         
         <div className="mx-4">
          <Form.Check 
        type="switch"
        id="custom-switch"
        onClick={props.toggleMode}
        label={mode==='white'?'Dark':'Light'}

      />
       </div>
        </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}

export default BasicExample;