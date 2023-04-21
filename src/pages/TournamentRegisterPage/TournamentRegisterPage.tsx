import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useSelector } from 'react-redux';

import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { TSelectOption } from '@/components/Select';
import TabRectangle from '@/components/TabRectangle';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentPaymentForm from '@/pages/TournamentRegisterPage/TournamentPaymentForm';
import TournamentRegisterGroupForm from '@/pages/TournamentRegisterPage/TournamentRegisterGroupForm';
import { TRootState } from '@/redux/reducers';

import { dataTabTournamentRegisterPage } from './TournamentRegisterPage.data';
import { EKeyTabTournamentRegisterPage } from './TournamentRegisterPage.enums';
import { TTournamentRegisterPageProps } from './TournamentRegisterPage.types';
import './TournamentRegisterPage.scss';
import { useLocation, useParams } from '@reach/router';
import { getMarathonById } from '@/services/api';
import { getQueryParam } from '@/utils/functions';

const TournamentRegisterPage: React.FC<TTournamentRegisterPageProps> = () => {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState<TSelectOption>(dataTabTournamentRegisterPage[0]);
  const param = useParams();
  const { pathname } = useLocation();
  const key = 'tab';
  const tabQuery = getQueryParam(key);
  const payment = pathname.includes('payment');
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const res = await getMarathonById(param.id);
      setData(res.data);
    };
    fetchData();
  }, [param.id]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <Row className="TournamentRegisterPage-wrapper">
          <Col span={24}>
            <h2 className="TournamentRegisterPage-title">{payment ? 'Thanh toán' : 'Đăng ký tham gia'}</h2>
          </Col>
          {isMobile ? (
            <Col span={24}>
              <TournamentRegisterInformation />
            </Col>
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
              {payment ? (
                <TournamentPaymentForm />
              ) : (
                <>
                  {activeTab.value === EKeyTabTournamentRegisterPage.SINGLE ? (
                    <TournamentRegisterForm
                      data={data}
                      isGroup={tabQuery === EKeyTabTournamentRegisterPage.MULTIPLE ? true : false}
                    />
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
                <TournamentRegisterInformation />
              </Col>
            )}
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default TournamentRegisterPage;
