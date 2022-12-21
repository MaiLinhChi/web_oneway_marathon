import React from 'react';

import Avatar from '@/components/Avatar';
import { Col, Row } from 'antd';
import Button from '@/components/Button';

import { TProfileCardProps } from './ProfileCard.types';
import './ProfileCard.scss';

const ProfileCard: React.FC<TProfileCardProps> = () => {
  return (
    <div className="ProfileCard">
      <div className="ProfileCard-avatar flex justify-center">
        <Avatar size={112} />
      </div>
      <div className="ProfileCard-title">Trần Xuân Hoàng</div>
      <div className="ProfileCard-description">
        Bio Max 3 row (Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim)
      </div>
      <div className="ProfileCard-btns">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Button title="Chỉnh sửa" type="primary" />
          </Col>
          <Col span={12}>
            <Button title="Chia sẻ" type="text" />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProfileCard;
