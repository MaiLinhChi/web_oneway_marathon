import React from 'react';

import Button from '@/components/Button';

import { TTournamentSystemProps } from './TournamentSystem.types.d';
import { dataTournamentSystem } from './TournamentSystem.data';
import './TournamentSystem.scss';

const TournamentSystem: React.FC<TTournamentSystemProps> = () => {
  return (
    <section className="TournamentSystem" id="hethonggiaidau">
      <div className="container">
        <div className="TournamentSystem-wrapper">
          <h2 className="TournamentSystem-title">
            Hệ Thống
            <span>giải OneWay</span>
          </h2>
        </div>
      </div>

      <div className="TournamentSystem-main">
        {dataTournamentSystem.map((item) => (
          <div className="TournamentSystem-item flex items-center">
            <div className="TournamentSystem-item-info">
              <h4 className="TournamentSystem-item-title">{item.title}</h4>
              <p className="TournamentSystem-item-description">{item.description}</p>
              <div className="TournamentSystem-item-btn">
                <Button type="primary" title="Xem chi tiết" link={item.link} />
              </div>
            </div>
            <div className="TournamentSystem-item-image">
              <img src={item.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TournamentSystem;
