import React, { useState } from 'react';
import classNames from 'classnames';

import { TStepKilometerTournamentMap, TTournamentMapProps } from './TournamentMap.types.d';
import './TournamentMap.scss';

const TournamentMap: React.FC<TTournamentMapProps> = ({ data, color, id }) => {
  const [activeTab, setActiveTab] = useState<TStepKilometerTournamentMap>(data?.race[0]);
  return (
    <div className="TournamentMap" id={id}>
      <div className="container">
        <div className="TournamentMap-wrapper">
          <h2 className="TournamentMap-title">
            Cung đường <span style={{ color }}>{data.name}</span>
          </h2>
          <div className="TournamentMap-tab flex items-center">
            {data?.race?.map((item: any) => (
              <div
                key={item._id}
                className={classNames('TournamentMap-tab-item', { active: item.distance === activeTab?.distance })}
                onClick={(): void => setActiveTab(item)}
              >
                <div className="TournamentMap-tab-item-line" style={{ background: color }} />
                {item.distance} {data.unitRace}
              </div>
            ))}
          </div>
          <div className="TournamentMap-main flex" style={{ background: color }}>
            <div className="TournamentMap-main-info">
              <h4 className="TournamentMap-main-info-title">
                {activeTab?.distance} <span>{data.unitRace}</span>
              </h4>
              <div className="TournamentMap-main-info-list" dangerouslySetInnerHTML={{ __html: activeTab?.routeMap }} />
            </div>

            <div className="TournamentMap-main-map">
              <div className="TournamentMap-main-map-image">
                <img src={activeTab.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentMap;
