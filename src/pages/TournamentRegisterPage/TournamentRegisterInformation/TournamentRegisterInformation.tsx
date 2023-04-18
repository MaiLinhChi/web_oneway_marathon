import { TRootState } from '@/redux/reducers';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './TournamentRegisterInformation.scss';
import { TTournamentRegisterInformationProps } from './TournamentRegisterInformation.types';

const TournamentRegisterInformation: React.FC<TTournamentRegisterInformationProps> = ({ payment, data }) => {
  const orderState = useSelector((state: TRootState) => state.orderDetailReducer.getOrderDetailResponse?.data);
  return (
    <div className="TournamentRegisterInformation-card sticky">
      {payment ? (
        orderState ? (
          <>
            <div className="TournamentRegisterInformation-card-title">Thông tin của bạn</div>
            <div className="TournamentRegisterInformation-card-table expand-x">
              <table>
                <tbody>
                  <tr>
                    <td>Họ và tên</td>
                    <td>
                      <strong>{orderState.fullName}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Cự ly</td>
                    <td>
                      <strong>{orderState.distance}m</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Tên trên BIB</td>
                    <td>
                      <strong>{orderState.nameBib}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Ngày sinh</td>
                    <td>
                      <strong>{orderState.birthday}</strong>
                    </td>
                  </tr>
                  {/* <tr>
                    <td>Email</td>
                    <td>
                      <strong>{orderState.email}</strong>
                    </td>
                  </tr> */}
                  <tr>
                    <td>SĐT</td>
                    <td>
                      <strong>{orderState.phone}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>CCCD</td>
                    <td>
                      <strong>{orderState.passport}</strong>
                    </td>
                  </tr>
                  <tr>
                    <td>Size áo</td>
                    <td>
                      <strong>{orderState.shirtSize}</strong>
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
