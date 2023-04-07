import { TRootState } from '@/redux/reducers';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import './TournamentRegisterInformation.scss';
import { TTournamentRegisterInformationProps } from './TournamentRegisterInformation.types';

const TournamentRegisterInformation: React.FC<TTournamentRegisterInformationProps> = ({ payment, data }) => {
  const orderState = useSelector((state: TRootState) => state.paymentMethodReducer.getPaymentSuccessResponse);
  return (
    <div className="TournamentRegisterInformation-card sticky">
      {true ? (
        <>
          <div className="TournamentRegisterInformation-card-title">Thông tin cuộc đua</div>
          <div className="TournamentRegisterInformation-card-table expand-x">
            <table>
              <tbody>
                <tr>
                  <td>Địa điểm</td>
                  <td style={{ width: '100%' }}>
                    <strong>{data.location}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Thời gian</td>
                  <td style={{ width: '100%' }}>
                    <strong>{data.startTime}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </>
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
