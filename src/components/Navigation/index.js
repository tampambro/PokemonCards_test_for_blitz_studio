import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './index.scss';

function Navigation() {
  function activeSideList() {
    const sideList = document.querySelector('.SideList');
    sideList.classList.add('active');
  }

  return (
    <Navbar variant="dark" bg="dark">
      <Nav>
        <Nav.Link onClick={activeSideList}>List</Nav.Link>
        <div className="mainNav">
          <Nav.Link href="/">Home</Nav.Link>
        </div>
      </Nav>
    </Navbar>
  );
}

export default Navigation;
