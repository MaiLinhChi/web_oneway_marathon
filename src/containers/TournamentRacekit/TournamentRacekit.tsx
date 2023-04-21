import React from 'react';
import { Col, Row } from 'antd';

import { TTournamentRacekitProps } from './TournamentRacekit.types.d';
import './TournamentRacekit.scss';

const TournamentRacekit: React.FC<TTournamentRacekitProps> = ({ color, colors = [], data, id }) => {
  return (
    <div className="TournamentRacekit" id={id}>
      <div className="container">
        <div className="TournamentRacekit-wrapper">
          <h2 className="TournamentRacekit-title">
            Race
            <span style={{ color }}>KIT</span>
          </h2>
          <div className="TournamentRacekit-main">
            <Row>
              {data.map((item: any, index: any) => (
                <Col xs={{ span: 12 }} lg={{ span: 6 }} key={index}>
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
