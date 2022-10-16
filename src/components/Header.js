import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href='/'>
            <img
              alt=""
              src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30151559/16_big1.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{' '}
            Taco Bell
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
