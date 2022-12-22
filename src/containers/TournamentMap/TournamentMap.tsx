import React, { useState } from 'react';
import classNames from 'classnames';

import { TStepKilometerTournamentMap, TTournamentMapProps } from './TournamentMap.types.d';
import './TournamentMap.scss';

const TournamentMap: React.FC<TTournamentMapProps> = ({ title, stepKilometer = [], color }) => {
  const [activeTab, setActiveTab] = useState<TStepKilometerTournamentMap>(stepKilometer?.[0]);

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
                key={item.value}
                className={classNames('TournamentMap-tab-item', { active: item.value === activeTab?.value })}
                onClick={(): void => setActiveTab(item)}
              >
                <div className="TournamentMap-tab-item-line" style={{ background: color }} />
                {item.label} <span>KM</span>
              </div>
            ))}
          </div>
          <div className="TournamentMap-main flex" style={{ background: color }}>
            <div className="TournamentMap-main-info">
              <h4 className="TournamentMap-main-info-title">
                {activeTab?.label} <span>KM</span>
              </h4>
              <ol className="TournamentMap-main-info-list">
                {activeTab?.list?.map((item) => (
                  <li>{item.label}</li>
                ))}
              </ol>
            </div>
            <div className="TournamentMap-main-map">
              <div className="TournamentMap-main-map-image">
                <img src={activeTab?.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentMap;
