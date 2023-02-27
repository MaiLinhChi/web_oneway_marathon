import React, { useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.png';
import { TSelectOption } from '@/components/Select';
import TabRectangle from '@/components/TabRectangle';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentRegisterGroup from '@/pages/TournamentRegisterPage/TournamentRegisterGroup';
import TournamentPaymentForm from '@/pages/TournamentRegisterPage/TournamentPaymentForm';
import TournamentRegisterGroupForm from '@/pages/TournamentRegisterPage/TournamentRegisterGroupForm';
import { TRootState } from '@/redux/reducers';

import { dataTabTournamentRegisterPage } from './TournamentRegisterPage.data';
import { EKeyTabTournamentRegisterPage } from './TournamentRegisterPage.enums';
import { TTournamentRegisterPageProps } from './TournamentRegisterPage.types';
import './TournamentRegisterPage.scss';

const TournamentRegisterPage: React.FC<TTournamentRegisterPageProps> = ({ payment }) => {
  const [activeTab, setActiveTab] = useState<TSelectOption>(dataTabTournamentRegisterPage[0]);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);

  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <Row className="TournamentRegisterPage-wrapper">
          <Col span={24}>
            <h2 className="TournamentRegisterPage-title">
              {payment ? 'Thanh toán nhóm Only Tiger' : 'Đăng ký tham gia'}
            </h2>
          </Col>
          {isMobile ? (
            <Col span={24}>{payment ? <TournamentRegisterGroup /> : <TournamentRegisterInformation />}</Col>
          ) : (
            ''
          )}
          <Col span={24}>
            {!payment && (
              <div className="TournamentRegisterPage-tab">
                <TabRectangle value={activeTab} onChange={setActiveTab} options={dataTabTournamentRegisterPage} />
              </div>
            )}
          </Col>
          <Row className="TournamentRegisterPage-main">
            <Col span={24} lg={16}>
              {/* <PaymentInstructions /> */}
              {payment ? (
                <TournamentPaymentForm />
              ) : (
                <>
                  {activeTab.value === EKeyTabTournamentRegisterPage.SINGLE ? (
                    <TournamentRegisterForm />
                  ) : (
                    <TournamentRegisterGroupForm />
                  )}
                </>
              )}
            </Col>
            {isMobile ? (
              ''
            ) : (
              <Col span={24} lg={7}>
                {payment ? <TournamentRegisterGroup /> : <TournamentRegisterInformation />}
              </Col>
            )}
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default TournamentRegisterPage;
