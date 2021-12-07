import React from 'react';

function App() {
  return (
    <div className="App">
    <header>
    <nav className="nav-wrapper transparent">
      <div className="container">
        <a href="#" className="brand-logo">Mosaic NE Philly Homeschool Coop</a>
        <a href="#" className="sidenav-trigger" data-target="mobile-menu">
          <i className="material-icons">menu</i>
        </a>
        <ul className="right hide-on-med-and-down">
          <li><a href="#about">About Us</a></li>
          <li><a href="#what">What We Do</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="sidenav grey lighten-2" id="mobile-menu">
          <li><a href="#about">About Us</a></li>
          <li><a href="#what">What We Do</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    </header>




    </div>
  );
}

export default App;
