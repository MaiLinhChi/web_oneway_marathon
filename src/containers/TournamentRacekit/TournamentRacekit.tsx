import React from 'react';
import { Col, Row } from 'antd';

import { TTournamentRacekitProps } from './TournamentRacekit.types.d';
import { dataTournamentRacekit } from './TournamentRacekit.data';
import './TournamentRacekit.scss';

const TournamentRacekit: React.FC<TTournamentRacekitProps> = ({ color, colors = [] }) => {
  return (
    <div className="TournamentRacekit">
      <div className="container">
        <div className="TournamentRacekit-wrapper">
          <h2 className="TournamentRacekit-title">
            Race
            <span style={{ color }}>KIT</span>
          </h2>

          <div className="TournamentRacekit-main">
            <Row>
              {dataTournamentRacekit.map((item, index) => (
                <Col span={6}>
                  <div className="TournamentRacekit-main-image" style={{ background: colors[index] }}>
                    <img src={item.image} alt="" />
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRacekit;
