import React from 'react';
import './css/App.css';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
