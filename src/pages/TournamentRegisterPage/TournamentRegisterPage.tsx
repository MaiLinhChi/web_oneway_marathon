import React, { ReactElement, useCallback, useEffect, useState } from 'react';
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
import { getQueryParam, scrollToTop, showNotification } from '@/utils/functions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import TournamentPaymentRegulars from './TournamentPaymentRegulars';
import { detailRaceAction } from '@/redux/actions';

const TournamentRegisterPage: React.FC<TTournamentRegisterPageProps> = () => {
  const [data, setData] = useState({});
  const [activeTab, setActiveTab] = useState<TSelectOption>(dataTabTournamentRegisterPage[0]);
  const { id } = useParams();
  const { pathname } = useLocation();
  const key = 'tab';
  const tabQuery = getQueryParam(key);
  const payment = pathname.includes('payment');
  const regulations = pathname.includes('regulations');
  const isMobile = useSelector((state: TRootState) => state.uiReducer.device.isMobile);
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.listGroupsResponse?.[0]);
  const dispatch = useDispatch();
  const getMarathonDetail = useCallback(() => {
    if (!id) return;
    dispatch(detailRaceAction.request({ id }, (response): void => handlerGetMarathonDetailSuccess(response)));
  }, [dispatch, id]);
  const handlerGetMarathonDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      // showNotification(ETypeNotification.SUCCESS, response.message);
      setData(response.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const getContent = (): ReactElement => {
    if (payment) {
      return <TournamentPaymentForm />;
    } else if (regulations) {
      return <TournamentPaymentRegulars />;
    } else if (activeTab.value === EKeyTabTournamentRegisterPage.SINGLE) {
      return (
        <TournamentRegisterForm
          data={data}
          isGroup={tabQuery === EKeyTabTournamentRegisterPage.MULTIPLE ? true : false}
        />
      );
    }
    return <TournamentRegisterGroupForm data={data} />;
  };
  useEffect(() => {
    getMarathonDetail();
    scrollToTop();
  }, [id, getMarathonDetail]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <Row className="TournamentRegisterPage-wrapper">
          <Col span={24}>
            <h2 className="TournamentRegisterPage-title">
              {payment
                ? 'Thanh toán'
                : registerGroup
                ? `Đăng ký tham gia nhóm ${registerGroup.groupName}`
                : 'Đăng ký tham gia'}
            </h2>
          </Col>
          {isMobile ? (
            <Col span={24}>
              <TournamentRegisterInformation />
            </Col>
          ) : (
            ''
          )}
          <Col span={24}>
            {!payment && !regulations && (
              <div className="TournamentRegisterPage-tab">
                <TabRectangle value={activeTab} onChange={setActiveTab} options={dataTabTournamentRegisterPage} />
              </div>
            )}
          </Col>
          <Row className="TournamentRegisterPage-main">
            <Col span={24} lg={16}>
              {getContent()}
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
