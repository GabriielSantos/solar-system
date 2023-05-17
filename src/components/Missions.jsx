import React from 'react';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import './Missions.css';
import Title from './Title';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="containerMissions">
        <Title headline="Missões" />
        <div className="missions">
          {
            missions.map((mission) => (
              <MissionCard
                key={ mission.name }
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            ))
          }
        </div>
      </div>
    );
  }
}

export default Missions;
