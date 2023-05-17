import React from 'react';
import Planets from '../data/planets';
import PlanetCard from './PlanetCard';
import './SolarSystem.css';
import Title from './Title';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="containerPlanets">
        <Title headline="Planetas" />
        <div className="PlanetList">
          {
            Planets.map((planet) => (
              <PlanetCard
                key={ planet.name }
                planetName={ planet.name }
                planetImage={ planet.image }
              />
            ))
          }
        </div>
      </div>

    );
  }
}

export default SolarSystem;
