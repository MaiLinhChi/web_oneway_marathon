import React, { useCallback, useEffect, useState } from 'react';
import './TournamentRegisterGroupJoin.scss';
import BackgroundRegisterPage from '@/assets/images/image-home-banner-3.jpg';
import { Col, Row } from 'antd';
import TournamentRegisterInformation from '@/pages/TournamentRegisterPage/TournamentRegisterInformation';
import TournamentRegisterForm from '@/pages/TournamentRegisterPage/TournamentRegisterForm';
import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import { navigate, useParams } from '@reach/router';
import { detailRaceAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';
import { showNotification } from '@/utils/functions';
import { Paths } from '@/pages/routers';

const TournamentRegisterGroupJoin: React.FC = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
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
  const registerGroup = useSelector((state: TRootState) => state.registerGroupReducer.listGroupsResponse?.[0]);
  useEffect(() => {
    if (!registerGroup) navigate(Paths.Home);
    getMarathonDetail();
  }, [getMarathonDetail, registerGroup, id]);
  return (
    <div className="TournamentRegisterPage">
      <div className="TournamentRegisterPage-background">
        <img src={BackgroundRegisterPage} alt="" />
      </div>
      <div className="container">
        <div className="TournamentRegisterPage-wrapper">
          <h2 className="TournamentRegisterPage-title">Đăng ký tham gia nhóm {registerGroup?.groupName}</h2>

          <div className="TournamentRegisterPage-main">
            <Row gutter={[24, 24]} className="reverse">
              <Col span={24} lg={16}>
                <TournamentRegisterForm isGroup data={data} />
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
