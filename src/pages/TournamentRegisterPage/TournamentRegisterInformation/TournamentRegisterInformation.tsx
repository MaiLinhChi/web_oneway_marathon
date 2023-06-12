import React, { ReactElement } from 'react';
import './TournamentRegisterInformation.scss';
import { TTournamentRegisterInformationProps } from './TournamentRegisterInformation.types';
import { useLocation } from '@reach/router';
import { EKeyTabTournamentRegisterPage } from '../TournamentRegisterPage.enums';
import { getQueryParam } from '@/utils/functions';
import { useSelector } from 'react-redux';
import { TRootState } from '@/redux/reducers';
import moment from 'moment';

const TournamentRegisterInformation: React.FC<TTournamentRegisterInformationProps> = ({ group }) => {
  const { pathname } = useLocation();
  const type = pathname.split('/')[2];
  const raceDetailState = useSelector((state: TRootState) => state.raceReducer.detailRaceResponse);
  const ticketState = useSelector((state: TRootState) => state.registerReducer.saveTicket);
  const orderState = useSelector((state: TRootState) => state.ordersReducer.getOrderByIdResponse?.data);
  const getDataContent = (): ReactElement => {
    if (type === 'register' || type === 'join' || group) {
      const data = raceDetailState ? raceDetailState : group;
      return (
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
      );
    }
    if (orderState?.group && orderState?.bibs?.length > 1) {
      const data = orderState.group;
      return (
        <>
          <div className="TournamentRegisterInformation-card-title">Thông tin nhóm</div>
          <div className="TournamentRegisterInformation-card-table expand-x">
            <table>
              <tr>
                <td>Tên nhóm</td>
                <td style={{ width: '100%' }}>
                  <strong>{data?.groupName}</strong>
                </td>
              </tr>
              <tr>
                <td>Thành viên</td>
                <td style={{ width: '100%' }}>
                  <strong>{data?.membership?.length}</strong>
                </td>
              </tr>
            </table>
          </div>
        </>
      );
    } else {
      const data = orderState?.bibs?.[0] ? orderState?.bibs?.[0] : ticketState;
      return (
        <>
          <div className="TournamentRegisterInformation-card-title">Thông tin của bạn</div>
          <div className="TournamentRegisterInformation-card-table">
            <table>
              <tbody>
                <tr>
                  <td>Họ và tên</td>
                  <th>
                    <strong>{data?.fullName}</strong>
                  </th>
                </tr>
                <tr>
                  <td>Cự ly</td>
                  <td>
                    <strong style={{ color: '#00AF89' }}>
                      {data?.marathon?.distance}
                      {data?.marathon?.unit}
                    </strong>
                  </td>
                </tr>
                <tr>
                  <td>Tên trên BIB</td>
                  <td>
                    <strong>{data?.nameBib}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Ngày sinh</td>
                  <td>
                    <strong>{moment(data?.birthday).format('DD/MM/YYYY')}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Email</td>
                  <th>
                    <strong>{data?.email}</strong>
                  </th>
                </tr>
                <tr>
                  <td>SĐT</td>
                  <td>
                    <strong>{data?.phone}</strong>
                  </td>
                </tr>
                <tr>
                  <td>CCCD</td>
                  <td>
                    <strong>{data?.passport}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Size áo</td>
                  <td>
                    <strong>{data?.shirtSize}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
      );
    }
  };
  return <div className="TournamentRegisterInformation-card sticky">{getDataContent()}</div>;
};

export default TournamentRegisterInformation;
