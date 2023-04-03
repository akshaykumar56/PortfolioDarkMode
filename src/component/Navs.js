import Nav from 'react-bootstrap/Nav';

function FillExample() {
  const mode=localStorage.getItem("mode");
  const color=localStorage.getItem("color");
  const style={
    backgroundColor:(!mode?'#212529':mode)
  }
  
  return (
    <Nav activeKey="/home"   className='d-flex justify-content-center sticky-top ' style={style}>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-1" href="/home/html" style={{color:color}}>HTML</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-2" href="/home/css" style={{color:color}}>CSS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-3" href="/home/javascript" style={{color:color}}>JavaScript</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-4" href="/home/react" style={{color:color}}>ReactJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-5" href="/home/node" style={{color:color}}>NodeJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-6" href="/home/express" style={{color:color}}>ExpressJs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-7" href="/home/mongo" style={{color:color}}>MongoDB</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-8" href="/home/python" style={{color:color}}>Python</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-9" href="/home/ai" style={{color:color}}>AI</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-10" href="/home/c" style={{color:color}}>DataStructure</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-11" href="/home/cpp" style={{color:color}}>CPP</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <Nav.Link className='nav-links' eventKey="link-12" href="/home/sql" style={{color:color}}>SQL</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default FillExample;