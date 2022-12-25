import React from 'react';

import './TournamentRegisterGroup.scss';

const TournamentRegisterGroup: React.FC = () => {
  return (
    <div className="TournamentRegisterPage-card sticky">
      <div className="TournamentRegisterPage-card-title">Thông tin nhóm</div>
      <div className="TournamentRegisterPage-card-table expand-x">
        <table>
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
        </table>
      </div>
    </div>
  );
};

export default TournamentRegisterGroup;
