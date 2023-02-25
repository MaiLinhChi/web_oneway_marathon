import React, { useEffect } from 'react';
import './TournamentRegisterGroupJoin.scss';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.png';
import { Col, Row } from 'antd';
import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

const TournamentRegisterGroupJoin: React.FC = () => {
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.registerGroupResponse);
  console.log('registerGroup', registerGroup);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia nhóm {registerGroup?.group.group_name}</h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]}>
              <Col span={17}>
                <TournamentRegisterForm isGroup />
              </Col>
              <Col span={7}>
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
