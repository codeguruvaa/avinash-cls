import React from 'react';
import { Col, Row , Container, Alert,Navbar,Nav,NavDropdown,Table} from 'react-bootstrap';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>

    <Navbar bg="info" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <Container>
     <h2 className="display-2">Heading</h2>
    </Container>  

    <Container>
      <Row>
        <Col>
        <Alert variant="info" className='shadow'>
            <p className="fPara">
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
            </p>
          </Alert>
        </Col>
        
        <Col>
          <Alert variant='danger' className='shadow' >
              <p className='sPara'>
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
                the quick brown fox jumps over the lazy dogthe quick brown fox jumps over the lazy dog
              </p>
          </Alert>
        </Col>
      </Row>
    </Container>

    <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </Container>
    </div>
  );
}

export default App;