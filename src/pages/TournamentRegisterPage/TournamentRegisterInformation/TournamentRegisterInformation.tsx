import React, { useCallback, useEffect, useState } from 'react';
import './TournamentRegisterInformation.scss';
import { TTournamentRegisterInformationProps } from './TournamentRegisterInformation.types';
import { useLocation } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage.enums';
import { getQueryParam } from '@/utils/functions';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';

const TournamentRegisterInformation: React.FC<TTournamentRegisterInformationProps> = ({ payment }) => {
  const [data, setData] = useState<any>({});
  const tabQuery = getQueryParam('tab');
  const { pathname } = useLocation();
  const type = pathname.split('/')[2];
  const marathonDetailState = useSelector((state: TRootState) => state.marathonsReducer?.getMarathonByIdResponse);
  const orderDetailState = useSelector((state: TRootState) => state.orderDetailReducer?.getOrderDetailResponse);
  const getData = useCallback(() => {
    if (payment) {
      setData(payment);
      return;
    }
    if (type === 'register') {
      setData(marathonDetailState?.data);
    } else {
      setData(orderDetailState?.data);
    }
  }, [type, marathonDetailState, orderDetailState, payment]);

  useEffect(() => {
    getData();
  }, [tabQuery, getData, payment]);
  return (
    <div className="TournamentRegisterInformation-card sticky">
      {tabQuery === EKeyTabTournamentRegisterPage.SINGLE || payment ? (
        data?.email ? (
          <>
            <div className="TournamentRegisterInformation-card-title">Thông tin của bạn</div>
            <div className="TournamentRegisterInformation-card-table">
              <table>
                <tbody>
                  <tr>
                    <td>Họ và tên</td>
                    <th>
                      <strong>{data.fullName}</strong>
                    </th>
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
                  <tr>
                    <td>Email</td>
                    <th>
                      <strong>{data.email}</strong>
                    </th>
                  </tr>
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
