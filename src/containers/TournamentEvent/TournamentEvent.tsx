import React from 'react';

import { TTournamentEventProps } from './TournamentEvent.types.d';
import './TournamentEvent.scss';

const TournamentEvent: React.FC<TTournamentEventProps> = ({ color, data, id }) => {
  return (
    <div className="TournamentEvent" id={id}>
      <div className="container">
        <div className="TournamentEvent-wrapper">
          <h2 className="TournamentEvent-title">
            Lịch trình
            <span style={{ color }}>sự kiện</span>
          </h2>

          <div className="TournamentEvent-main">
            {data.map((item: any, index: any) => (
              <div key={index} className="TournamentEvent-main-item flex">
                <div className="TournamentEvent-main-item-day">
                  <div className="TournamentEvent-main-item-day-title">{item.title}</div>
                  <div className="TournamentEvent-main-item-day-description">{item.description}</div>
                </div>
                <div className="TournamentEvent-main-item-timeline">
                  {item.detail.map((detail: any, key: any) => (
                    <div className="TournamentEvent-main-item-timeline-item flex" key={key}>
                      <div className="TournamentEvent-main-item-timeline-item-title">{detail.time}</div>
                      <div className="TournamentEvent-main-item-timeline-item-circle-wrapper">
                        <div className="TournamentEvent-main-item-timeline-item-circle" />
                        <div className="TournamentEvent-main-item-timeline-item-line" />
                      </div>
                      <div className="TournamentEvent-main-item-timeline-item-description">{detail.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentEvent;
