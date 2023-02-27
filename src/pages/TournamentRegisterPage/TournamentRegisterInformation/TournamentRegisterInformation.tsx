import React from 'react';

import './TournamentRegisterInformation.scss';

const TournamentRegisterInformation: React.FC = () => {
  return (
    <div className="TournamentRegisterInformation-card sticky">
      <div className="TournamentRegisterInformation-card-title">Thông tin cuộc đua</div>
      <div className="TournamentRegisterInformation-card-table expand-x">
        <table>
          <tr>
            <td>Địa điểm</td>
            <td style={{ width: '100%' }}>
              <strong>Thời gian</strong>
            </td>
          </tr>
          <tr>
            <td>Vũng Tàu</td>
            <td style={{ width: '100%' }}>
              <strong>4/4/2023</strong>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TournamentRegisterInformation;
