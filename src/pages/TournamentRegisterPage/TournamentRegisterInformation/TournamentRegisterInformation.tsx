import React, { useCallback, useEffect, useState } from 'react';
import './TournamentRegisterInformation.scss';
import { TTournamentRegisterInformationProps } from './TournamentRegisterInformation.types';
import { useLocation, useParams } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage.enums';
import { getQueryParam, showNotification } from '@/utils/functions';
import { useDispatch } from 'react-redux';
import { getMarathonByIdAction, getOrderDetailAction } from '@/redux/actions';
import { EResponseCode, ETypeNotification } from '@/common/enums';

const TournamentRegisterInformation: React.FC<TTournamentRegisterInformationProps> = () => {
  const [data, setData] = useState<any>({});
  const tabQuery = getQueryParam('tab');
  const { id } = useParams();
  const { pathname } = useLocation();
  const type = pathname.split('/')[2];
  const dispatch = useDispatch();
  const getData = useCallback(() => {
    if (type === 'register') {
      dispatch(getMarathonByIdAction.request(id, (response): void => handlerGetMarathonDetailSuccess(response)));
    } else {
      dispatch(
        getOrderDetailAction.request({ paths: { id } }, (response): void => handlerGetOrderDetailSuccess(response)),
      );
    }
  }, [type, dispatch, id]);
  const handlerGetMarathonDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, response.message);
      setData(response.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  const handlerGetOrderDetailSuccess = (response: any): void => {
    if (response.status === EResponseCode.OK) {
      showNotification(ETypeNotification.SUCCESS, 'Lấy chi tiết đơn hàng thành công !');
      console.log(response);
      setData(response.data);
    } else {
      showNotification(ETypeNotification.ERROR, response.message);
    }
  };
  useEffect(() => {
    getData();
  }, [tabQuery, getData]);
  console.log(data);
  return (
    <div className="TournamentRegisterInformation-card sticky">
      {tabQuery === EKeyTabTournamentRegisterPage.SINGLE ? (
        data?.email ? (
          <>
            <div className="TournamentRegisterInformation-card-title">Thông tin của bạn</div>
            <div className="TournamentRegisterInformation-card-table expand-x">
              <table>
                <tbody>
                  <tr>
                    <td>Họ và tên</td>
                    <td>
                      <strong>{data.fullName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Cự ly</td>
                    <td>
                      <strong>{data.distance}m</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Tên trên BIB</td>
                    <td>
                      <strong>{data.nameBib}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Ngày sinh</td>
                    <td>
                      <strong>{data.birthday}</strong>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Email</td>
                    <td>
                      <strong>{data.email}</strong>
                    </td>
                  </tr> */}
                  <tr>
                    <td>SĐT</td>
                    <td>
                      <strong>{data.phone}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>CCCD</td>
                    <td>
                      <strong>{data.passport}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Size áo</td>
                    <td>
                      <strong>{data.shirtSize}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <>
            <div className="TournamentRegisterInformation-card-title">Thông tin cuộc đua</div>
            <div className="TournamentRegisterInformation-card-table expand-x">
              <table>
                <tbody>
                  <tr>
                    <td>Địa điểm</td>
                    <td style={{ width: '100%' }}>
                      <strong>{data?.location}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Thời gian</td>
                    <td style={{ width: '100%' }}>
                      <strong>{data?.startTime}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )
      ) : (
        <>
          <div className="TournamentRegisterInformation-card-title">Thông tin nhóm</div>
          <div className="TournamentRegisterInformation-card-table expand-x">
            <table>
              <tbody>
                <tr>
                  <td>Tên nhóm</td>
                  <td style={{ width: '100%' }}>
                    <strong>Only tiger</strong>
                  </td>
                </tr>
                <tr>
                  <td>Thành viên</td>
                  <td style={{ width: '100%' }}>
                    <strong>3</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default TournamentRegisterInformation;
