import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { DEFAULT_BIB_NUMBER } from '@/pages/RollBib/RollBibWheel/RollBibWheel.data';
import { Paths } from '@/pages/routers';

import { TRollBibCardRollSuccessProps } from './RollBibCardRollSuccess.types';
import './RollBibCardRollSuccess.scss';

const RollBibCardRollSuccess: React.FC<TRollBibCardRollSuccessProps> = ({ bib, color, data }) => {
  return (
    <div className="RollBibCardRollSuccess">
      <div className="RollBibCardRollSuccess-header flex items-center" style={{ background: color }}>
        <Icon name={EIconName.CheckCircle} color={EIconColor.WHITE} />
        Quay BIB thành công
      </div>
      <div className="RollBibCardRollSuccess-body">
        <div className="RollBibCardRollSuccess-title">Xem lại thông tin đăng ký</div>
        <div className="RollBibCardRollSuccess-table">
          <table>
            <tr>
              <td>Cự ly</td>
              <td>
                <span>{data.distance}M</span>
              </td>
            </tr>
            <tr>
              <td>Số BIB</td>
              <td>{data.bib || DEFAULT_BIB_NUMBER}</td>
            </tr>
            <tr>
              <td>Họ và tên</td>
              <td>{data.fullName}</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>{data.gender}</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
              <td>{data.birthday}</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td>{data.phone}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{data.email}</td>
            </tr>
            <tr>
              <td>CMT/CCCD/Hộ chiếu</td>
              <td>{data.passport}</td>
            </tr>
            <tr>
              <td>Size áo</td>
              <td>{data.shirtSize}</td>
            </tr>
          </table>
        </div>

        <div className="RollBibCardRollSuccess-btn">
          <Button
            title="Quay về trang chủ"
            backgroundColor={color}
            titleColor={EIconColor.WHITE}
            size="large"
            borderColor={color}
            link={Paths.Home}
          />
        </div>
      </div>
    </div>
  );
};

export default RollBibCardRollSuccess;
