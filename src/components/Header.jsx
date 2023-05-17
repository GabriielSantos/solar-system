import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="retangle">
          <h1>Sistema Solar</h1>
          <div className="elipse" />
        </div>
      </header>
    );
  }
}

export default Header;
