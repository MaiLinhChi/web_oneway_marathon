import React, { useCallback, useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

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

const TournamentRegisterPage: React.FC<TTournamentRegisterPageProps> = ({ payment }) => {
  const location = useLocation();
  console.log(location);
  const [data, setData] = useState({});
  const param = useParams();
  const [activeTab, setActiveTab] = useState<TSelectOption>(dataTabTournamentRegisterPage[0]);
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  useEffect(() => {
    const fetchData = async (): Promise<any> => {
      const res = await getMarathonById(param.id);
      setData(res.item);
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
            <h2 className="TournamentRegisterPage-title">{payment ? 'Thanh toán cá nhân' : 'Đăng ký tham gia'}</h2>
          </Col>
          {isMobile ? (
            <Col span={24}>
              <TournamentRegisterInformation payment={payment} />
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
                    <TournamentRegisterForm data={data} />
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
                <TournamentRegisterInformation payment={payment} data={data} />
              </Col>
            )}
          </Row>
        </Row>
      </div>
    </div>
  );
};

export default TournamentRegisterPage;
