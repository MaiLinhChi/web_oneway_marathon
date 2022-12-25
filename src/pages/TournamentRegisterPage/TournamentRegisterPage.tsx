import React, { useState } from 'react';
import { Col, Row } from 'antd';

import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.png';
import { TSelectOption } from '@/components/Select';
import TabRectangle from '@/components/TabRectangle';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentRegisterGroup from '@/pages/TournamentRegisterPage/TournamentRegisterGroup';
import TournamentPaymentForm from '@/pages/TournamentRegisterPage/TournamentPaymentForm';
import TournamentRegisterGroupForm from '@/pages/TournamentRegisterPage/TournamentRegisterGroupForm';

import { dataTabTournamentRegisterPage } from './TournamentRegisterPage.data';
import { EKeyTabTournamentRegisterPage } from './TournamentRegisterPage.enums';
import { TTournamentRegisterPageProps } from './TournamentRegisterPage.types';
import './TournamentRegisterPage.scss';

const TournamentRegisterPage: React.FC<TTournamentRegisterPageProps> = ({ payment }) => {
  const [activeTab, setActiveTab] = useState<TSelectOption>(dataTabTournamentRegisterPage[0]);

  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">
            {payment ? 'Thanh toán nhóm Only Tiger' : 'Đăng ký tham gia'}
          </h2>
          {!payment && (
            <div className="TournamentRegisterPage-tab">
              <TabRectangle value={activeTab} onChange={setActiveTab} options={dataTabTournamentRegisterPage} />
            </div>
          )}

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]}>
              <Col span={17}>
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
              <Col span={7}>{payment ? <TournamentRegisterGroup /> : <TournamentRegisterInformation />}</Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentRegisterPage;
