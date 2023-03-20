import React from 'react';

import ImagePlugOut from '@/assets/images/image-plug-out.png';
import Button from '@/components/Button';
import { Paths } from '@/pages/routers';

import './NotFound.scss';

const NotFound: React.FC = () => {
  return (
    <div className="NotFound">
      <div className="NotFound-code">404</div>
      <div className="NotFound-title">Không tìm thấy trang!</div>
      <div className="NotFound-image">
        <img src={ImagePlugOut} alt="" />
      </div>
      <div className="NotFound-description">Rất tiếc, trang đã bị xoá bỏ hoặc liên kết truy cập không đúng</div>
      <div className="NotFound-btn flex justify-center">
        <Button title="Quay về trang chủ" type="primary" link={Paths.Home} size="large" />
      </div>
    </div>
  );
};

export default NotFound;
