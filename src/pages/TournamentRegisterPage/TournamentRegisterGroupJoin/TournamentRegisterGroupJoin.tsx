import React from 'react';
import './TournamentRegisterGroupJoin.scss';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

const TournamentRegisterGroupJoin: React.FC = () => {
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia nhóm {registerGroup?.group.group_name}</h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <TournamentRegisterForm isGroup />
              </Col>
              <Col span={24} lg={7}>
                <TournamentRegisterInformation />
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TournamentRegisterGroupJoin;
