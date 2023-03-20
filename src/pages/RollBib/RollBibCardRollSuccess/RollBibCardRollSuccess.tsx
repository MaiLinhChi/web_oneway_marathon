import React from 'react';

import Icon, { EIconColor, EIconName } from '@/components/Icon';
import Button from '@/components/Button';
import { DEFAULT_BIB_NUMBER } from '@/pages/RollBib/RollBibWheel/RollBibWheel.data';
import { Paths } from '@/pages/routers';

import { TRollBibCardRollSuccessProps } from './RollBibCardRollSuccess.types';
import './RollBibCardRollSuccess.scss';

const RollBibCardRollSuccess: React.FC<TRollBibCardRollSuccessProps> = ({ data, color }) => {
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
                <span>5km</span>
              </td>
            </tr>
            <tr>
              <td>Số BIB</td>
              <td>{data?.number || DEFAULT_BIB_NUMBER}</td>
            </tr>
            <tr>
              <td>Họ và tên</td>
              <td>Trần Xuân Hoàng</td>
            </tr>
            <tr>
              <td>Giới tính</td>
              <td>Nam</td>
            </tr>
            <tr>
              <td>Ngày sinh</td>
              <td>8/9/1996</td>
            </tr>
            <tr>
              <td>Số điện thoại</td>
              <td>0798889999</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>trxhoang@gmail.com</td>
            </tr>
            <tr>
              <td>CMT/CCCD/Hộ chiếu</td>
              <td>92754672524</td>
            </tr>
            <tr>
              <td>Size áo</td>
              <td>L</td>
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
