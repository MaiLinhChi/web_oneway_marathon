import React from 'react';

import ImageTournament1 from '@/assets/images/image-tournament-1.png';

import { TTournamentsProps } from './Tournaments.types';
import './Tournaments.scss';
import { Col, Row } from 'antd';
import { navigate } from '@reach/router';
import { Paths } from '@/pages/routers';

const Tournaments: React.FC<TTournamentsProps> = () => {
  return (
    <div className="Tournaments">
      <div className="Tournaments-group">
        <div className="Tournaments-group-title">Sắp diễn ra</div>
        <div className="Tournaments-group-list">
          <Row gutter={[24, 24]}>
            {[1, 2].map((item) => (
              <Col span={8} key={item}>
                <div
                  className="Tournaments-group-list-item"
                  onClick={(): void => {
                    navigate(Paths.TournamentDetail('1'));
                  }}
                >
                  <img src={ImageTournament1} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className="Tournaments-group">
        <div className="Tournaments-group-title">Đã diễn ra</div>
        <div className="Tournaments-group-list">
          <Row gutter={[24, 24]}>
            {[1, 2, 3].map((item) => (
              <Col span={8} key={item}>
                <div
                  className="Tournaments-group-list-item"
                  onClick={(): void => {
                    navigate(Paths.TournamentDetail('1'));
                  }}
                >
                  <img src={ImageTournament1} alt="" />
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;
