import React, { useState } from 'react';
import classNames from 'classnames';

import { TStepKilometerTournamentMap, TTournamentMapProps } from './TournamentMap.types.d';
import './TournamentMap.scss';

const TournamentMap: React.FC<TTournamentMapProps> = ({ title, stepKilometer = [], color }) => {
  const [activeTab, setActiveTab] = useState<TStepKilometerTournamentMap>(stepKilometer[0]);
  console.log('stepKilometer[0]', stepKilometer[0]);
  return (
    <div className="TournamentMap">
      <div className="container">
        <div className="TournamentMap-wrapper">
          <h2 className="TournamentMap-title">
            Cung đường <span style={{ color }}>{title}</span>
          </h2>
          <div className="TournamentMap-tab flex items-center">
            {stepKilometer.map((item) => (
              <div
                key={item.id}
                className={classNames('TournamentMap-tab-item', { active: item.distance === activeTab?.distance })}
                onClick={(): void => setActiveTab(item)}
              >
                <div className="TournamentMap-tab-item-line" style={{ background: color }} />
                {item.name}
              </div>
            ))}
          </div>
          <div className="TournamentMap-main flex" style={{ background: color }}>
            <div className="TournamentMap-main-info">
              <h4 className="TournamentMap-main-info-title">
                {activeTab?.distance} <span>KM</span>
              </h4>
              <div
                className="TournamentMap-main-info-list"
                dangerouslySetInnerHTML={{ __html: activeTab?.description }}
              />
            </div>

            <div className="TournamentMap-main-map">
              <div className="TournamentMap-main-map-image">
                <img src={'https://api-dev.onewaymarathon.com' + activeTab?.road_map_image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentMap;
