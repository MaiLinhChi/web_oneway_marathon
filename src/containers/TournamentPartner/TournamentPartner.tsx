import React from 'react';
import { Col, Row } from 'antd';

import ImageTournamentPartner1 from '@/assets/images/image-tournament-partner-1.png';
import ImageTournamentPartner2 from '@/assets/images/image-tournament-partner-2.png';
import ImageTournamentPartner3 from '@/assets/images/image-tournament-partner-3.png';
import ImageTournamentPartner4 from '@/assets/images/image-tournament-partner-4.png';
import ImageTournamentPartner5 from '@/assets/images/image-tournament-partner-5.png';
import ImageTournamentPartner6 from '@/assets/images/image-tournament-partner-6.png';
import ImageTournamentPartner7 from '@/assets/images/image-tournament-partner-7.png';
import ImageTournamentPartner8 from '@/assets/images/image-tournament-partner-8.png';
import ImageTournamentPartner9 from '@/assets/images/image-tournament-partner-9.png';

import { TTournamentPartnerProps } from './TournamentPartner.types.d';
import './TournamentPartner.scss';

const TournamentPartner: React.FC<TTournamentPartnerProps> = ({ color, title, id }) => {
  return (
    <div className="TournamentPartner" id={id}>
      <div className="container">
        <div className="TournamentPartner-wrapper">
          <h2 className="TournamentPartner-title">
            Đối tác <span style={{ color }}>{title}</span>
          </h2>

          <div className="TournamentPartner-main">
            <Row gutter={[24, 24]}>
              <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                <div className="TournamentPartner-card">
                  <div className="TournamentPartner-card-header">Nhà tài trợ kim cương</div>
                  <div className="TournamentPartner-card-body">
                    <Row gutter={[36, 36]} justify="center" align="middle">
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner1} alt="" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                <div className="TournamentPartner-card">
                  <div className="TournamentPartner-card-header">Nhà tài trợ bạch kim</div>
                  <div className="TournamentPartner-card-body">
                    <Row gutter={[36, 36]} justify="center" align="middle">
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner2} alt="" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col lg={{ span: 8 }} xs={{ span: 24 }}>
                <div className="TournamentPartner-card">
                  <div className="TournamentPartner-card-header">Nhà tài trợ năng lượng sạch</div>
                  <div className="TournamentPartner-card-body">
                    <Row gutter={[36, 36]} justify="center" align="middle">
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner3} alt="" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col lg={{ span: 15 }} xs={{ span: 24 }}>
                <div className="TournamentPartner-card">
                  <div className="TournamentPartner-card-header">Nhà tài trợ sản phẩm</div>
                  <div className="TournamentPartner-card-body">
                    <Row gutter={[36, 36]} justify="center" align="middle">
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner4} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#" style={{ maxHeight: '2.7rem' }}>
                            <img src={ImageTournamentPartner5} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner6} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#" style={{ maxHeight: '3.9rem' }}>
                            <img src={ImageTournamentPartner7} alt="" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>

              <Col lg={{ span: 9 }} xs={{ span: 24 }}>
                <div className="TournamentPartner-card">
                  <div className="TournamentPartner-card-header">Bảo trợ truyền thông</div>
                  <div className="TournamentPartner-card-body">
                    <Row gutter={[36, 36]} justify="center" align="middle">
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner8} alt="" />
                          </a>
                        </div>
                      </Col>
                      <Col>
                        <div className="TournamentPartner-card-image">
                          <a href="#">
                            <img src={ImageTournamentPartner9} alt="" />
                          </a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPartner;
