import React from 'react';
import { Col, Row } from 'antd';
import classNames from 'classnames';
import { Link, useLocation } from '@reach/router';

import ImageBoCongThuong from '@/assets/images/image-bo-cong-thuong.png';

import { dataFooterLinks, dataFooterPartnerLinks } from './Footer.data';
import { TFooterProps } from './Footer.types.d';
import './Footer.scss';

const Footer: React.FC<TFooterProps> = () => {
  const { pathname } = useLocation();

  return (
    <div className="Footer" id="lienhe">
      <div className="container">
        <div className="Footer-wrapper">
          <Row gutter={[24, 24]}>
            <Col xs={{ span: 24 }} lg={{ span: 7 }}>
              <div className="Footer-logo">
                <img src={ImageBoCongThuong} alt="" />
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 17 }}>
              <h4 className="Footer-title">CÔNG TY CỔ PHẦN ĐẦU TƯ CÔNG NGHỆ TRUYỀN THÔNG ONEBIT</h4>
              <p className="Footer-description">
                MST: 0317061594 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 03/12/2021.
                <br />
                SĐT: <a href="tel:081 8007898">081 8007898</a>
                <br />
                Email: <a href="mailto: info@onewaymarathon.com">info@onewaymarathon.com</a>
                <br />
                Địa chỉ: Số 4 Trần Nhật Duật, Phường Tân Định, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
              </p>
            </Col>
            <Col span={24}>
              <div className="Footer-line" />
            </Col>
            {dataFooterLinks.map((item, index) => (
              <Col xs={{ span: 24 }} lg={{ span: 8 }} key={index}>
                <Link
                  to={item.link}
                  className={classNames('Footer-description Footer-link', { active: item.link === pathname })}
                >
                  {item.title}
                </Link>
              </Col>
            ))}
            <Col span={24}>
              <div className="Footer-line" />
            </Col>
            <Col span={24}>
              <div className="Footer-partner flex flex-wrap items-center justify-center">
                {dataFooterPartnerLinks().map((item, index) => (
                  <div className="Footer-partner-item" style={{ maxWidth: item.maxWidth }} key={index}>
                    <Link to={item.link}>
                      <img src={item.logo} alt="" />
                    </Link>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Footer;
